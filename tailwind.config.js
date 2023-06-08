/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/layouts/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    clipPath: {
      myPolygon:
        "polygon(19% 99%, 6% 99%, 2% 97%, 24% 97%, 29% 94%, 32% 93%, 38% 89%, 43% 86%, 48% 83%, 51% 78%, 55% 73%, 59% 68%, 63% 62%, 67% 59%, 72% 57%, 78% 57%, 84% 59%, 91% 62%, 96% 64%, 99% 66%, 100% 1%, 0% 0%, 1% 98%, 0% 92%);",
    },
  },
  plugins: [require("tailwind-clip-path")],
};
