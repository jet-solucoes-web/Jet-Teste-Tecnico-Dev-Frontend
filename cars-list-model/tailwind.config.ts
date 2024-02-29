import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "14.25": "14.25%",
        "14.50": "14.50%",
        "90": "90%",
        "100": "100%",
      },
      width: {
        "10": "10%",
        "20": "20%",
        "30": "30%",
        "22.5": "22.5%",
        "95": "95%",
        "95vw": "95vw",
        "100": "100%",
      },
      padding: {
        "2%": "2%",
        "0.5px": "0.5px",
        "2.5px": "2.5px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};
export default config;
