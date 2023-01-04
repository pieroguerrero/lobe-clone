import ReactPlayer from "react-player/file";
import { Link } from "react-router-dom";

interface Props {
  linkTo: string;
  videoSrc: string;
  videoPoster: string;
  title: string;
}
export default function VideoItem({
  linkTo,
  videoSrc,
  videoPoster,
  title,
}: Props) {
  return (
    <div className="2xl:h-[420px] 2xl:w-[600px]">
      <Link
        to={linkTo}
        data-content={title}
        className="relative top-8 left-8 rounded-[32px] after:absolute after:content-[attr(data-content)]"
      >
        <ReactPlayer
          url={videoSrc}
          config={{ attributes: { poster: videoPoster } }}
          playing={true}
          width="100%"
          height="auto"
          loop={true}
          controls={false}
          muted={true}
          style={{
            clipPath: "inset(1px 1px)",
          }}
        />
      </Link>
    </div>
  );
}
