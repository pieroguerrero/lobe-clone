import ReactPlayer from "react-player/file";
import desktopVideo from "../../../../../assets/videos/hero-desktop.mp4";
import mobileVideo from "../../../../../assets/videos/hero-mobile.mp4";
import MediaQueries from "../../../../../utilities/MediaQueries";

export default function HeroVideo() {
  return (
    //TODO: the text is being changed based on the playback time (could be also the fraction played so far)
    // There should be a way to have an event when specific fractions of the video is being played

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
        //console.log(state);
        //If state.playedSeconds <=5 then return "text 1" (compare before with currentText)
        //If state.playedSeconds <=10 then return "text 2"
        //If state.playedSeconds <=15 then return "text 3"
        //...
      }}
    />
  );
}
