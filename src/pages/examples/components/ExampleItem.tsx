import ReactPlayer from "react-player/file";

interface IExampleItem {
  videoSrc: string;
  posterSrc: string;
  play: boolean;
  title: string;
  description: string;
}
export default function ExampleItem({
  videoSrc,
  posterSrc,
  play,
  title,
  description,
}: IExampleItem) {
  return (
    <div className=" flex h-auto w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl sm:w-[518px] sm:rounded-[32px] 2xl:w-[600px]">
      <div className="w-full">
        <ReactPlayer
          url={videoSrc}
          config={{
            attributes: {
              poster: posterSrc,
              className: "rounded-t-[20px]  sm:rounded-t-[32px]",
            },
          }}
          playing={play}
          width="100%"
          height="auto"
          loop={true}
          controls={false}
          muted={true}
        />
      </div>
      <div className="mb-2 flex w-full flex-col rounded-[20px] p-6 sm:rounded-b-[32px] sm:p-9">
        <h3 className=" textleginility mb-1 text-[22px] font-black leading-none antialiased sm:mb-2  sm:text-[27px] 2xl:text-[29px]">
          {title}
        </h3>
        <p className=" textleginility text-[22px] leading-tight antialiased sm:text-[27px] 2xl:text-[29px]">
          {description}
        </p>
      </div>
    </div>
  );
}
