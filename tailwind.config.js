/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,njk}"],
  theme: {
    extend: {
      spacing: {
        '2': '0.5rem', // Add a custom spacing value
      }
    }
  },
  plugins: [],
}


