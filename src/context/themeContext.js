import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => console.log(theme), [theme]);

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem("theme");
      return theme || "dark";
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
