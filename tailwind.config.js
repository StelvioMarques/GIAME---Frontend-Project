/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#154A99',     // azul principal
        secondary: '#031D42',   // azul escuro
        highlight: '#FFBF12',   // amarelo destaque
        background: '#FFFFFF',  // fundo geral
        muted: '#F3F4F6',       // cinza claro opcional
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // letra fina e elegante
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to bottom right, #031D42, #154A99)',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
  plugins: [],
}
