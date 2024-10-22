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
        "gradient-to-250":"linear-gradient(250deg, var(--secondary),var(--primary))",
        herobg:" url('/images/hero/background.png')"
      },
      boxShadow:{
        feature:"0px 6px 48px 0px rgba(87, 89, 102, 0.04)"
      },
      dropShadow:{
        hero:'6px 31px 11px rgba(23, 30, 54, 0.16)'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
      
    }
  },
  plugins: [],
}
