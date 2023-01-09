import { useEffect, useRef } from "react";
import { MaybeRef } from "../utilities/Types";
import { isString, unRef } from "../utilities/UtilFunctions";

export default function useEventListener(...args: any[]) {
  let target: MaybeRef<EventTarget | null | undefined> = window;
  let event: string;
  let listener: EventListener;
  let options: boolean | AddEventListenerOptions;

  isString(args[0])
    ? ([event, listener, options] = args)
    : ([target, event, listener, options] = args);

  const savedListener = useRef<EventListener>(listener);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const cleanup = useRef(() => {});

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    const el = unRef(target);

    if (!el) return;

    el.addEventListener(event, savedListener.current, options);
    cleanup.current = () => {
      el.removeEventListener(event, savedListener.current, options);
    };

    return cleanup.current;
  }, [event, target, options]);

  return cleanup.current;
}
