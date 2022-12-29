import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}
export default function MenuOptionMobile({ to, text }: Props) {
  return (
    <NavLink
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
