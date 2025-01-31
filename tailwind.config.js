/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
    },
  },
  plugins: [],
};
