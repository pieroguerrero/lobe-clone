import NavPaths from "../../../../../utilities/NavPaths";
import { showOveralWarning } from "../../../../../utilities/UtilFunctions";
import MenuOptionMobile from "./MenuOptionMobile";

interface IMenuMobileProps {
  handleClose(): void;
}
export default function MenuMobile({ handleClose }: IMenuMobileProps) {
  return (
    <div className="  vertical-drawer-open  relative z-20 flex w-full flex-col  border-t-[1px] border-color-tertiary-soft bg-color-quaternary   bg-opacity-95 shadow-xl ">
      <nav className=" flex flex-col  pt-3 ">
        <MenuOptionMobile
          to={""}
          text={NavPaths.Base.name}
          handleClose={handleClose}
        />
        <MenuOptionMobile
          to={NavPaths.Examples.path}
          text={NavPaths.Examples.name}
          handleClose={handleClose}
        />
        <MenuOptionMobile
          to={NavPaths.Tour.path}
          text={NavPaths.Tour.name}
          handleClose={handleClose}
        />
        <MenuOptionMobile
          to={NavPaths.Blog.path}
          text={NavPaths.Blog.name}
          handleClose={handleClose}
        />
        <MenuOptionMobile
          to={NavPaths.Help.path}
          text={NavPaths.Help.name}
          handleClose={handleClose}
        />
      </nav>
      <div className="flex items-center justify-center  px-[27px]">
        <div
          onClick={() => {
            showOveralWarning();
          }}
          className="mt-[37px] mb-[32px] flex h-[50px]  w-full items-center justify-center rounded-[50px] bg-color-primary bg-opacity-100 text-2xl font-bold text-color-quaternary "
        >
          Download
        </div>
      </div>
    </div>
  );
}
