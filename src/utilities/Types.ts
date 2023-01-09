import { MutableRefObject } from "react";

export type MaybeRef<T> = T | MutableRefObject<T>;
