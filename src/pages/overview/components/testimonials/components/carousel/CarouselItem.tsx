import { ReactNode } from "react";

export interface ICarouselItemProps {
  children: ReactNode;
}
export default function CarouselItem({ children }: ICarouselItemProps) {
  return <div className="slide">{children}</div>;
}
