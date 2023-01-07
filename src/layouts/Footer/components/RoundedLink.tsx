import { ReactElement } from "react";

interface IRoundedLinkProps {
  imgSrc: string;
  href: string;
  tooltip: string;
}

export default function RoundedLink({
  href,
  tooltip,
  imgSrc,
}: IRoundedLinkProps) {
  return (
    <a
      title={tooltip}
      href={href}
      className=" flex h-10 w-10 items-center justify-center rounded-full bg-color-primary sm:h-8 sm:w-8 2xl:h-10 2xl:w-10"
    >
      <img
        className="h-[26px] w-auto sm:h-[22px] 2xl:h-[26px]"
        src={imgSrc}
        alt={tooltip}
      />
    </a>
  );
}
