import "./src/css/style.css";

import React from "react";
import PropTypes from "prop-types";

import ThemeContextProvider from "./src/context/themeContext";

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
