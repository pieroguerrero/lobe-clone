import { MutableRefObject } from "react";
import { MaybeRef } from "./Types";

const UtilFunctions = (() => {
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

  return { isRef, unRef };
})();
const { isRef, unRef } = UtilFunctions;

export { isRef, unRef };
