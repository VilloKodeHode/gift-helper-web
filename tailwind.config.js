/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        JWC: {
          primary: "#ac6bde",

          secondary: "#eb65cf",

          tertiary: "#6865eb",

          //font colors:
          black: "#312b35",
          black75: "#656068",
          black50: "#98959a",
          black25: "#cbcacc",
          black15: "#e0dfe1",
          logo: "#3c4343",
          white: "#fbf7fd",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
