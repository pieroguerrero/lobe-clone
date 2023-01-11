import imageBees from "../../assets/images/testimonials/lr/Bees.jpg";
import imageFeelTheBurn from "../../assets/images/testimonials/lr/Feel the Burn.jpg";
import imageHandCount from "../../assets/images/testimonials/lr/Hand Count.jpg";
import imageLaughing from "../../assets/images/testimonials/lr/Laughing.jpg";
import imageMaskUp from "../../assets/images/testimonials/lr/Mask Up.jpg";
import imagePaintingWithMike from "../../assets/images/testimonials/lr/Painting with Mike.jpg";
import imagePlants from "../../assets/images/testimonials/lr/Plants.jpg";
import imageWhales from "../../assets/images/testimonials/lr/Whales.jpg";
import imageAfricanWildLife from "../../assets/images/testimonials/rl/African Wildlife.jpg";
import imageCheckout from "../../assets/images/testimonials/rl/Checkout.jpg";
import imageCompression from "../../assets/images/testimonials/rl/Compression.jpg";
import imageDeforestation from "../../assets/images/testimonials/rl/Deforestation.jpg";
import imageMicroscope from "../../assets/images/testimonials/rl/Microscope.jpg";
import imageSleeping from "../../assets/images/testimonials/rl/Sleeping.jpg";
import imageTelescope from "../../assets/images/testimonials/rl/Telescope.jpg";
import imageWildfire from "../../assets/images/testimonials/rl/Wildfire.jpg";
import videoBees from "../../assets/videos/testimonials/lr/Bees.mp4";
import videoFeelTheBurn from "../../assets/videos/testimonials/lr/Feel the Burn.mp4";
import videoHandCount from "../../assets/videos/testimonials/lr/Hand Count.mp4";
import videoLaughing from "../../assets/videos/testimonials/lr/Laughing.mp4";
import videoMaskUp from "../../assets/videos/testimonials/lr/Mask Up.mp4";
import videoPaintingWithMike from "../../assets/videos/testimonials/lr/Painting with Mike.mp4";
import videoPlants from "../../assets/videos/testimonials/lr/Plants.mp4";
import videoWhales from "../../assets/videos/testimonials/lr/Whales.mp4";
import videoAfricanWildLife from "../../assets/videos/testimonials/rl/African Wildlife.mp4";
import videoCheckout from "../../assets/videos/testimonials/rl/Checkout.mp4";
import videoCompression from "../../assets/videos/testimonials/rl/Compression.mp4";
import videoDeforestation from "../../assets/videos/testimonials/rl/Deforestation.mp4";
import videoMicroscope from "../../assets/videos/testimonials/rl/Microscope.mp4";
import videoSleeping from "../../assets/videos/testimonials/rl/Sleeping.mp4";
import videoTelescope from "../../assets/videos/testimonials/rl/Telescope.mp4";
import videoWildfire from "../../assets/videos/testimonials/rl/Wildfire.mp4";
import CallToAction from "../../components/CallToAction";
import HeadingTitle from "../../components/HeadingTitle";
import ExampleItem from "./components/ExampleItem";

console.log("Examples file");
export default function Examples() {
  const isPlaying = true;
  return (
    <main className="flex w-full flex-col pt-20">
      <HeadingTitle
        title={{ left: "Lobe", right: "Examples" }}
        description="One tool, endless possibilities. Discover all the machine learning models you can train with Lobe."
      />
      <section className="flex w-full justify-center ">
        <div className=" grid grid-cols-1 gap-10 px-5 pt-16 pb-16  sm:grid-cols-2 sm:gap-12 sm:px-0 sm:pb-[100px] 2xl:gap-16 2xl:pb-[140px] 2xl:pt-20">
          <ExampleItem
            videoSrc={videoPlants}
            posterSrc={imagePlants}
            play={isPlaying}
            title="Plant Species"
            description="Train your app to distinguish between different species of plants to help people identify poisonous vegetation."
          />

          <ExampleItem
            videoSrc={videoHandCount}
            posterSrc={imageHandCount}
            play={isPlaying}
            title="Hand Gestures"
            description="Train your app to understand the movement of your hand to create new kinds of immersive user experiences."
          />
          <ExampleItem
            videoSrc={videoFeelTheBurn}
            posterSrc={videoFeelTheBurn}
            play={isPlaying}
            title="Personal Trainer"
            description="Train your app to recognize different workout positions to create an automated personal trainer that counts your reps."
          />
          <ExampleItem
            videoSrc={videoLaughing}
            posterSrc={imageLaughing}
            play={isPlaying}
            title="Emotional Reactions"
            description="Train your app to react to different expressions allowing people to send emoji reactions using just their face."
          />
          <ExampleItem
            videoSrc={videoPaintingWithMike}
            posterSrc={imagePaintingWithMike}
            play={isPlaying}
            title="Interactive Painting"
            description="Train your app to respond with sounds and stories while kids draw to create engaging learning experiences."
          />
          <ExampleItem
            videoSrc={videoMaskUp}
            posterSrc={imageMaskUp}
            play={isPlaying}
            title="Safety Precautions"
            description="Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions."
          />
          <ExampleItem
            videoSrc={videoWhales}
            posterSrc={imageWhales}
            play={isPlaying}
            title="Whale Watching"
            description="Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean."
          />
          <ExampleItem
            videoSrc={videoBees}
            posterSrc={imageBees}
            play={isPlaying}
            title="Beehive Health"
            description="Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies."
          />
          <ExampleItem
            videoSrc={videoSleeping}
            posterSrc={imageSleeping}
            play={isPlaying}
            title="Baby Monitor"
            description="Train your app to detect when babies are sleeping or awake to notify parents before they start crying."
          />
          <ExampleItem
            videoSrc={videoCheckout}
            posterSrc={imageCheckout}
            play={isPlaying}
            title="Smart Checkout"
            description="Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes."
          />
          <ExampleItem
            videoSrc={videoWildfire}
            posterSrc={imageWildfire}
            play={isPlaying}
            title="Fire Watch"
            description="Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late."
          />
          <ExampleItem
            videoSrc={videoMicroscope}
            posterSrc={imageMicroscope}
            play={isPlaying}
            title="Scientific Research"
            description="Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples."
          />
          <ExampleItem
            videoSrc={videoAfricanWildLife}
            posterSrc={imageAfricanWildLife}
            play={isPlaying}
            title="Wildlife Behavior"
            description="Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area."
          />
          <ExampleItem
            videoSrc={videoCompression}
            posterSrc={imageCompression}
            play={isPlaying}
            title="Equipment Analytics"
            description="Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics."
          />
          <ExampleItem
            videoSrc={videoTelescope}
            posterSrc={imageTelescope}
            play={isPlaying}
            title="Telescopic Imagery"
            description="Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery."
          />
          <ExampleItem
            videoSrc={videoDeforestation}
            posterSrc={imageDeforestation}
            play={isPlaying}
            title="Aerial Imagery"
            description="Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe."
          />
        </div>
      </section>
      <CallToAction />
    </main>
  );
}
