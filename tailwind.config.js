/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'boost-pattern': "url('../src/assets/img/bg-shorten-desktop.svg')",
      'real-boost' :"url('../src/assets/img/bg-boost-desktop.svg')",
    },
    container: {
      center: true,
    },
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      'cyan': 'hsl(180, 66%, 49%)',
      'Dark-Violet': 'hsl(257, 27%, 26%)',
      'Red': 'hsl(0, 87%, 67%)',
      'Gray': 'hsl(0, 0%, 75%)',
      'Grayish-Violet': 'hsl(257, 7%, 63%)',
      'Very-Dark-Blue': 'hsl(255, 11%, 22%)',
      'Very-Dark-Violet': 'hsl(260, 8%, 14%)',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      z: '18px',
    },
    extend: {},
  },
  plugins: [],
}

