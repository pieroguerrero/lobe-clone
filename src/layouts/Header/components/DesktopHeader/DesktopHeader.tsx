import { Link } from "react-router-dom";
import NavPaths from "../../../../utilities/NavPaths";
import MenuOption from "./components/MenuOption";
import logoSVG from "../../../../assets/images/logo.svg";

export default function DesktopHeader() {
  return (
    <header className="px-10">
      <div className="flex items-center justify-between h-20">
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
        <button className="h-12 w-[129px] rounded-3xl text-lg">Action</button>
      </div>
    </header>
  );
}
