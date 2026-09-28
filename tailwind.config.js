/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#081024',
          orange: '#F95D0A',
          light: '#f8fafc',
          gray: '#e2e8f0',
          text: '#cbd5e1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
