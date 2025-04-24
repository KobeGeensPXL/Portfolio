/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CAFF',
          300: '#66B0FF',
          400: '#3395FF',
          500: '#0A84FF', // Primary
          600: '#0065D1',
          700: '#004C9E',
          800: '#00326A',
          900: '#001937',
        },
        secondary: {
          50: '#EDFBFF',
          100: '#D6F5FF',
          200: '#AEE9FF',
          300: '#86DDFF',
          400: '#64D2FF', // Secondary
          500: '#30B4FF',
          600: '#0096E0',
          700: '#0072AD',
          800: '#004E7A',
          900: '#002A47',
        },
        accent: {
          50: '#FFFBE6',
          100: '#FFF7CC',
          200: '#FFEF99',
          300: '#FFE766',
          400: '#FFDE33',
          500: '#FFD60A', // Accent
          600: '#D1AB00',
          700: '#9E8000',
          800: '#6A5600',
          900: '#372B00',
        },
        success: {
          50: '#E6FFF1',
          500: '#34C759',
          700: '#248A3D',
        },
        warning: {
          50: '#FFF9E6',
          500: '#FF9500',
          700: '#C93400',
        },
        error: {
          50: '#FFE6E6',
          500: '#FF3B30',
          700: '#C9242C',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F2F2F7',
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#AEAEB2',
          600: '#8E8E93',
          700: '#636366',
          800: '#3A3A3C',
          900: '#1C1C1E',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}