import { MutableRefObject } from "react";

export type MaybeRef<T> = T | MutableRefObject<T>;

export type ElementTypeName = "div" | "p" | "span";
