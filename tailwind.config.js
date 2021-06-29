module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: "Ubuntu, sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens"), require("@tailwindcss/forms")],
};
