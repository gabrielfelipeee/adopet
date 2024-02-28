/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3772FF',
        secondary: '#36D6AD',
        tertiary: '#FC7071',
        gray: '#BCBCBC',
        'gray-light': '#F6F6F6',
        'gray-dark': '#737380',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      '400': 400,
      '500': 500,
      '600': 600,
    },
  },
  plugins: [],
}