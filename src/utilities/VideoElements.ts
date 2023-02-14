import imageBees from "../assets/images/testimonials/lr/Bees.jpg";
import imageFeelTheBurn from "../assets/images/testimonials/lr/Feel the Burn.jpg";
import imageHandCount from "../assets/images/testimonials/lr/Hand Count.jpg";
import imageLaughing from "../assets/images/testimonials/lr/Laughing.jpg";
import imageMaskUp from "../assets/images/testimonials/lr/Mask Up.jpg";
import imagePaintingWithMike from "../assets/images/testimonials/lr/Painting with Mike.jpg";
import imagePlants from "../assets/images/testimonials/lr/Plants.jpg";
import imageWhales from "../assets/images/testimonials/lr/Whales.jpg";
import imageAfricanWildLife from "../assets/images/testimonials/rl/African Wildlife.jpg";
import imageCheckout from "../assets/images/testimonials/rl/Checkout.jpg";
import imageCompression from "../assets/images/testimonials/rl/Compression.jpg";
import imageDeforestation from "../assets/images/testimonials/rl/Deforestation.jpg";
import imageMicroscope from "../assets/images/testimonials/rl/Microscope.jpg";
import imageSleeping from "../assets/images/testimonials/rl/Sleeping.jpg";
import imageTelescope from "../assets/images/testimonials/rl/Telescope.jpg";
import imageWildfire from "../assets/images/testimonials/rl/Wildfire.jpg";
import videoBees from "../assets/videos/testimonials/lr/Bees.mp4";
import videoFeelTheBurn from "../assets/videos/testimonials/lr/Feel the Burn.mp4";
import videoHandCount from "../assets/videos/testimonials/lr/Hand Count.mp4";
import videoLaughing from "../assets/videos/testimonials/lr/Laughing.mp4";
import videoMaskUp from "../assets/videos/testimonials/lr/Mask Up.mp4";
import videoPaintingWithMike from "../assets/videos/testimonials/lr/Painting with Mike.mp4";
import videoPlants from "../assets/videos/testimonials/lr/Plants.mp4";
import videoWhales from "../assets/videos/testimonials/lr/Whales.mp4";
import videoAfricanWildLife from "../assets/videos/testimonials/rl/African Wildlife.mp4";
import videoCheckout from "../assets/videos/testimonials/rl/Checkout.mp4";
import videoCompression from "../assets/videos/testimonials/rl/Compression.mp4";
import videoDeforestation from "../assets/videos/testimonials/rl/Deforestation.mp4";
import videoMicroscope from "../assets/videos/testimonials/rl/Microscope.mp4";
import videoSleeping from "../assets/videos/testimonials/rl/Sleeping.mp4";
import videoTelescope from "../assets/videos/testimonials/rl/Telescope.mp4";
import videoWildfire from "../assets/videos/testimonials/rl/Wildfire.mp4";
import NavPaths from "./NavPaths";
import { IVideoElement } from "./Types";

function getRLVidelElements(): IVideoElement[] {
  return [
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoBees,
      videoPoster: imageBees,
      title: "Beehive Health",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoLaughing,
      videoPoster: imageLaughing,
      title: "Emotional Reactions",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoPaintingWithMike,
      videoPoster: imagePaintingWithMike,
      title: "Interactive Painting",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoFeelTheBurn,
      videoPoster: imageFeelTheBurn,
      title: "Personal Trainer",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoHandCount,
      videoPoster: imageHandCount,
      title: "Hand Gestures",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoPlants,
      videoPoster: imagePlants,
      title: "Plant Species",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoWhales,
      videoPoster: imageWhales,
      title: "Whale Watching",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoMaskUp,
      videoPoster: imageMaskUp,
      title: "Safety Precautions",
      play: false,
    },
  ];
}

function getLRVidelElements(): IVideoElement[] {
  return [
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoAfricanWildLife,
      videoPoster: imageAfricanWildLife,
      title: "Wildlife Behavior",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoCheckout,
      videoPoster: imageCheckout,
      title: "Smart Checkout",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoCompression,
      videoPoster: imageCompression,
      title: "Equipment Analytics",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoDeforestation,
      videoPoster: imageDeforestation,
      title: "Aerial Imagery",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoMicroscope,
      videoPoster: imageMicroscope,
      title: "Scientific Research",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoSleeping,
      videoPoster: imageSleeping,
      title: "Baby Monitor",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoTelescope,
      videoPoster: imageTelescope,
      title: "Telescopic Imagery",
      play: false,
    },
    {
      linkTo: NavPaths.Examples.path,
      videoSrc: videoWildfire,
      videoPoster: imageWildfire,
      title: "Fire Watch",
      play: false,
    },
  ];
}

export { getRLVidelElements, getLRVidelElements };
