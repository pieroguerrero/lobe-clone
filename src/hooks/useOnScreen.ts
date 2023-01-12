import { MutableRefObject, useEffect, useState } from "react";

export default function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  /**
   * For example a value of -200px indicates that at least 200px of the element has to be visible on the viewport to be consideren 'on the screen'.
   */
  rootMargin = "0px"
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        observer.disconnect();
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
