import { Outlet } from "react-router-dom";
import ServicesNav from "../components/ServicesNav";

function Services() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="tagline">WHAT WE DO</p>
        <h1>Our Services</h1>

        <p>
          Explore our professional technology services designed to help your
          business succeed.
        </p>
      </div>

      <ServicesNav />

      <div className="nested-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Services;