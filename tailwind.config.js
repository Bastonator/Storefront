/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fitness': '#847878',
        'fitness-dark': '#181515',
      }
    },
  },
  plugins: [],
}


