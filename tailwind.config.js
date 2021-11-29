module.exports = {
  //mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "plane-bg-blue": "url('/img/plane.png')",
        "tower-bg-blue": "url('/img/tower.png')",
        "bird-bg-blue": "url('/img/bird.png')"
      },
      container: {
        center: true,
        padding: '2rem'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
