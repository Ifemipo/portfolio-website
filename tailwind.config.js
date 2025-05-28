/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",   // include your HTML file(s) here
      // add other files if needed, e.g. "./src/**/*.js"
    ],
    theme: {
      extend: {
        colors: {
          okau: "#FBBF24",      // your custom amber-yellow color
          softWhite: "#E0E0E0", // softer white text color
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],  // add Poppins font family
        },
      },
    },
    plugins: [],
  }; 