/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif:   ['"Crimson Pro"', 'Georgia', 'serif'],
        sans:    ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
