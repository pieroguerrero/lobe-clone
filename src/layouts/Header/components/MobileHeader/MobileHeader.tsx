import { Link } from "react-router-dom";
import logoSVG from "../../../../assets/images/logo.svg";
import swapOff from "../../../../assets/images/hamb-menu/swap-off.svg";
import swapOn from "../../../../assets/images/hamb-menu/swap-on.svg";
import { useState } from "react";
import MenuOptionMobile from "./components/MenuOptionMobile";
import NavPaths from "../../../../utilities/NavPaths";
export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);
  console.log("MobileHeader component");
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowMenu(e.target.checked);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="relative">
      <div className="flex h-20 items-center justify-between px-8">
        <Link to={""}>
          <img
            loading="lazy"
            className="h-[22px] w-auto translate-x-[2px]"
            alt="Logo"
            src={logoSVG}
          />
        </Link>
        <label className="swap-rotate swap h-10  w-10 rounded-full bg-[#eef0f2] p-0">
          <input type="checkbox" onChange={handleCheck} />
          <img className="swap-off h-6 w-auto" src={swapOff} alt="Off" />
          <img className="swap-on h-6 w-auto" src={swapOn} alt="On" />
        </label>
      </div>
      {showMenu ? (
        <div className=" absolute flex h-96 w-full flex-col border-t-[1px] border-[#eef0f2] bg-white opacity-90">
          <nav className="flex flex-col pt-3">
            <MenuOptionMobile to={""} text={NavPaths.Base.name} />
            <MenuOptionMobile
              to={NavPaths.Examples.path}
              text={NavPaths.Examples.name}
            />
            <MenuOptionMobile
              to={NavPaths.Tour.path}
              text={NavPaths.Tour.name}
            />
            <MenuOptionMobile
              to={NavPaths.Blog.path}
              text={NavPaths.Blog.name}
            />
            <MenuOptionMobile
              to={NavPaths.Help.path}
              text={NavPaths.Help.name}
            />
          </nav>
          <div className="flex items-center justify-center px-[27px]">
            <button className="mt-[37px] mb-[32px] h-[50px] w-full rounded-[50px] bg-color-primary text-2xl font-bold text-color-quaternary">
              Download
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
