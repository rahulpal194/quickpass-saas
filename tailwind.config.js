/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "client": ["var(--client-font)"]
      }, 
      colors:{
        "primary" : "var(--primary)",
        "secondary": "var(--secondary)",
      },
      backgroundImage:{
        herobg:" url('/images/hero/background.png')"
      },
      dropShadow:{
        hero:'82px 20px 128px rgba(23, 30, 54, 0.16)'
      }
      
    }
  },
  plugins: [],
}
