import React from "react";
import PropTypes from "prop-types";

export const HomeContainer = ({ children, theme }) => {
  return (
    <div
      className={`theme-${theme} bg-primary w-screen h-64 flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.node.isRequired,
};
