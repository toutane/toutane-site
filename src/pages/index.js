import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function HomePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-blue-400 rounded-lg shadow-xl">
          <span className="text-white">
            Hey there! This is a Gatsby + Tailwindcss Website.
          </span>
        </h2>
      </section>
    </Layout>
  );
}

export default HomePage;
