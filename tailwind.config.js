/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,njk}",
    "./_includes/**/*.{html,js,njk}",
    "./_layouts/**/*.{html,js,njk}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', 'system-ui', 'sans-serif'],
      },
      colors: {
        'apple-blue': '#0066cc',
        'apple-gray': '#86868b',
        'apple-dark': '#1d1d1f',
      },
    },
  },
  plugins: [],
} 