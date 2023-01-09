//usage: https://react-hooks-library.vercel.app/core/useScroll
//code: https://github.com/heyitsarpit/react-hooks-library/blob/main/packages/core/useScroll/index.ts

import { MaybeRef } from "../utilities/Types";
import { unRef } from "../utilities/UtilFunctions";
import useEventListener from "./useEventListener";

export default function useScroll(
  callback: (coords: { scrollX: number; scrollY: number }) => void,
  target: MaybeRef<Element | null | undefined> = {
    current: window.document?.documentElement,
  }
) {
  const getPositions = () => {
    const el = unRef(target);
    console.log("enters");
    if (!el) return;
    console.log("el.scrollLeft:", el.scrollLeft);
    return {
      x: Math.round(el.scrollLeft / (el.scrollWidth - el.clientWidth)),
      y: Math.round(el.scrollTop / (el.scrollHeight - el.clientHeight)),
    };
  };

  useEventListener(
    target,
    "scroll",
    () => {
      const newScrollValues = getPositions();
      if (!newScrollValues) return;

      const { x, y } = newScrollValues;
      callback({ scrollX: x, scrollY: y });
    },
    {
      capture: false,
      passive: true,
    }
  );
}
