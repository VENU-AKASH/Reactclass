import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Nested Routes */}
          <Route path="/services" element={<Services />}>
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="app-development" element={<AppDevelopment />} />
            <Route path="ui-ux-design" element={<UIUXDesign />} />
          </Route>

          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;