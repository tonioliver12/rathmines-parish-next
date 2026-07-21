/**
 * PARKED — not currently used by app/webcam/page.tsx.
 *
 * Confirmed root cause (production, Chrome DevTools → Network):
 *   GET playlist.m3u8 → net::ERR_CONTENT_DECODING_FAILED, HTTP 206
 * The Wowza/CloudFront origin sends a Content-Encoding header (gzip) on a
 * 206 partial-content response that the browser cannot decode in that
 * context. This is a server-side (Wowza/churchservices.tv) response bug,
 * not CORS, not CSP, not this component's fetch/hls.js logic — both were
 * independently ruled out (open CORS confirmed via curl with spoofed
 * *.vercel.app Origin/Referer; no CSP block, since the failure is a
 * decoding error on a request that DID complete).
 *
 * page.tsx currently uses a plain <iframe src="https://www.churchservices.tv/...">
 * instead, which sidesteps the issue since the browser isn't fetching the
 * .m3u8/.ts resources itself.
 *
 * To resume this component: stand up a small server-side proxy (a Next.js
 * Route Handler works) that fetches the manifest/segments from Wowza,
 * strips/rewrites the bad Content-Encoding header, and re-serves the bytes
 * to the browser — then point `src` below at that proxy instead of the
 * Wowza URL directly.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import type Hls from "hls.js";
import styles from "./page.module.css";

type LivePlayerProps = {
  src: string;
  fallbackHref: string;
};

const MEDIA_ERROR_CODES: Record<number, string> = {
  1: "MEDIA_ERR_ABORTED",
  2: "MEDIA_ERR_NETWORK",
  3: "MEDIA_ERR_DECODE",
  4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
};

/**
 * Independent diagnostic fetch of the manifest, run whenever the player
 * errors out. This tells us whether the manifest itself is reachable
 * (HTTP status, CORS header) or whether the request never completed at all
 * (a thrown TypeError here usually means CORS/CSP/network-level block,
 * as opposed to a normal HTTP error status).
 */
async function logManifestDiagnostics(url: string, context: string) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    console.error(`[LivePlayer] ${context} — diagnostic fetch of manifest`, {
      url,
      httpStatus: res.status,
      ok: res.ok,
      corsAllowOrigin: res.headers.get("access-control-allow-origin"),
      contentType: res.headers.get("content-type"),
    });
  } catch (err) {
    const e = err as Error;
    console.error(
      `[LivePlayer] ${context} — diagnostic fetch of manifest THREW (this usually means a CORS, CSP, or network-level block rather than a normal HTTP error status)`,
      { url, errorName: e.name, errorMessage: e.message },
    );
  }
}

export default function LivePlayer({ src, fallbackHref }: LivePlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    let hls: Hls | null = null;

    const handleNativeError = () => {
      const mediaError = video.error;
      console.error("[LivePlayer] <video> element error event", {
        code: mediaError?.code,
        codeName: mediaError ? MEDIA_ERROR_CODES[mediaError.code] : undefined,
        message: mediaError?.message || "(browser gave no message)",
        currentSrc: video.currentSrc,
      });
      logManifestDiagnostics(src, "native <video> error");
      setHasError(true);
    };
    video.addEventListener("error", handleNativeError);

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari and iOS play HLS natively — no hls.js needed.
      video.src = src;
    } else {
      import("hls.js").then(({ default: HlsClass }) => {
        if (cancelled) return;

        if (!HlsClass.isSupported()) {
          console.error(
            "[LivePlayer] hls.js: MediaSource Extensions are not supported in this browser/context.",
          );
          setHasError(true);
          return;
        }

        hls = new HlsClass();
        hls.on(HlsClass.Events.ERROR, (_event, data) => {
          console.error("[LivePlayer] hls.js error event", {
            type: data.type,
            details: data.details,
            fatal: data.fatal,
            url: data.url,
            httpStatus: data.response?.code,
            httpStatusText: data.response?.text,
            reason: data.reason,
            errorMessage: data.error?.message,
          });
          if (data.fatal) {
            logManifestDiagnostics(
              src,
              `hls.js fatal error (${data.type} / ${data.details})`,
            );
            setHasError(true);
          }
        });
        hls.loadSource(src);
        hls.attachMedia(video);
      });
    }

    return () => {
      cancelled = true;
      video.removeEventListener("error", handleNativeError);
      hls?.destroy();
    };
  }, [src]);

  if (hasError) {
    return (
      <div className={styles.fallback}>
        <p>
          The live player couldn&apos;t load. Watch directly on
          churchservices.tv instead:
        </p>
        <a className="btn-primary" href={fallbackHref} target="_blank" rel="noopener">
          Open the live stream →
        </a>
      </div>
    );
  }

  return <video ref={videoRef} className={styles.video} controls playsInline />;
}
