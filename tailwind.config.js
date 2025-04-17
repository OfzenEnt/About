/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:
      {
        'tab':'710px',
        'ipad':'810px',
      },
      scale:
      {
        '102': '1.02',
        '104': '1.04',
        
      },
    },
  },
  plugins: [],
}