/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: "#0C3B2E",
          green: "#0B6B53",
          teal:  "#0F8C6E",
          gold:  "#E3B463",
          yellow:"#F6C15C",
          cream:"#F3EDE4",
          beige:"#F7F2E9",
        },
      },
      maxWidth: { content: "1100px" },
    },
  },
  plugins: [],
};
