/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10212e",
        steel: "#35576d",
        mist: "#e9f1f5",
        accent: "#0f766e",
      },
    },
  },
  plugins: [],
};
