/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
  ],
}

