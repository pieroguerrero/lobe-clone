import { useEffect } from "react";
import { IVideoElement } from "../../../../../utilities/Types";
import Carousel from "./carousel/Carousel";
import VideoItem from "./VideoItem";

interface IVideoCarouselProps {
  itemHeight: number;
  itemWidth: number;
  animationDirection: "RL" | "LR";
  play: boolean;
  videoElements: IVideoElement[];
}
export default function VideosCarousel({
  itemHeight,
  itemWidth,
  animationDirection,
  play,
  videoElements,
}: IVideoCarouselProps) {
  console.log("VideosCarousel");
  return (
    <Carousel
      itemHeight={itemHeight}
      itemWidth={itemWidth}
      shadowsWidth={0}
      animationDirection={animationDirection}
      animationSpeed={40}
    >
      {videoElements.map((element, index) => {
        return (
          <VideoItem
            key={index}
            linkTo={element.linkTo}
            videoSrc={element.videoSrc}
            videoPoster={element.videoPoster}
            title={element.title}
            play={play}
          />
        );
      })}
    </Carousel>
  );
}
