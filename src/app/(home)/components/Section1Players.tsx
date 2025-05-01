"use client";

import YoutubePlayer from "@/components/YoutubePlayer";
import { useEffect, useState } from "react";

export default function Section1Players() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[960px] mt-14 md:mt-8 rounded-md overflow-hidden min-h-[540px]">
      {!isMobile ? (
        <div className="h-full w-full max-h-screen max-w-[100vw] hidden md:block">
          <YoutubePlayer
            thumbnail="/video-cover.jpg"
            id="kRQkAR05kAI"
            title="Organize-se no CeZPEM"
            announce="Assista ao vídeo"
            aspectHeight={9}
            aspectWidth={16}
          />
        </div>
      ) : (
        <div className="h-full w-full max-h-[98vh] max-w-[100vw] md:hidden [&>article]:max-h-[94vh] md:[&>article]:max-h-none">
          <YoutubePlayer
            thumbnail="/video-cover.jpg"
            id="fIo4NwZXIHU"
            title="Organize-se no CeZPEM"
            aspectHeight={16}
            aspectWidth={9}
            activatedClass="w-[100vw] max-h-[98vh] w-full h-full [&>button]:hidden"
          />
        </div>
      )}
    </div>
  );
}
