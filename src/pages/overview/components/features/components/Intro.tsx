import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import imgX from "../../../../../assets/images/features/screenshot.jpg";
import img2X from "../../../../../assets/images/features/screenshot@2x.jpg";
import MediaQueries from "../../../../../utilities/MediaQueries";
export default function Intro() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 flex w-full flex-col px-7 sm:px-[12%]  2xl:px-[16%]">
        <h2 className=" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]">
          Machine learning
          <br />
          made <span className=" text-color-primary">easy</span>
        </h2>
        <p className="mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:w-full sm:text-[32px] 2xl:text-[39px]">
          Lobe has everything you need to bring your machine learning ideas to
          life. Just show it examples of what you want it to learn, and it
          automatically trains a custom machine learning model that can be
          shipped in your app.
        </p>
      </div>
      <div className="mt-6 flex w-full justify-center sm:mt-[2%] sm:px-[3%]">
        <LazyLoadImage
          alt={"Dashboard view"}
          effect="blur"
          src={MediaQueries.minWidth1536px.matches ? img2X : imgX}
        />
      </div>
    </div>
  );
}
