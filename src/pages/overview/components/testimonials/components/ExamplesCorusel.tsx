import { useMemo, useRef } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import useOnScreen from "../../../../../hooks/useOnScreen";
import MediaQueries from "../../../../../utilities/MediaQueries";
import {
  getLRVidelElements,
  getRLVidelElements,
} from "../../../../../utilities/VideoElements";
import VideosCarousel from "./VideosCarousel";

export default function ExamplesCorusel() {
  const { minWidth640px, itemWidth, itemHeight } = useMemo(() => {
    const minWidth1536px = MediaQueries.minWidth1536px.matches;
    const minWidth640px = MediaQueries.minWidth640px.matches;

    return {
      minWidth640px,
      itemWidth: minWidth1536px ? 600 : minWidth640px ? 540 : 295,
      itemHeight: minWidth1536px ? 420 : minWidth640px ? 379 : 210,
    };
  }, []);

  const { rlVideoElements, lrVideoElements } = useMemo(() => {
    return {
      rlVideoElements: getRLVidelElements(),
      lrVideoElements: getLRVidelElements(),
    };
  }, []);

  const divCarouselRef: any = useRef<HTMLDivElement>();
  const divCarouselOnScreen = useOnScreen<HTMLDivElement>(
    divCarouselRef,
    minWidth640px ? "-300px" : "20px"
  );

  return (
    <div
      ref={divCarouselRef}
      className=" mt-20 mb-16 w-full sm:mt-32 sm:mb-28 2xl:mt-44 2xl:mb-40 "
    >
      <div className="flex w-full flex-col px-7  sm:px-[12%] 2xl:px-[16%]">
        <h2 className=" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]">
          Lobe <span className=" text-color-primary">Examples</span>
        </h2>
        <p className="mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:mt-7 sm:w-full sm:text-[32px] 2xl:text-[39px]">
          One tool, endless possibilities. Discover all the things you can train
          your app to do with Lobe.
        </p>
      </div>
      <LazyLoadComponent>
        {divCarouselOnScreen ? (
          <div className=" mt-9 flex flex-col gap-3 bg-transparent sm:mt-14 sm:gap-0 2xl:gap-4">
            <VideosCarousel
              itemHeight={itemHeight}
              itemWidth={itemWidth}
              animationDirection="RL"
              play={true}
              videoElements={rlVideoElements}
            />
            <VideosCarousel
              itemHeight={itemHeight}
              itemWidth={itemWidth}
              animationDirection="LR"
              play={true}
              videoElements={lrVideoElements}
            />
          </div>
        ) : null}
      </LazyLoadComponent>
    </div>
  );
}
