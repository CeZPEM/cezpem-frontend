"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export default function GoogleAnalyticsWrapper() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return null;
  }

  return <GoogleAnalytics gaId="G-SRJD3JE52M" />;
}
