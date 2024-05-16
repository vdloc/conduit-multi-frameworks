/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: '#5CB85C',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
