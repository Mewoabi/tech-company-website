/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffc03d',
          light: '#ffd270',
          dark: '#e6a820',
        },
        secondary: {
          DEFAULT: '#1d3951',
          light: '#254869',
          dark: '#152a3d',
        },
        neutral: {
          DEFAULT: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          800: '#1f1f1f',
          900: '#0f0f0f',
        },
        accent: {
          DEFAULT: '#ff8c3d',
          light: '#ffa670',
          dark: '#e67020',
        }
      }
    },
  },
  plugins: [],
}
