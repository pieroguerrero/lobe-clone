import { useEffect } from "react";

/**
 * Detects the changes on the distance from the top of the page by using document.documentElement.scrollTop. This hook also resolves the problem of Stale Clousures, check out more at: https://youtu.be/eTDnfS2_WE4
 * @param callback To be called everytime the distance from the top changes
 * @param withRefresh Optional parameter that if TRUE indicates the Callback function has to be executed at every re-render of the caller Functional component or not. If False you should use Ref.current to handle all variables that may change inside of the Callback function to avoid Stale Closures.
 */
export default function useScrollTopDistance(
  callback: (scrollTopDistance: number) => void,
  withRefresh = false
) {
  //can we use react useMemo for the callback function?
  useEffect(
    () => {
      const onScroll = (e: Event) => {
        //Other values that can be used are window.pageYOffset or document.body.scrollTop
        callback(document.documentElement.scrollTop);
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    },
    withRefresh ? [callback] : []
  );
}
