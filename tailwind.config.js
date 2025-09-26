/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./evariste.html"
    ,"./src**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'eva':"0 0 10px 10px rgba(0,100,200,0.35)",
      },
    },
  },
  plugins: [],
}

