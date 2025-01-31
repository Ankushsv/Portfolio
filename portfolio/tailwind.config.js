/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite VN"', 'sans-serif'],
        beabue : ['"Beabas Neue"', 'sans-serif'],
        pacifico : ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}

