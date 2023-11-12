/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'lightPink': '#F1D4E5',
      'myBlack': '#1E1E1E',
    },
    extend: {},
  },
  plugins: [],
}

