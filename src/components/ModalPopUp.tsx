import { ReactElement, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { createAndAppendElement } from "../utilities/UtilFunctions";

interface IModalPopUp {
  children: ReactElement;
}

/**
 * Generates a Modal Pop up attached to the body element.
 */
export default function ModalPopUp({ children }: IModalPopUp) {
  useLayoutEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    htmlElement.classList.add("overflow-hidden");
    return () => {
      htmlElement.classList.remove("overflow-hidden");
    };
  }, []);
  const idPopUpWrapper = "div-popup-wrapper";
  let wrapperElement = document.getElementById(idPopUpWrapper);

  if (!wrapperElement) {
    wrapperElement = createAndAppendElement("div", idPopUpWrapper, "body");
  }

  return createPortal(
    <div
      className="absolute top-0 left-0 z-50 w-full"
      style={{ height: document.body.scrollHeight.toString() + "px" }}
    >
      {children}
    </div>,
    wrapperElement
  );
}
