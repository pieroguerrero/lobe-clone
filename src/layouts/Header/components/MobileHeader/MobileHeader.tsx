import { Link } from "react-router-dom";
import logoSVG from "../../../../assets/images/logo.svg";
import swapOff from "../../../../assets/images/hamb-menu/swap-off.svg";
import swapOn from "../../../../assets/images/hamb-menu/swap-on.svg";
import { useState } from "react";
import MenuMobile from "./components/MenuMobile";
export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowMenu(e.target.checked);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="fixed top-0 z-30 w-full bg-color-quaternary bg-opacity-95">
      <div className="flex h-20 w-full items-center justify-between px-8">
        <Link to={""}>
          <img
            loading="lazy"
            className="h-[22px] w-auto "
            alt="Logo"
            src={logoSVG}
          />
        </Link>
        <label className="swap-rotate swap h-10  w-10 rounded-full bg-color-tertiary-soft p-0">
          <input type="checkbox" onChange={handleCheck} checked={showMenu} />
          <img className="swap-off h-6 w-auto" src={swapOff} alt="Off" />
          <img className="swap-on h-6 w-auto" src={swapOn} alt="On" />
        </label>
      </div>
      {showMenu ? <MenuMobile handleClose={handleCloseMenu} /> : null}
    </header>
  );
}
