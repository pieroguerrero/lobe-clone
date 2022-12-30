import HeroVideo from "./components/HeroVideo";

export default function Hero() {
  return (
    //TODO: Add "xl" media query to work with TailwindCSS so it shows a bigger text when it passing the "xl" measure
    <section className=" mx-16 flex min-h-screen items-center justify-center">
      <div className="  w-[480px]">
        <h1 className="mb-4 flex flex-col justify-center">
          <span className=" h-fit text-[78px] font-black leading-none text-color-secondary antialiased">
            Train apps to
          </span>
          <span className="h-fit text-[78px] font-black leading-none text-color-primary antialiased">
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
            see gestures
          </span>
        </h1>
        <div className="mb-10 text-[32px] font-medium leading-tight text-color-secondary antialiased ">
          Lobe helps you train machine learning models with a free, easy to use
          tool.
        </div>
        <div className="flex gap-6 ">
          <button className="flex h-[50px] w-[168px] transform  items-center justify-center rounded-[50px] bg-color-primary text-2xl font-extrabold leading-none text-color-quaternary duration-300 hover:scale-105 hover:transform hover:duration-300">
            Download
          </button>
          <button className=" flex transform items-center justify-center gap-1 text-[25px] font-extrabold leading-none  text-color-primary duration-300 hover:scale-105 hover:transform hover:duration-300">
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
      <HeroVideo />
    </section>
  );
}
