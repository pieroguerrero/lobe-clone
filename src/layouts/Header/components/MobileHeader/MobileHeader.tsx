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
    <header className="fixed top-0 z-30 w-full bg-color-quaternary bg-opacity-95">
      <div className="flex h-20 w-full items-center justify-between px-12  sm:px-8">
        <Link to={""}>
          <img
            loading="lazy"
            className="h-[22px] w-auto "
            alt="Logo"
            src={logoSVG}
          />
        </Link>
        <label className="swap-rotate swap h-10  w-10 rounded-full bg-color-tertiary-soft p-0">
          <input type="checkbox" onChange={handleCheck} />
          <img className="swap-off h-6 w-auto" src={swapOff} alt="Off" />
          <img className="swap-on h-6 w-auto" src={swapOn} alt="On" />
        </label>
      </div>
      {showMenu ? (
        <div className=" absolute z-30 flex h-96 w-full flex-col border-t-[1px] border-color-tertiary-soft bg-color-quaternary bg-opacity-95 ">
          <nav className="flex flex-col bg-color-quaternary bg-opacity-20 pt-3">
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
          <div className="flex items-center justify-center bg-color-quaternary bg-opacity-50 px-[27px]">
            <button className="mt-[37px] mb-[32px] h-[50px] w-full rounded-[50px] bg-color-primary bg-opacity-100 text-2xl font-bold text-color-quaternary ">
              Download
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
