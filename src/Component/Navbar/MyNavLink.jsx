import { NavLink } from "react-router";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white font-bold bg-[#ff6d2d] pb-1"
          : "hover:text-[#ff6d2d] transition"
      }
    >
      {children}
    </NavLink>
  );
}
