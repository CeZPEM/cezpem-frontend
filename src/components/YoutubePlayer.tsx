"use client";

import { RefAttributes } from "react";
import type { LiteYouTubeProps } from "react-lite-youtube-embed";
import dynamic from "next/dynamic";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const LiteYouTubeEmbed = dynamic(() => import("react-lite-youtube-embed"), {
  ssr: false,
});

export default function YoutubePlayer({
  ...props
}: LiteYouTubeProps & RefAttributes<HTMLIFrameElement>) {
  return <LiteYouTubeEmbed {...props} />;
}
