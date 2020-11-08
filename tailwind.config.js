// prettier-ignore
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        header: "#dc143c",
        blackFooter: "#1b1b1b",
        textFooter: "#4c4c4c",
      },
      fontFamily: {
        body: ["Open Sans"],
      },
    },
  },
  variants: {},
  plugins: [],
};
