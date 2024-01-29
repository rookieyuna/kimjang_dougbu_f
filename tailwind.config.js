/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
      extend: {},
  },
  darkMode: "media",
  plugins: [
    require("@tailwindcss/forms"),
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
};