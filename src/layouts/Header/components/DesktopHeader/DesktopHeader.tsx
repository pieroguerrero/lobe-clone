import { Link, useLocation } from "react-router-dom";
import NavPaths from "../../../../utilities/NavPaths";
import MenuOption from "./components/MenuOption";
import logoSVG from "../../../../assets/images/logo.svg";
import { useMemo, useRef, useState } from "react";
import useScrollTopDistance from "../../../../hooks/useScrollTopDistance";

export default function DesktopHeader() {
  const [isButtonColorAccent, setIsButtonColorAccent] = useState(false);
  const location = useLocation();
  const refIsButtonColorAccent = useRef(false);
  refIsButtonColorAccent.current = isButtonColorAccent;

  useScrollTopDistance(
    (distance: number) => {
      //console.log({ distance, isButtonColorAccent: ref.current });
      if (distance > 300 && !refIsButtonColorAccent.current) {
        setIsButtonColorAccent(true);
        return;
      }

      if (distance <= 300 && refIsButtonColorAccent.current) {
        setIsButtonColorAccent(false);
        return;
      }
    },
    false,
    location.pathname !== NavPaths.Root.path
  );

  return (
    <header className=" fixed top-0 z-30 flex w-full justify-center bg-color-quaternary px-10 opacity-90">
      <div className="mx-6 flex h-20 w-full items-center justify-between 2xl:mx-16">
        <Link to={""}>
          <img
            loading="lazy"
            className="h-[21px] w-auto translate-x-[2px]"
            alt="Logo"
            src={logoSVG}
          />
        </Link>
        <nav className="flex justify-center gap-11">
          <MenuOption to={""} text={NavPaths.Base.name} />
          <MenuOption
            to={NavPaths.Examples.path}
            text={NavPaths.Examples.name}
          />
          <MenuOption to={NavPaths.Tour.path} text={NavPaths.Tour.name} />
          <MenuOption to={NavPaths.Blog.path} text={NavPaths.Blog.name} />
          <MenuOption to={NavPaths.Help.path} text={NavPaths.Help.name} />
        </nav>
        <button
          className={
            "h-12 w-[129px] rounded-3xl  text-[22px] font-bold" +
            " " +
            (isButtonColorAccent || location.pathname !== NavPaths.Root.path
              ? " bg-color-primary text-color-quaternary"
              : "bg-[#eef0f2] text-color-secondary")
          }
        >
          Download
        </button>
      </div>
    </header>
  );
}
