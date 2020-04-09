import React, { useState } from "react";

import { GlobalStyle } from "../../components/styles";

export default function Home() {
  const [theme, _setTheme] = useState("light");

  const getBackground = theme === "dark" ? "#1c1a1a" : "#FFF";
  const getForeground = theme === "dark" ? "#FFF" : "#1c1a1a";

  return (
    <div>
      <GlobalStyle
        backgroundColor={getBackground}
        foregroundColor={getForeground}
      />
      <h1>Theme Selector (Light and Dark Theme)</h1>
      <button
        onClick={() =>
          theme === "dark" ? _setTheme("light") : _setTheme("dark")
        }
      >
        Change Color
      </button>
    </div>
  );
}
