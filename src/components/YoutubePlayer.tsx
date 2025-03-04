import { RefAttributes } from "react";
import LiteYouTubeEmbed, { LiteYouTubeProps } from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubePlayer({
  ...props
}: LiteYouTubeProps & RefAttributes<HTMLIFrameElement>) {
  return <LiteYouTubeEmbed {...props} />;
}
