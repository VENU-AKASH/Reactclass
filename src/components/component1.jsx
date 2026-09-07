import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Component2 from "./Component2";

function Component1() {
  const { theme, userName } = useContext(ThemeContext);

  return (
    <div className={`card component-one ${theme}`}>
      <h2>Component 1</h2>

      <p>
        Welcome, <strong>{userName}</strong> 👋
      </p>

      <p>Current Theme: {theme}</p>

      <Component2 />
    </div>
  );
}

export default Component1;