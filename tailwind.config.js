/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-pink-500',
    'bg-yellow-400', 
    'bg-blue-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-purple-500',
    'text-white',
    'text-gray-800'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
