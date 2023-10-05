/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "780px",
      // => @media (min-width: 375px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans"],
      },
    },
  },
  plugins: [],
};
