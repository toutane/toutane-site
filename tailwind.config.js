// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  important: true,
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "var(--white)",
        black: "var(--black)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
        fourth: "var(--fourth)",
        fifth: "var(--fifth)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
        "third-text": "var(--text-third)",
        "green-400": "var(--green-400)",
        "green-500": "var(--green-500)",
        "green-900": "var(--green-900)",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
