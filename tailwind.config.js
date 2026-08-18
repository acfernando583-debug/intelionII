import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        'primary-dark': '#E1E0CC',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
}
