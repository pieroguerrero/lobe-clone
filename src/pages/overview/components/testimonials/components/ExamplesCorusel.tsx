import { useRef, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import imageBees from "../../../../../assets/images/testimonials/lr/Bees.jpg";
import imageFeelTheBurn from "../../../../../assets/images/testimonials/lr/Feel the Burn.jpg";
import imageHandCount from "../../../../../assets/images/testimonials/lr/Hand Count.jpg";
import imageLaughing from "../../../../../assets/images/testimonials/lr/Laughing.jpg";
import imageMaskUp from "../../../../../assets/images/testimonials/lr/Mask Up.jpg";
import imagePaintingWithMike from "../../../../../assets/images/testimonials/lr/Painting with Mike.jpg";
import imagePlants from "../../../../../assets/images/testimonials/lr/Plants.jpg";
import imageWhales from "../../../../../assets/images/testimonials/lr/Whales.jpg";
import imageAfricanWildLife from "../../../../../assets/images/testimonials/rl/African Wildlife.jpg";
import imageCheckout from "../../../../../assets/images/testimonials/rl/Checkout.jpg";
import imageCompression from "../../../../../assets/images/testimonials/rl/Compression.jpg";
import imageDeforestation from "../../../../../assets/images/testimonials/rl/Deforestation.jpg";
import imageMicroscope from "../../../../../assets/images/testimonials/rl/Microscope.jpg";
import imageSleeping from "../../../../../assets/images/testimonials/rl/Sleeping.jpg";
import imageTelescope from "../../../../../assets/images/testimonials/rl/Telescope.jpg";
import imageWildfire from "../../../../../assets/images/testimonials/rl/Wildfire.jpg";
import videoBees from "../../../../../assets/videos/testimonials/lr/Bees.mp4";
import videoFeelTheBurn from "../../../../../assets/videos/testimonials/lr/Feel the Burn.mp4";
import videoHandCount from "../../../../../assets/videos/testimonials/lr/Hand Count.mp4";
import videoLaughing from "../../../../../assets/videos/testimonials/lr/Laughing.mp4";
import videoMaskUp from "../../../../../assets/videos/testimonials/lr/Mask Up.mp4";
import videoPaintingWithMike from "../../../../../assets/videos/testimonials/lr/Painting with Mike.mp4";
import videoPlants from "../../../../../assets/videos/testimonials/lr/Plants.mp4";
import videoWhales from "../../../../../assets/videos/testimonials/lr/Whales.mp4";
import videoAfricanWildLife from "../../../../../assets/videos/testimonials/rl/African Wildlife.mp4";
import videoCheckout from "../../../../../assets/videos/testimonials/rl/Checkout.mp4";
import videoCompression from "../../../../../assets/videos/testimonials/rl/Compression.mp4";
import videoDeforestation from "../../../../../assets/videos/testimonials/rl/Deforestation.mp4";
import videoMicroscope from "../../../../../assets/videos/testimonials/rl/Microscope.mp4";
import videoSleeping from "../../../../../assets/videos/testimonials/rl/Sleeping.mp4";
import videoTelescope from "../../../../../assets/videos/testimonials/rl/Telescope.mp4";
import videoWildfire from "../../../../../assets/videos/testimonials/rl/Wildfire.mp4";
import useOnScreen from "../../../../../hooks/useOnScreen";
import MediaQueries from "../../../../../utilities/MediaQueries";
import NavPaths from "../../../../../utilities/NavPaths";
import Carousel from "./carousel/Carousel";
import VideoItem from "./VideoItem";

export default function ExamplesCorusel() {
  const [minWidth1536px] = useState(MediaQueries.minWidth1536px.matches);
  const [minWidth640px] = useState(MediaQueries.minWidth640px.matches);
  const divCarouselRef: any = useRef<HTMLDivElement>();
  const divCarouselOnScreen = useOnScreen<HTMLDivElement>(
    divCarouselRef,
    MediaQueries.minWidth640px.matches ? "-200px" : "20px"
  );

  const itemWidth = minWidth1536px ? 600 : minWidth640px ? 540 : 295;
  const itemHeight = minWidth1536px ? 420 : minWidth640px ? 379 : 210;

  return (
    <div
      ref={divCarouselRef}
      className=" mt-20 mb-16 w-full sm:mt-32 sm:mb-28 2xl:mt-44 2xl:mb-40 "
    >
      <div className="flex w-full flex-col px-7  sm:px-[12%] 2xl:px-[16%]">
        <h2 className=" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]">
          Lobe <span className=" text-color-primary">Examples</span>
        </h2>
        <p className="mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:mt-7 sm:w-full sm:text-[32px] 2xl:text-[39px]">
          One tool, endless possibilities. Discover all the things you can train
          your app to do with Lobe.
        </p>
      </div>
      <LazyLoadComponent>
        <div className=" mt-9 flex flex-col gap-3 bg-transparent sm:mt-14 sm:gap-0 2xl:gap-4">
          <Carousel
            itemHeight={itemHeight}
            itemWidth={itemWidth}
            shadowsWidth={0}
            animationDirection={divCarouselOnScreen ? "RL" : "none"}
            animationSpeed={140}
          >
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoBees}
              videoPoster={imageBees}
              title="Beehive Health"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoLaughing}
              videoPoster={imageLaughing}
              title="Emotional Reactions"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoPaintingWithMike}
              videoPoster={imagePaintingWithMike}
              title="Interactive Painting"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoFeelTheBurn}
              videoPoster={imageFeelTheBurn}
              title="Personal Trainer"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoHandCount}
              videoPoster={imageHandCount}
              title="Hand Gestures"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoPlants}
              videoPoster={imagePlants}
              title="Plant Species"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoWhales}
              videoPoster={imageWhales}
              title="Whale Watching"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoMaskUp}
              videoPoster={imageMaskUp}
              title="Safety Precautions"
              play={divCarouselOnScreen}
            />
          </Carousel>

          <Carousel
            itemHeight={itemHeight}
            itemWidth={itemWidth}
            shadowsWidth={0}
            animationDirection={divCarouselOnScreen ? "LR" : "none"}
            animationSpeed={140}
          >
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoAfricanWildLife}
              videoPoster={imageAfricanWildLife}
              title="Wildlife Behavior"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoCheckout}
              videoPoster={imageCheckout}
              title="Smart Checkout"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoCompression}
              videoPoster={imageCompression}
              title="Equipment Analytics"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoDeforestation}
              videoPoster={imageDeforestation}
              title="Aerial Imagery"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoMicroscope}
              videoPoster={imageMicroscope}
              title="Scientific Research"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoSleeping}
              videoPoster={imageSleeping}
              title="Baby Monitor"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoTelescope}
              videoPoster={imageTelescope}
              title="Telescopic Imagery"
              play={divCarouselOnScreen}
            />
            <VideoItem
              linkTo={NavPaths.Examples.path}
              videoSrc={videoWildfire}
              videoPoster={imageWildfire}
              title="Fire Watch"
              play={divCarouselOnScreen}
            />
          </Carousel>
        </div>
      </LazyLoadComponent>
    </div>
  );
}
