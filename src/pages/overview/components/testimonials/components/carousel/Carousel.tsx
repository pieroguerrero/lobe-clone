//TODO: check the carousel here: https://codepen.io/pieroguerrero/pen/rNrMVXb
//Pending to downaload the other files for the second carousel

import React, { Children, ReactElement, useMemo } from "react";
import "./Carousel.css";

interface Props {
  children: ReactElement | ReactElement[];
  /**
   * Carousel item Width in Pixel units.
   */
  itemWidth: number;
  /**
   * Carousel item Height in Pixel units.
   */
  itemHeight: number;
  /**
   * Border shadows Width in Pixel units.
   */
  shadowsWidth: number;
  animationDirection: "LR" | "RL" | "none";
  /**
   * Animation speed in seconds.
   */
  animationSpeed: number;
}
export default function Carousel({
  children,
  itemWidth,
  itemHeight,
  shadowsWidth,
  animationDirection,
  animationSpeed,
}: Props) {
  const arrayLenght = useMemo(
    () => Children.toArray(children).length,
    [children]
  );

  return (
    <div
      className="slider"
      style={
        {
          "--data-animation-direction": animationDirection.toLowerCase(),
          "--data-animation-speed": animationSpeed.toString() + "s",
          "--data-slide-width": itemWidth.toString() + "px",
          "--data-slide-height": itemHeight.toString() + "px",
          "--white-gradient-width": shadowsWidth.toString() + "px",
          "--number-of-elements": arrayLenght,
        } as React.CSSProperties
      }
    >
      <div className="slide-track">{children}</div>
    </div>
  );
}
