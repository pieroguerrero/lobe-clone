import { useState } from "react";
import ReactPlayer from "react-player/file";
import desktopVideo from "../../../../../assets/videos/hero-desktop.mp4";
import mobileVideo from "../../../../../assets/videos/hero-mobile.mp4";
import MediaQueries from "../../../../../utilities/MediaQueries";

interface IHeroVideoProps {
  changeText(text: string): void;
}
export default function HeroVideo({ changeText }: IHeroVideoProps) {
  const [textsToChange] = useState([
    "identify plants",
    "see gestures",
    "count reps",
    "feel emotions",
    "sense colors",
    "check safety",
    "identify plants",
  ]);

  return (
    <ReactPlayer
      url={MediaQueries.minWidth640px.matches ? desktopVideo : mobileVideo}
      playing={true}
      width="100%"
      height="auto"
      loop={true}
      controls={false}
      muted={true}
      style={{
        clipPath: "inset(1px 1px)",
      }}
      onProgress={(state) => {
        const index = Math.round(Math.abs(-0.4 + state.playedSeconds / 5));
        changeText(textsToChange[index]);
      }}
    />
  );
}
