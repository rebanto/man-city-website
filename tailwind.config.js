/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        light_blue: '#6CADDF',
        dark_blue: '#00285E',
        white: '#FFFFFF',
        gold: '#D4A11E',
        red: '#EE3124'
      },
    },
  },
  plugins: [],
}