"use client";

import { useEffect, useRef, useState } from "react";
import type Hls from "hls.js";
import styles from "./page.module.css";

type LivePlayerProps = {
  src: string;
  fallbackHref: string;
};

export default function LivePlayer({ src, fallbackHref }: LivePlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari and iOS play HLS natively — no hls.js needed.
      video.src = src;
    } else {
      import("hls.js").then(({ default: HlsClass }) => {
        if (cancelled) return;

        if (!HlsClass.isSupported()) {
          setHasError(true);
          return;
        }

        hls = new HlsClass();
        hls.on(HlsClass.Events.ERROR, (_event, data) => {
          if (data.fatal) setHasError(true);
        });
        hls.loadSource(src);
        hls.attachMedia(video);
      });
    }

    return () => {
      cancelled = true;
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

  return (
    <video
      ref={videoRef}
      className={styles.video}
      controls
      playsInline
      onError={() => setHasError(true)}
    />
  );
}
