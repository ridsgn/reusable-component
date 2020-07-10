module.exports = {
  purge: [],
  theme: {
    extend: {
      width: {
        card: '16.75rem',
        '28': '7rem'
      },
      height: {
        card: '20.375rem',
        '28': '7rem'
      },
      gridTemplateColumns: {
        'card-4': 'repeat(4, minmax(min-content, max-content))',
        'card-3': 'repeat(3, minmax(min-content, max-content))',
        'card-2': 'repeat(2, minmax(min-content, max-content))',
      },
      fontFamily: {
        'monts': ['Montserrat', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
}
