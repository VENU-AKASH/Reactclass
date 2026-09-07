import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Component3 from "./Component3";

function Component2() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card component-two ${theme}`}>
      <h2>Component 2</h2>

      <p>
        I received the theme directly using <strong>useContext()</strong>.
      </p>

      <p>Current Theme: {theme}</p>

      <Component3 />
    </div>
  );
}

export default Component2;