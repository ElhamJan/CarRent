/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3563e9",
        secondary: "#596780",
        borderColor: "#c3d4e9",
        bg: "#f6f7f9",
      },
      backgroundImage: {
        "banner-bg": "url('/src/assets/images/BG.png')",
        "banner-bg2": "url('/src/assets/images/BG2.png')",
        "recent-admin-bg": "url('/src/assets/images/recentBg.png')",
      },
    },
  },
  plugins: [],
};
