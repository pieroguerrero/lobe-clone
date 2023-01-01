import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  toltip: string;
}
export default function HighlightItem({
  src,
  alt,
  title,
  description,
  toltip,
}: Props) {
  return (
    <div className="flex w-[311px] flex-row gap-4 sm:w-[320px] sm:flex-col sm:justify-start sm:gap-0 2xl:w-[340px]">
      <div className="h-10 w-10 shrink-0 sm:h-14 sm:w-14" title={toltip}>
        <LazyLoadImage
          alt={alt}
          effect="blur"
          src={src}
          className="rounded-[14px] sm:rounded-[20px]"
        />
      </div>
      <div className="flex flex-col sm:mt-3">
        <h3 className=" text-[22px] font-black leading-none text-color-secondary antialiased sm:text-[29px] sm:leading-[42px]">
          {title}
        </h3>
        <p className=" text-[22px] font-medium leading-[1.2] text-color-secondary sm:text-[29px] sm:leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
