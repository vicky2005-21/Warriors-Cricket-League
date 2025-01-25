/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vafa: {
          light: '#60A5FA',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        wafa: {
          light: '#F87171',
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
};