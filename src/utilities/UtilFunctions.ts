import { MutableRefObject } from "react";
import { MaybeRef } from "./Types";

const UtilFunctions = (() => {
  const round = (num: number) => Math.round(num * 1e2) / 1e2;

  const isRef = (obj: unknown): boolean =>
    obj !== null &&
    typeof obj === "object" &&
    Object.prototype.hasOwnProperty.call(obj, "current");

  const isString = (val: unknown): val is string => typeof val === "string";

  const unRef = <T = HTMLElement>(target: MaybeRef<T>): T => {
    const element = isRef(target)
      ? (target as MutableRefObject<T>).current
      : (target as T);

    return element;
  };

  return { round, isRef, unRef, isString };
})();
const { round, isRef, unRef, isString } = UtilFunctions;

export { round, isRef, unRef, isString };
