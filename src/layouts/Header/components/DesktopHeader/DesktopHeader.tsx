import { Link } from "react-router-dom";
import NavPaths from "../../../../utilities/NavPaths";
import MenuOption from "./components/MenuOption";
import logoSVG from "../../../../assets/images/logo.svg";

export default function DesktopHeader() {
  return (
    <header className=" fixed top-0 z-30 w-full bg-color-quaternary px-10 opacity-90">
      <div className="flex h-20 items-center justify-between">
        <Link to={""}>
          <img
            loading="lazy"
            className="h-[21px] w-auto translate-x-[2px]"
            alt="Logo"
            src={logoSVG}
          />
        </Link>
        <nav className="flex justify-between gap-11">
          <MenuOption to={""} text={NavPaths.Base.name} />
          <MenuOption
            to={NavPaths.Examples.path}
            text={NavPaths.Examples.name}
          />
          <MenuOption to={NavPaths.Tour.path} text={NavPaths.Tour.name} />
          <MenuOption to={NavPaths.Blog.path} text={NavPaths.Blog.name} />
          <MenuOption to={NavPaths.Help.path} text={NavPaths.Help.name} />
        </nav>
        <button className="h-12 w-[129px] rounded-3xl bg-[#eef0f2] text-[22px] font-bold text-color-secondary ">
          Download
        </button>
      </div>
    </header>
  );
}
