/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Manually add the flowbite-react components path here:
    "./node_modules/flowbite-react/dist/esm/**/*.js", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Import the native flowbite plugin directly
    require("flowbite/plugin"), 
  ],
};
