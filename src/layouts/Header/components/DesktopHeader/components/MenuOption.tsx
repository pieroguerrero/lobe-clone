import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}
export default function MenuOption({ to, text }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "transform text-[22px] font-bold text-color-secondary duration-300 hover:scale-105 hover:transform hover:duration-300"
          : "transform text-[22px] font-bold text-color-tertiary duration-300 hover:scale-105 hover:transform hover:text-color-secondary hover:duration-300"
      }
    >
      {text}
    </NavLink>
  );
}
