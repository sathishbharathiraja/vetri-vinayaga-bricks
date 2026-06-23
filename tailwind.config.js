/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#f8f9fa', // Soft premium off-white
          orange: '#ea580c', // orange-600
          orangeHover: '#c2410c', // orange-700
          text: '#111827', // gray-900
          muted: '#6b7280', // gray-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
