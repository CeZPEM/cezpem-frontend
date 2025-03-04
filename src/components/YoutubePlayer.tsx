import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubePlayer({
  ...props
}: {
  id: string;
  title: string;
}) {
  return <LiteYouTubeEmbed {...props} />;
}
