/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        pro: {
          // "cobalt-blue": "#1125d4",
          // "dark-grayblue": "#303b5a",
          // "green-teal": "#00bd91",
          // "light-lavender": "#c8c7ff",
          // "light-red": "#ff5757",
          // "light-royal-blue": "#2e2be9",
          // "light-slate-blue": "#7857ff",
          // "orange-yellow": "#ffb01f",
          // "pale-blue": "#ebf1ff",
          // "persian-blue": "#2421ca",
          // "violet-blue": "#4e21ca",
          // white: "#fff",
          "cobalt-blue": "hsl(234, 85%, 45%)",
          "dark-grayblue": "hsl(224, 30%, 27%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "light-red": "hsl(0, 100%, 67%)",
          "light-royal-blue": "hsl(241, 81%, 54%)",
          "light-slate-blue": "hsl(252, 100%, 67%)",
          "orange-yellow": "hsl(39, 100%, 56%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          "persian-blue": "hsla(241, 72%, 46%, 0)",
          "violet-blue": "hsla(256, 72%, 46%, 1)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        "Hanken-Grotesk": ["Hanken Grotesk", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        185: "46.25rem",
      },
    },
  },
  plugins: [],
};
