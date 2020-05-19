import React, { useContext } from "react";

import { ThemeContext } from "../context/themeContext";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ContactContainer } from "../components/contactContainer";
import { HomeContainer } from "../components/homeContainer";

function HomePage() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <HomeContainer theme={theme}>
        <button
          className={`theme-${theme} bg-green-400 hover:bg-green-500 text-secondary font-medium py-2 px-3 rounded focus:outline-none`}
          onClick={() =>
            setTheme((prvState) => (prvState === "light" ? "dark" : "light"))
          }
        >
          Switch theme
        </button>
      </HomeContainer>
      <ContactContainer theme={theme}>
        <span id="projects">My Projects</span>
      </ContactContainer>
    </Layout>
  );
}

export default HomePage;
