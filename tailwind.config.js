/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 传统中国红和金色为主色调
        primary: '#C41E3A', // 中国红
        secondary: '#FFD700', // 金色
        accent: '#B22222', // 深红色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
}