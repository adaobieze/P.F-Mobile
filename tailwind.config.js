/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const customColors = {
  primary: '#EDAE1A',
  "primary-light": '#F4D37E',
  "primary-lighter": "#F8E2A9",
  info: colors.sky["500"],
  "info-focus": colors.sky["600"],
  success: colors.emerald["500"],
  "success-focus": colors.emerald["600"],
  warning: "#ff9800",
  "warning-focus": "#e68200",
  error: "#ff5724",
  "error-focus": "#f03000",
};

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{php,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontSize: {
        tiny: ["0.625rem", "0.8125rem"],
        "tiny+": ["0.6875rem", "0.875rem"],
        "xs+": ["0.8125rem", "1.125rem"],
        "sm+": ["0.9375rem", "1.375rem"],
      },
      colors: { ...customColors },
    },
  },
  plugins: [],
}

