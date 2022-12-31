import img2X from "../../../../../assets/images/features/screenshot@2x.jpg";
import imgX from "../../../../../assets/images/features/screenshot.jpg";
import MediaQueries from "../../../../../utilities/MediaQueries";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Intro() {
  return (
    <div className="flex flex-col">
      <div className="mx-7 mt-12 flex flex-col">
        <h2 className="text-5xl font-black leading-[0.8] text-color-secondary antialiased sm:text-[78px] 2xl:text-[100px]">
          Machine learning
          <br />
          made <span className=" text-color-primary">easy</span>
        </h2>
        <p className="mt-4 text-[22px] font-medium leading-[1.15] antialiased sm:text-[32px] 2xl:text-[39px]">
          Lobe has everything you need to bring your machine learning ideas to
          life. Just show it examples of what you want it to learn, and it
          automatically trains a custom machine learning model that can be
          shipped in your app.
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        {/* <img
          loading="lazy"
          src={MediaQueries.minWidth1536px.matches ? img2X : imgX}
          alt=""
        /> */}
        <LazyLoadImage
          alt={"Dashboard view"}
          src={MediaQueries.minWidth1536px.matches ? img2X : imgX}
        />
      </div>
    </div>
  );
}
