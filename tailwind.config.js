// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust according to your setup
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(166, 92, 240, 1)",
        primary_shade: "rgba(112, 51, 172, 1)",
        primary_light: "rgba(201, 152, 251, 1)",
        pink_violet: "rgba(235, 209, 255, 1)",

        grey: "rgba(153, 153, 153, 1)",
        grey_shade: "rgba(102, 102, 102, 1)",
        md_grey: "rgba(234, 234, 234, 1)",
        grey_light: "rgba(246, 246, 246, 1)",
        
        secondary_shade: "rgba(187, 55, 14, 1)",
        secondary: "rgba(255, 134, 47, 1)",
        secondary_light: "rgba(255, 189, 89, 1)",

        red_input: "rgba(255, 105, 114, 1)",
        
        bleck: "rgba(51, 51, 51, 1)",

        green_input: "rgba(184, 236, 100, 1)",
      },
      // container: {
      //   "padding-left": "320px"
      // },
    },
  },
  plugins: [],
};
