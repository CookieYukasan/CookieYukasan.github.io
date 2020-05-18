import React, { useState, useEffect } from "react";

import { GlobalStyle } from "../../components/styles";

export default function Home() {
  const [theme, _setTheme] = useState(localStorage.getItem("theme"));

  const getBackground = theme === "dark" ? "#1c1a1a" : "#FFF";
  const getForeground = theme === "dark" ? "#FFF" : "#1c1a1a";

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
  });

  function handleChangeTheme() {
    _setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <GlobalStyle
        backgroundColor={getBackground}
        foregroundColor={getForeground}
      />
      <h1>Theme Selector (Light and Dark Theme)</h1>
      <button onClick={() => handleChangeTheme()}>Change Color</button>
    </div>
  );
}
