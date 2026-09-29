/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#06080C',
          900: '#0B0F17',
          850: '#101622',
          800: '#171E2D',
          700: '#232D42',
          600: '#34425E',
        },
        gold: {
          50: '#FDF8EE',
          100: '#F6EFCF',
          200: '#ECDDA0',
          300: '#DFC46C',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#A37D1A',
          700: '#7E5F15',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 193, 88, 0.35)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(229, 193, 88, 0.15)',
      }
    },
  },
  plugins: [],
}
