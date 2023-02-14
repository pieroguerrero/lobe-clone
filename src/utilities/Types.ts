import { MutableRefObject } from "react";

export type MaybeRef<T> = T | MutableRefObject<T>;

export type ElementTypeName = "div" | "p" | "span";

export interface IVideoElement {
  linkTo: string;
  videoSrc: string;
  videoPoster: string;
  title: string;
  play: boolean;
}
