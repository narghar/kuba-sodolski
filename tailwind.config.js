const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./pages/**/*.js"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      "2xl": "1300px",
      "3xl": "1536px",
    },
    extend: {
      fontFamily: {
        body: "Ubuntu, sans-serif",
      },
      colors: {
        primary: "#13283c",
        secondary: "#c8760a",
        accent: "#ffd176",
        lightGray: "#787878",
        lighterGray: "#f8f8f8",
        faqBox: "#f8f9fa",
        faqAnswer: "#757b81",
        formInpuBG: "#f1f1f1",
        formInputText: "#6d6d6d",
      },
      height: {
        cardFix: "calc(100% - 7px)",
      },
      gridTemplateColumns: {
        stats: "290px 290px",
      },
      maxWidth: {
        base: "81.25rem", // 1300px
        "8xl": "120rem", // 1920px
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/forms"),
  ],
};
