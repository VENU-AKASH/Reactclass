import { NavLink } from "react-router-dom";

function ServicesNav() {
  return (
    <div className="services-nav">
      <NavLink
        to="/services/web-development"
        className={({ isActive }) => (isActive ? "sub-active" : "")}
      >
        Web Development
      </NavLink>

      <NavLink
        to="/services/app-development"
        className={({ isActive }) => (isActive ? "sub-active" : "")}
      >
        App Development
      </NavLink>

      <NavLink
        to="/services/ui-ux-design"
        className={({ isActive }) => (isActive ? "sub-active" : "")}
      >
        UI/UX Design
      </NavLink>
    </div>
  );
}

export default ServicesNav;