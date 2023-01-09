//TODO: check the carousel here: https://codepen.io/pieroguerrero/pen/rNrMVXb
//Pending to downaload the other files for the second carousel

import React, { Children, ReactElement, useState } from "react";
import CarouselItem from "./CarouselItem";
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
  //const [arrayChildren] = useState(Children.toArray(children));
  const arrayChildren = Children.toArray(children);

  if (!arrayChildren) {
    return null;
  }
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
          "--number-of-elements": arrayChildren.length * 2,
        } as React.CSSProperties
      }
    >
      <div className="slide-track">
        {[...arrayChildren, ...arrayChildren].map((child, index) => {
          return <CarouselItem key={index}>{child}</CarouselItem>;
        })}
      </div>
    </div>
  );
}
