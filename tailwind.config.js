/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7E8",
        ink: "#15151f",
        sun: "#FFD23F",
        sky: "#5BC0EB",
        coral: "#FF6B6B",
        grape: "#9B5DE5",
        mint: "#06D6A0",
        bubble: "#FF8FAB",
      },
      fontFamily: {
        display: ['"Baloo 2"', "system-ui", "cursive"],
        body: ['"Nunito"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        popsm: "3px 3px 0 0 #15151f",
        pop: "6px 6px 0 0 #15151f",
        poplg: "10px 10px 0 0 #15151f",
      },
    },
  },
  plugins: [],
};
