import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  src: string;
  tooltip: string;
  titleL: string;
  titleR: string;
  description: string;
  textSide: "left" | "right" | "none";
}
export default function Step({
  src,
  tooltip,
  titleL,
  titleR,
  description,
  textSide,
}: Props) {
  return (
    <div className="relative h-[508px] w-full sm:h-[881px] 2xl:h-[962px]">
      <div
        title={tooltip}
        className=" absolute top-0 left-[-110px] h-auto w-[600px] sm:left-[-255px] sm:w-[1860px] 2xl:left-[-58px] 2xl:w-[2020px]"
      >
        <LazyLoadImage
          alt={tooltip}
          width="100%"
          height="auto"
          effect="blur"
          src={src}
        />
      </div>
      <div
        className={
          "absolute bottom-8 left-[31px] z-20 flex w-[311px] flex-col sm:bottom-10 sm:w-full sm:px-[12%] 2xl:px-[16%] " +
          (textSide !== "none"
            ? textSide === "left"
              ? "items-start"
              : "items-end"
            : "")
        }
      >
        <h3 className=" text-left text-4xl font-extrabold antialiased sm:w-[540px] sm:text-[53px] 2xl:w-[612px] 2xl:text-[64px]">
          <span className=" text-color-primary">{titleL.trim()}</span>{" "}
          <span className=" text-color-secondary">{titleR.trim()}</span>
        </h3>
        <p className=" mt-2 text-[22px] font-medium leading-[1.15] antialiased sm:mt-6 sm:w-[540px] sm:text-[32px] 2xl:mt-8 2xl:w-[612px] 2xl:text-[39px]">
          {description}
        </p>
      </div>
    </div>
  );
}
