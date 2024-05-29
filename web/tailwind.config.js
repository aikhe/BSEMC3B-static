/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
    "./layouts/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: ".5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      letterSpacing: {
        tight: "-0.05em",
      },
      fontFamily: {
        bruno: ["Bruno Ace"],
        montserrat: ["Montserrat"],
      },
      colors: {
        light: {
          DEFAULT: "var(--light)",
          foreground: "var(--light-foreground)",
        },
        dark: {
          DEFAULT: "var(--dark)",
          foreground: "var(--dark-foreground)",
        },
        dark2: {
          DEFAULT: "var(--dark2)",
          foreground: "var(--dark2-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        secondary2: {
          DEFAULT: "var(--secondary2)",
          foreground: "var(--secondary2-foreground)",
        },
      },
    },
  },
  plugins: [],
};
