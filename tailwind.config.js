/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-pink': '#ff1b6b',
        'cyber-blue': '#45caff',
        'cyber-purple': '#833ab4',
      },
    },
  },
  plugins: [],
}