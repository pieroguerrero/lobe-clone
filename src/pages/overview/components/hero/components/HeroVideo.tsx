import { useMemo, useState } from "react";
import ReactPlayer from "react-player/file";
import desktopVideo from "../../../../../assets/videos/hero-desktop.mp4";
import mobileVideo from "../../../../../assets/videos/hero-mobile.mp4";
import MediaQueries from "../../../../../utilities/MediaQueries";
import imgMobile from "../../../../../assets/images/hero/fallbackMobileVideo.webp";
import imgDesktop from "../../../../../assets/images/hero/fallbackDesktopVideo.webp";

interface IHeroVideoProps {
  changeText(text: string): void;
  play: boolean;
}
export default function HeroVideo({
  changeText,
  play = true,
}: IHeroVideoProps) {
  const { isMinWidth640px, textsToChange } = useMemo(() => {
    return {
      isMinWidth640px: MediaQueries.minWidth640px.matches,
      textsToChange: [
        "identify plants",
        "see gestures",
        "count reps",
        "feel emotions",
        "sense colors",
        "check safety",
        "identify plants",
      ],
    };
  }, []);
  return (
    <ReactPlayer
      url={isMinWidth640px ? desktopVideo : mobileVideo}
      playing={play}
      width="100%"
      height="auto"
      loop={true}
      controls={false}
      muted={true}
      style={{
        clipPath: "inset(1px 1px)",
      }}
      config={{
        attributes: {
          poster: isMinWidth640px ? imgDesktop : imgMobile,
        },
      }}
      onProgress={(state) => {
        const index = Math.round(Math.abs(-0.4 + state.playedSeconds / 5));
        changeText(textsToChange[index]);
      }}
    />
  );
}
