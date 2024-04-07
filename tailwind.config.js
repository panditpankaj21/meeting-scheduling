/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1075px',
        'desktop': '837px',
      },
    },
  },
  plugins: [],
}