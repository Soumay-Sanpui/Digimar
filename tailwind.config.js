/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter : "Inter, sans-serif"
      },
      colors: {
        primary : '#54A7F8',
        org: '#FF8E50',
        bkg: '#2A2A2A',
        txt: '#ABABAB',
        crdtxt: '#1B1B1B',
        crdbg: '#F4F4F4',
      }
    },
  },
  plugins: [],
}
