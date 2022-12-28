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
          ? " text-[21px] font-bold text-color-secondary hover:scale-105"
          : "text-[21px] font-bold text-color-tertiary hover:scale-105 hover:text-color-secondary"
      }
    >
      {text}
    </NavLink>
  );
}
