module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        grayishRed: "hsl(0, 6%, 24%)",
      },

      fontFamily: {
        serif: ["Josefin Sans", "serif"],
      },
    },
  },
  plugins: [],
};
