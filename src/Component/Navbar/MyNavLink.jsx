import { NavLink } from "react-router";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white font-bold bg-linear-to-r from-[#ff8a4c] to-[#ff611d] p-1 rounded-[6px]"
          : "hover:text-[#ff6d2d] transition"
      }
    >
      {children}
    </NavLink>
  );
}
