/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        UbuntuBold: ['Ubuntu-Bold', 'sans-serif'],
        UbuntuRegular: ['Ubuntu-Regular', 'sans-serif'],
      },
    },

    colors: {
      white: "#FFFFFF",
      gallery: "#F0F0F0",

      //darks
      mineShaft: "#3D3D3D",
      shark: "#21242B",
      corduroy: "#525F60",
      tundora: "#444444",

      //blues
      catskillWhite: "#F4FAFA",
      edgeWater: "#C9E0DF",
      jungleMist: "#BCD7D9",

      //colurfuls

      //blue
      matisse: "#1F78B4",
      easternBlue: "#21ADA9",
      regentStBlue: "#A6CEE3",

      //orange
      gamboge: "#EE9310",
      macaroniAndCheese: "#FFC674",

      //green
      forestGreen: "#21AD3C",
      feijoa: "#B2DF8A",

      //red
      roofTerracotta: "#A93C21",
    },
  },
  plugins: [],
}