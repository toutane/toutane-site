import React from "react";
import PropTypes from "prop-types";

export const ContactContainer = ({ children, theme }) => {
  return (
    <div className={`theme-${theme} bg-secondary w-screen h-screen`}>
      {children}
    </div>
  );
};

ContactContainer.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.node.isRequired,
};
