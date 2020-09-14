module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "tart-orange": "#F44336",
        "mikado-orange": "#FFC107",
        "dribbble-pink": "#ea4c89",
        "behance-blue": "#053eff",
        "twitter-blue": "#1da1f2",
      },
      fontFamily: {
        inter: ["Inter", "Helvetica", "Arial", "Verdana", "sans-serif"],
        merriweather: [
          "Merriweather",
          "Helvetica",
          "Arial",
          "Verdana",
          "sans-serif",
        ],
      },
      spacing: {
        "screen-xl": "1280px",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
