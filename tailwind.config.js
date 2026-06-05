/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          card: '#1A1A1A',
        },
        accent: {
          terracotta: '#D97757',
          terracottaHover: '#c46244',
        },
        text: {
          body: '#F3F4F6',
          heading: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
