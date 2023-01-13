import { MutableRefObject } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ElementTypeName, MaybeRef } from "./Types";

const UtilFunctions = (() => {
  /**
   * Shows a Toast indicating that the page is just a clone of the original Linkedin.
   */
  const showOveralWarning = () => {
    const id = toast.error(
      "This page is not the original Lobe.ai, it was created for learning purposes. Please, do not enter any valid information.",
      {
        position: "top-center",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
        rtl: false,
        theme: "light",
      }
    );
  };

  const isRef = (obj: unknown): boolean =>
    obj !== null &&
    typeof obj === "object" &&
    Object.prototype.hasOwnProperty.call(obj, "current");

  const unRef = <T = HTMLElement>(target: MaybeRef<T>): T => {
    const element = isRef(target)
      ? (target as MutableRefObject<T>).current
      : (target as T);

    return element;
  };
  const createAndAppendElement = (
    elementTypeName: ElementTypeName,
    newElementId: string,
    /**
     * Expects for CSS selector inditifiers. E.g: #elemenetId, .element-class, div, body.
     * In case there are several elements filtered, it will take the first one.
     */
    containerSelectorKey: string
  ) => {
    const containerElement = document.querySelector(containerSelectorKey);
    if (!containerElement) {
      throw new Error(
        "The element: '" +
          containerSelectorKey +
          "' doesn't exists, so the new Element with id '" +
          newElementId +
          "' cannot be attached."
      );
    }

    const wrapperElement = document.createElement(elementTypeName);
    wrapperElement.setAttribute("id", newElementId);

    containerElement.appendChild(wrapperElement);

    return wrapperElement;
  };

  /**
   *
   * @returns Returns a single string containing the origin: "protocol://hostname:port".
   *
   * Chekout more at https://developer.mozilla.org/en-US/docs/Web/API/Location
   */
  const getWebOrigin = () => window.location.origin;

  return {
    isRef,
    unRef,
    createAndAppendElement,
    getWebOrigin,
    showOveralWarning,
  };
})();
const {
  isRef,
  unRef,
  createAndAppendElement,
  getWebOrigin,
  showOveralWarning,
} = UtilFunctions;

export {
  isRef,
  unRef,
  createAndAppendElement,
  getWebOrigin,
  showOveralWarning,
};
