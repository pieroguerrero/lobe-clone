import { NavLink } from "react-router-dom";

interface IMenuOptionMobile {
  to: string;
  text: string;
  handleClose(): void;
}
export default function MenuOptionMobile({
  to,
  text,
  handleClose,
}: IMenuOptionMobile) {
  return (
    <NavLink
      onClick={() => {
        handleClose();
      }}
      to={to}
      className={({ isActive }) =>
        isActive
          ? " flex h-16 w-fit items-center px-[31px] text-2xl font-bold text-color-secondary "
          : " flex h-16 w-fit items-center px-[31px] text-2xl font-bold text-color-tertiary "
      }
    >
      {text}
    </NavLink>
  );
}
