module.exports = {
  mode: "jit",
  purge: ["./views/*.handlebars", "./views/layouts/*.handlebars"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        plane: "url('./img/plane.png')",
        tower: "url('./img/tower.png')",
        bird: "url('./img/bird.png')",
        clouds: "url('./img/clouds.jpg')",
        snares: "url('./img/snares.jpg')",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      spacing: {
        7: "1.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
