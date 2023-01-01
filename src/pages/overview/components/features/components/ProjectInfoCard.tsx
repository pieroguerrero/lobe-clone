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
    <div className=" flex w-[332px] flex-col rounded-[32px] bg-color-quaternary">
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
            fallback={<img src={srcFallback} alt={tooltip} />}
            style={{
              clipPath: "inset(1px 1px)",
            }}
          />
        </LazyLoadComponent>
      </div>
      <div className="flex flex-col">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        {isAvailable ? (
          <div className=" bg-color-primary text-center text-base font-black uppercase leading-none tracking-tighter text-white">
            AVAILABLE NOW
          </div>
        ) : (
          <div className=" bg-color-tertiary-soft text-center text-base font-black uppercase leading-none tracking-tighter text-color-secondary">
            COMING SOON
          </div>
        )}
      </div>
    </div>
  );
}
