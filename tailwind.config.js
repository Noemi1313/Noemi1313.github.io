/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {colors:{
      text: 'hsl(var(--color-text) / <alpha-value>)',
      background: 'hsl(var(--color-background) / <alpha-value>)',
      primary: 'hsl(39, 75%, 50%)',
      secondary: {
        100: 'hsl(var(--color-secondary-100) / <alpha-value>)',
        200: 'hsl(var(--color-secondary-200) / <alpha-value>)',
      },
      accent: 'hsl(var(--color-accent) / <alpha-value>)'
    },
    fontFamily: {
      body: ['Poppins']
    }
    },
  },
  plugins: [],
  
}

