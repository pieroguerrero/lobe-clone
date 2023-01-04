import svgMicrosoft from "../../../../../assets/images/testimonials/microsoft.svg";
import svgAWS from "../../../../../assets/images/testimonials/aws.svg";
import svgApple from "../../../../../assets/images/testimonials/apple.svg";
import svgTFLite from "../../../../../assets/images/testimonials/tensorflow-yellow.svg";
import svgFramer from "../../../../../assets/images/testimonials/blue.svg";
import svgGoogle from "../../../../../assets/images/testimonials/google.svg";
import svgPython from "../../../../../assets/images/testimonials/python.svg";
import svgONNX from "../../../../../assets/images/testimonials/diamond.svg";
import svgArduino from "../../../../../assets/images/testimonials/arduino.svg";
import svgAzure from "../../../../../assets/images/testimonials/azure.svg";
import svgRaspberry from "../../../../../assets/images/testimonials/raspberry.svg";
import svgTF from "../../../../../assets/images/testimonials/tensorflow.svg";
import svgML from "../../../../../assets/images/testimonials/ml.svg";
import svgUnity from "../../../../../assets/images/testimonials/unity.svg";
import { Link } from "react-router-dom";
import NavPaths from "../../../../../utilities/NavPaths";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Export() {
  const className = "absolute transition-all duration-75 ease-linear";
  const classNameFigure =
    "w-[90px] h-[90px] rounded-[32px] flex justify-center items-center  ease-in shadow-xl antialiased duration-200 hover:scale-110  hover:duration-200 ";
  const classNameImg = " h-[65px] w-[65px] textleginility ";
  return (
    <div className=" relative mt-12 min-h-[600px] w-full max-w-full sm:mb-20 sm:mt-28 sm:min-h-[1000px]">
      <div className="flex w-full flex-col px-7  sm:px-[12%] 2xl:px-[16%]">
        <h2 className=" text-[46px] font-extrabold leading-[0.8] text-color-secondary antialiased sm:w-full sm:text-[78px] 2xl:text-[100px]">
          <span className=" text-color-primary">Export</span> Anywhere
        </h2>
        <p className="mt-4 max-w-[700px] text-[22px] font-medium leading-[1.15] antialiased sm:mt-8 sm:w-full sm:text-[32px] 2xl:text-[39px]">
          When you are done, you can export your model to a variety of industry
          standard formats and ship it on any platform you choose.
        </p>
        <div className="mt-4 sm:mt-8">
          <Link
            to={NavPaths.Examples.path}
            className=" absolute z-10 flex w-fit transform items-center gap-1 text-[21px] font-bold text-color-primary duration-300 hover:scale-105 hover:duration-300 sm:gap-4 sm:text-[32px]"
          >
            Learn More
            <svg
              width="32px"
              height="32px"
              className=" h-6 w-6 sm:h-8 sm:w-8"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <title>chevron</title>
              <g
                id="Direction"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  id="Overview-Desktop"
                  transform="translate(-567.000000, -8460.000000)"
                  stroke="#04ddb2"
                  strokeWidth="3"
                >
                  <g
                    id="Bottom"
                    transform="translate(-217.000000, 3973.000000)"
                  >
                    <g
                      transform="translate(163.000000, 3926.000000)"
                      id="Ship-it"
                    >
                      <g
                        id="Text"
                        transform="translate(247.000000, 206.000000)"
                      >
                        <g
                          id="Download"
                          transform="translate(0.000000, 352.000000)"
                        >
                          <g
                            id="arrow"
                            transform="translate(374.000000, 3.000000)"
                          >
                            <polyline
                              transform="translate(15.700000, 16.000000) rotate(-90.000000) translate(-15.700000, -16.000000) "
                              points="9.2 13.5 15.7 18.5 22.2 13.5"
                            ></polyline>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute  -top-32  -left-64 sm:top-14 sm:left-[-10%] 2xl:top-20  2xl:left-[6%]">
        <div className="2XL:scale-100 relative m-auto h-[600px] w-full max-w-[1600px] scale-[0.64] sm:h-[1000px] sm:w-[1600px] sm:min-w-[1600px] sm:scale-[0.85] 2xl:scale-100">
          <div
            className={
              className + "bubble-container left-[1395px] top-[5px] delay-300"
            }
          >
            <figure
              className={classNameFigure + "bubble bg-[rgb(250,_202,_12)]"}
            >
              <LazyLoadImage
                src={svgMicrosoft}
                alt="windows logo"
                effect="blur"
                width="90"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[-20px] top-[40px] delay-75"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(255,153,0)]"}>
              <LazyLoadImage
                src={svgAWS}
                alt="aws logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={className + "bubble-container left-[1200px] top-[210px]"}
          >
            <figure className={classNameFigure + "bubble bg-[rgb(36,35,35)]"}>
              <LazyLoadImage
                src={svgApple}
                alt="apple logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container  left-[65px] top-[320px] delay-300"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(255,209,1)]"}>
              <LazyLoadImage
                src={svgTFLite}
                alt="tflite logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[870px] top-[320px] delay-150"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(14,56,177)]"}>
              <LazyLoadImage
                src={svgFramer}
                alt="framer logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[1450px] top-[340px] delay-150"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(229,75,75)]"}>
              <LazyLoadImage
                src={svgGoogle}
                alt="google logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[345px] top-[380px] delay-100"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(0,137,214)]"}>
              <LazyLoadImage
                src={svgAzure}
                alt="azure logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={className + "bubble-container left-[1100px] top-[480px]"}
          >
            <figure className={classNameFigure + "bubble bg-[rgb(4,221,178)]"}>
              <LazyLoadImage
                src={svgArduino}
                alt="arduino logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[625px] top-[485px] delay-200"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(134,75,255)]"}>
              <LazyLoadImage
                src={svgONNX}
                alt="onnx logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[190px] top-[620px] delay-300"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(23,195,123)]"}>
              <LazyLoadImage
                src={svgPython}
                alt="python logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[1335px] top-[640px] delay-300"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(225,0,0)]"}>
              <LazyLoadImage
                src={svgRaspberry}
                alt="raspberry logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[865px] top-[660px] delay-300"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(252,60,45)]"}>
              <LazyLoadImage
                src={svgTF}
                alt="tensorflow logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[480px] top-[730px] delay-300"
            }
          >
            <figure className={classNameFigure + "bubble bg-[rgb(51,51,51)]"}>
              <LazyLoadImage
                src={svgUnity}
                alt="unity logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
          <div
            className={
              className + "bubble-container left-[1130px] top-[840px] delay-300"
            }
          >
            <figure
              className={classNameFigure + "bubble bg-[rgb(167,187,195)]"}
            >
              <LazyLoadImage
                src={svgML}
                alt="coreml logo"
                loading="lazy"
                width="90"
                effect="blur"
                height="90"
                className={classNameImg}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
