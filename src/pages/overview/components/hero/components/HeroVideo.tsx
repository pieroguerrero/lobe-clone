import ReactPlayer from "react-player";
import desktopVideo from "../../../../../assets/videos/hero-desktop.mp4";

export default function HeroVideo() {
  return (
    //TODO: the text is being changed based on the playback time (could be also the fraction played so far)
    // There should be a way to have an event when specific fractions of the video is being played
    <ReactPlayer
      url={desktopVideo}
      playing={true}
      width="600px"
      height="auto"
      loop={true}
      controls={false}
      muted={true}
      onProgress={(state) => {
        //console.log(state);
        //If state.playedSeconds <=5 then return "text 1" (compare before with currentText)
        //If state.playedSeconds <=10 then return "text 2"
        //If state.playedSeconds <=15 then return "text 3"
        //...
      }}
    />
  );
}
