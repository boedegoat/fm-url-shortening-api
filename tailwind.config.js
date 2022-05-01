module.exports = {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        'cyan-hover': '#9BE3E2',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        violet: {
          dark: 'hsl(257, 27%, 26%)',
          'so-dark': 'hsl(260, 8%, 14%)',
          grayish: 'hsl(257, 7%, 63%)',
          light: 'hsl(230, 25%, 95%)',
        },
        white: '#fff',
      },
    },
  },
  plugins: [],
}
