//import ReactPlayer from "react-player/file";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/file";
interface IVideoItemsProps {
  linkTo: string;
  videoSrc: string;
  videoPoster: string;
  title: string;
  play: boolean;
}
export default function VideoItem({
  linkTo,
  videoSrc,
  videoPoster,
  title,
  play,
}: IVideoItemsProps) {
  return (
    <div className="flex items-center justify-center p-2  sm:p-7  2xl:p-5">
      <Link
        to={linkTo}
        data-content={title}
        className="relative rounded-[32px] shadow-lg transition-transform duration-500 ease-in-out after:absolute  after:top-6 after:left-8 after:z-10 after:text-4xl after:font-extrabold after:text-white after:content-[attr(data-content)] hover:scale-105 hover:transform"
      >
        {/* <video
          src={videoSrc}
          autoPlay={play}
          poster={videoPoster}
          className="z-20 rounded-[32px]"
          width="100%"
          height="auto"
          loop={true}
          controls={false}
          muted={true}
        >
          <source src={videoSrc} type="video/mp4" /> 
          Mp4 video are not supported
        </video> */}

        <ReactPlayer
          url={videoSrc}
          config={{
            attributes: {
              poster: videoPoster,
              className: "rounded-[32px] z-20",
            },
          }}
          playing={play}
          width="100%"
          height="auto"
          loop={false}
          controls={false}
          muted={true}
        />

        <div className=" absolute top-0 left-0 h-full w-full rounded-[32px] bg-black opacity-20"></div>
      </Link>
    </div>
  );
}
