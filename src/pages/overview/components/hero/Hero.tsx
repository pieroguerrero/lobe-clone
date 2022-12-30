import MediaQueries from "../../../../utilities/MediaQueries";
import HeroVideo from "./components/HeroVideo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen  flex-col items-center pt-8 sm:justify-center sm:pt-20 ">
      <div className=" flex w-full flex-col-reverse items-center justify-center sm:mx-16 sm:flex-row">
        <div className="absolute top-[382px] z-20 sm:static sm:ml-20 sm:mb-20  sm:w-[480px] 2xl:mb-[85px] 2xl:ml-0 2xl:w-[540px]">
          <h1 className="  mb-4  flex flex-col items-center justify-center text-5xl sm:items-start sm:text-[78px] 2xl:text-[100px]">
            <div className=" h-fit font-black leading-[0.75] text-color-secondary antialiased">
              Train apps to
            </div>
            <div className="h-fit font-black leading-none text-color-primary antialiased">
              {/* <DynamicText
              speedFactor={1}
              durationPeriod={5000}
              listOfText={[
                "see gestures",
                "count reps",
                "feel emotions",
                "sense colors",
                "check safety",
                "identify plants",
              ]}
            /> */}
              identify plants
            </div>
          </h1>
          <div className="mx-8 mb-6 text-center text-[23px] font-medium leading-tight text-color-secondary antialiased sm:mx-0 sm:mb-10 sm:text-left sm:text-[32px] 2xl:text-[39px] ">
            {MediaQueries.minWidth640px.matches
              ? "Lobe helps you train machine learning models with a free, easy to use tool."
              : "Create machine learning models with a free, easy to use tool."}
          </div>
          <div className="flex justify-center gap-6 sm:justify-start ">
            <button className="flex h-[42px] w-[148px] transform items-center justify-center rounded-[50px] bg-color-primary text-[23px] font-extrabold leading-none text-color-quaternary duration-300 hover:scale-105 hover:transform hover:duration-300 sm:h-[50px] sm:w-[168px] sm:text-[25px] 2xl:h-16 2xl:w-[200px] 2xl:text-3xl">
              Download
            </button>
            <button className=" flex h-[42px] w-[148px] transform items-center justify-center gap-1 text-[23px] font-extrabold leading-none text-color-primary  duration-300 hover:scale-105 hover:transform hover:duration-300 sm:h-[50px] sm:w-[168px] sm:text-[25px] 2xl:h-16 2xl:w-[200px] 2xl:text-3xl">
              Watch Tour
              <svg width="32px" height="32px" viewBox="0 0 39 39" version="1.1">
                <title>Watch Tour</title>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-362.000000, -12.000000)"
                    fillRule="nonzero"
                  >
                    <g transform="translate(232.000000, 12.000000)">
                      <g transform="translate(130.000000, 0.000000)">
                        <circle
                          stroke="#00E1B1"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          cx="19.5"
                          cy="19.5"
                          r="11.5"
                        ></circle>
                        <path
                          d="M17.4902612,14.8382719 L24.2283102,18.6284245 C24.709668,18.8991883 24.8803883,19.5089034 24.6096245,19.9902612 C24.5198357,20.1498857 24.3879346,20.2817868 24.2283102,20.3715755 L17.4902612,24.1617281 C17.0089034,24.4324919 16.3991883,24.2617716 16.1284245,23.7804138 C16.0442285,23.6307321 16,23.4618894 16,23.2901525 L16,15.7098475 C16,15.1575627 16.4477153,14.7098475 17,14.7098475 C17.1717369,14.7098475 17.3405796,14.754076 17.4902612,14.8382719 Z"
                          fill="#00E1B1"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className=" min-w-[420px] max-w-[475px] sm:w-[600px] sm:min-w-0  sm:max-w-none 2xl:w-[680px]">
          <HeroVideo />
        </div>
      </div>
      <div className="absolute bottom-0 animate-bounce sm:bottom-6">
        <svg width="58px" height="24px" viewBox="0 0 58 24" version="1.1">
          <title>See More</title>
          <g
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            opacity="0.300000012"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              transform="translate(-771.000000, -986.000000)"
              stroke="#000000"
              strokeWidth="3"
            >
              <g transform="translate(771.000000, 986.000000)">
                <polyline
                  id="download-arrow"
                  points="8 8 29 16 50 8"
                ></polyline>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}