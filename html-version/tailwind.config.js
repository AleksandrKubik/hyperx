/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '414px',
      'tablet': '640px',
      'ipad': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'lg': '1366px',
      'xl': '1440px',
      'xxl': '1680px',
      '2xl': '1920px',
      'ultra': '2560px',
    },
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
        'twitter-blue-hover': '#1A91DA',
        'dark-navy': '#0C1F3F',
      },
      animation: {
        'pulse': 'pulse 3s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
