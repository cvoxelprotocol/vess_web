const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      "sans-alt": ["Zen Kaku Gothic New", "Noto Sans",...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: "#9A00CD",
        "primary-container": "#FBD7FF",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#320046",
        "on-primary-container/dark": "#FBD7FF",
        "background": "#FCFCFC",
        "on-background": "#1E1A1E",
        "primary/depth1": "#58468A",
        "primary/surface1": "#F7EFFA",
        "outline": "#7E747E",
        "skyblue": "#6FD2FD",
        "oceanblue": "#8E92F3",
        "waterpurple": "#CA8AFF",
        "sunset": "#FF9F8A",
        "yamabuki": "#F3DD8E",
        "lightgreen": "#BEFD6F",
        "emerald": "#6FFDB9",
        

      }
    },
  },
  plugins: [require("daisyui")],
}
