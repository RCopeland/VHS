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
      "white": '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}
