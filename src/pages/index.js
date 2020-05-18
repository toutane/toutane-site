import React, { useContext } from "react";

import { ThemeContext } from "../context/themeContext";

import Layout from "../components/layout";
import SEO from "../components/seo";

function HomePage() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <button
          className={`theme-${theme} bg-accent hover:bg-accent text-white font-bold py-2 px-4 rounded`}
          onClick={() =>
            setTheme((prvState) => (prvState === "light" ? "dark" : "light"))
          }
        >
          Switch theme
        </button>
      </section>
    </Layout>
  );
}

export default HomePage;
