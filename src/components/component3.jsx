import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Component3() {
  const { theme, userName, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`card component-three ${theme}`}>
      <h2>Component 3</h2>

      <p>
        Hello <strong>{userName}</strong> 🎉
      </p>

      <p>
        This is the deepest nested component, but it can still access data
        directly from Context.
      </p>

      <p>Current Theme: {theme}</p>

      <button className="inner-button" onClick={toggleTheme}>
        Toggle Theme from Component 3
      </button>
    </div>
  );
}

export default Component3;