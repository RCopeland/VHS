/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // TODO: load a font family
    fontFamily: 'Avenir',
    colors: {
      "midnight": '#141216',
      "royal": "#380036",
      "deepsea": "#0CBABA",
      "white": '#FFFFFF',
      "white-100": 'rgba(255,255,255,.1)'
    },
    extend: {},
  },
  plugins: [],
}
