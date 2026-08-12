/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#0f172a',
        },
        'accent': {
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
