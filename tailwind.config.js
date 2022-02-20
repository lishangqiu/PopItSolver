/*eslint-disable */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'bounce-once': 'bounce 1s infinite'
    },
  },
  plugins: [],
  purge: [
    "./pages/**/*.vue", 
    "./components/**/*.vue", 
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ]
}
