import { useEffect, useState } from "react";

export const useIsTouchVideoRestricted = () => {
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent;
    const maxTouchPoints = navigator.maxTouchPoints || 0;

    const isIOSDevice = /iPhone|iPad|iPod/.test(ua);
    const isWebKit = /WebKit/.test(ua); // ✅ Incluye Safari y Chrome en iOS

    // iPadOS detection (Safari or Chrome)
    const isIPadOS = !isIOSDevice && maxTouchPoints > 1 && /Macintosh/.test(ua);

    if ((isIOSDevice || isIPadOS) && isWebKit) {
      setIsRestricted(true);
    }
  }, []);

  return isRestricted;
};
