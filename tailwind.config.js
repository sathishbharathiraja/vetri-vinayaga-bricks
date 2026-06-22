/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          bg: '#FFFFFF',
          surface: '#F8FAFC', // light gray for bento boxes
          surfaceHover: '#F1F5F9',
        },
        accent: {
          rust: '#EA580C',
          rustHover: '#C2410C',
        },
        text: {
          primary: '#0F172A', // slate gray/deep charcoal for extreme readability
          secondary: '#475569',
          inverse: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
