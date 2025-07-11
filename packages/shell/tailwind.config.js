
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [designSystemConfig],
  darkMode: "class",
  content:  [
  "./src/**/*.{js,ts,jsx,tsx}",
  "../user-card/src/**/*.{js,ts,jsx,tsx}" // user-card bileşenlerini shell'de tarat
] ,
  theme: {},
  plugins: [],
};


