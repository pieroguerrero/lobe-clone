import { Link } from "react-router-dom";
import logoSVG from "../../../../assets/images/logo.svg";
import swapOff from "../../../../assets/images/hamb-menu/swap-off.svg";
import swapOn from "../../../../assets/images/hamb-menu/swap-on.svg";
import { useState } from "react";
export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowMenu(e.target.checked);
  };

  return (
    <header className=" px-8">
      <div className="flex h-20 items-center justify-between">
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
      {showMenu ? <div>Menu with several options</div> : null}
    </header>
  );
}
