/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "matte-black": "#242424",
        amber: {
          100: "#fff5cd",
          200: "#ffeb9a",
          300: "#fee268",
          400: "#fed835",
          500: "#fece03",
          600: "#cba502",
          700: "#987c02",
          800: "#665201",
          900: "#332901"
        },
        "builderz-green": "#14f195",
        "builderz-blue": "#00B2FF",
      }
    },
  },
  plugins: [],
};
