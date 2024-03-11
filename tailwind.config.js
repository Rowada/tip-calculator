/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        accent: "hsl(183, 100%, 15%)",
        text: "hsl(186, 14%, 43%)",
        text2: "hsl(184, 14%, 56%)",
        background: "hsl(185, 41%, 84%)",
        inputBackground: "hsl(189, 41%, 97%)",
        containerBackground: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
