import { LazyLoadComponent } from "react-lazy-load-image-component";
import ReactPlayer from "react-player/file";
interface Props {
  src: string;
  srcFallback: string;
  tooltip: string;
  title: string;
  description: string;
  isAvailable: boolean;
}
export default function ProjectInfoCard({
  src,
  srcFallback,
  tooltip,
  title,
  description,
  isAvailable,
}: Props) {
  return (
    <div className=" m-4 flex w-[262px] flex-col items-center justify-center rounded-[20px] bg-color-quaternary p-6 shadow sm:m-0 sm:w-[299px] sm:rounded-[32px] sm:p-8 sm:shadow-xl 2xl:w-[332px]">
      <div className="h-auto w-[110px]  sm:w-40 2xl:w-[216px]" title={tooltip}>
        <LazyLoadComponent>
          <ReactPlayer
            url={src}
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
        </LazyLoadComponent>
      </div>
      <div className="mt-4 flex flex-col items-center sm:mt-5">
        <h4 className=" whitespace-pre-wrap text-[22px] font-black leading-[1.3] antialiased sm:text-[27px] 2xl:text-3xl">
          {title}
        </h4>
        <p className=" mt-1 whitespace-pre-wrap  text-center text-[22px] leading-7 antialiased sm:mt-3 sm:text-[27px] sm:leading-8 2xl:text-3xl">
          {description}
        </p>
      </div>
      <div className="mt-6 mb-3 sm:mt-11 sm:mb-5">
        {isAvailable ? (
          <div className=" w-fit rounded-[50px] bg-color-primary px-3 py-[6px] text-center text-base font-extrabold uppercase leading-none tracking-tight  text-white">
            AVAILABLE NOW
          </div>
        ) : (
          <div className=" w-fit rounded-[50px] bg-color-tertiary-soft px-3 py-[6px] text-center text-base font-extrabold uppercase leading-none tracking-tight text-color-secondary">
            COMING SOON
          </div>
        )}
      </div>
    </div>
  );
}
