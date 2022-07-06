const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      "sans-alt": ["Zen Kaku Gothic New", "Noto Sans",...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: "#9A00CD",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#320046"

      }
    },
  },
  plugins: [],
}
