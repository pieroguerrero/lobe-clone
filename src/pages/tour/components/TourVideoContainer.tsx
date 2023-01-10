import imgBaner from "../../../assets/images/tour/Video.jpg";
import imgBanerMobile from "../../../assets/images/tour/Video-mobile.jpg";
import { useMemo, useState } from "react";
import MediaQueries from "../../../utilities/MediaQueries";
import ModalPopUp from "../../../components/ModalPopUp";
import { getWebOrigin } from "../../../utilities/UtilFunctions";
import svgClose from "../../../assets/images/tour/close.svg";

export default function TourVideoContainer() {
  const [showPopUp, setShowPopUp] = useState(false);

  const isMinWidth640px = useMemo(() => {
    console.log(
      "MediaQueries.minWidth640px: ",
      MediaQueries.minWidth640px.matches
    );
    return MediaQueries.minWidth640px.matches;
  }, [MediaQueries.minWidth640px.matches]);

  const togglePopUp = (isOpen: boolean) => {
    setShowPopUp(isOpen);
  };
  console.log("getWebOrigin():", getWebOrigin());
  return (
    <section className="px-8 pt-16 sm:px-[15%] sm:pt-20 2xl:px-[20%]">
      <button
        onClick={togglePopUp.bind(null, true)}
        className="rounded-3xl sm:transition-transform sm:duration-500 sm:ease-in-out sm:hover:scale-105 sm:hover:transform sm:hover:shadow-2xl"
      >
        <img
          className=" rounded-3xl object-cover"
          src={isMinWidth640px ? imgBaner : imgBanerMobile}
          alt="Video Banner"
        />
      </button>
      {showPopUp ? (
        <ModalPopUp>
          <div
            className=" flex h-full w-full flex-col items-center bg-black bg-opacity-60    "
            onClick={togglePopUp.bind(null, false)}
          >
            <div className=" flex h-16 w-full justify-end p-5">
              <button
                className=" opacity-50"
                onClick={togglePopUp.bind(null, false)}
              >
                <img src={svgClose} className=" h-10 w-10" alt="close button" />
              </button>
            </div>
            <iframe
              className=" rounded-3xl bg-transparent blur-0 2xl:h-[950px] 2xl:w-[1522px]"
              style={{
                clipPath: "inset(1px 1px)",
              }}
              width="auto"
              height="auto"
              src={
                "https://www.youtube-nocookie.com/embed/Mdcw3Sb98DA?controls=0&autoplay=1&playsinline=1&rel=0&modestbranding=1&origin=" +
                getWebOrigin()
              }
              title="Tour Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            ></iframe>
          </div>
        </ModalPopUp>
      ) : null}
    </section>
  );
}
//https://www.youtube.com/watch?v=Mdcw3Sb98DA
