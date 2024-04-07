/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1075px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '837px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}