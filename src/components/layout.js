import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../context/themeContext";

import Header from "./header";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`theme-${theme} bg-primary flex flex-col min-h-screen font-sans text-gray-900`}
    >
      <Header theme={theme} />

      <main className="flex-1 w-full py-8 md:py-16">{children}</main>

      {/* <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taylor Bryant
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
