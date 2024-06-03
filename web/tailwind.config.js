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
      screens: {
        "2xl": "1380px",
        thick: "1700",
      },
    },
    extend: {
      screens: {
        thick: "1920px",
      },

      fontFamily: {
        bruno: ["Bruno Ace"],
        unicase: ["Cormorant Unicase"],
        garamond: ["Cormorant Garamond"],
        upright: ["Cormorant Upright"],
        montserrat: ["Montserrat"],
      },

      fontSize: {
        title: "6.25em",
        titlesans: "6.75em",
        subtitle: "3.15em",
        subtitlesans: "3.75em",
        headings: "2.7em",
        headingsans: "3.5em",
        base: "1.19rem",
        smol: "1.185rem",
        base: "1.45rem",
      },
      letterSpacing: {
        logo: ".2em",
        title: "-0.05em",
        titlesans: "-0.025em",
        subtitle: "-0.05em",
        subtitlesans: "-0.025em",
        headings: "-0.055em",
        headingsans: "-0.03em",
        smol: "-0.04em",
        base: "-0.0575em",
      },
      lineHeight: {
        base: "1.25",
        fit: "70%",
      },

      fontWeight: {
        regular: "430",
        stick: "500",
      },

      opacity: {
        lighter: ".55",
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
