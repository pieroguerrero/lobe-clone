//import ReactPlayer from "react-player/file";

import { lazy, Suspense } from "react";
const ReactPlayer = lazy(() => import("react-player/file"));
import desktopVideo from "../../../../assets/videos/hero-desktop.mp4";
import DynamicText from "./components/dynamicText";

export default function Hero() {
  return (
    <section className=" flex min-h-screen items-center justify-center">
      <div>
        <div>
          <div>Train apps to</div>
          <div>
            <DynamicText play={true} speedFactor={1} periodDuration={2000} />
          </div>
        </div>
        <div>Action buttons</div>
      </div>
      <Suspense>
        <ReactPlayer
          url={desktopVideo}
          playing={true}
          width="600px"
          height="auto"
          loop={true}
          controls={false}
          muted={true}
        />
      </Suspense>
    </section>
  );
}
