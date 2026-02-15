const { themeConfig } = require("./components/theme/theme-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // primary: '#030014',
        primary: {
          100: themeConfig.palette.primary.lighter,
          300: themeConfig.palette.primary.light,
          500: themeConfig.palette.primary.main,
          700: themeConfig.palette.primary.dark,
          900: themeConfig.palette.primary.darker,
        },
        secondary: {
          100: themeConfig.palette.secondary.lighter,
          300: themeConfig.palette.secondary.light,
          500: themeConfig.palette.secondary.main,
          700: themeConfig.palette.secondary.dark,
          900: themeConfig.palette.secondary.darker,
        },
        info: {
          100: themeConfig.palette.info.lighter,
          300: themeConfig.palette.info.light,
          500: themeConfig.palette.info.main,
          700: themeConfig.palette.info.dark,
          900: themeConfig.palette.info.darker,
        },
        success: {
          100: themeConfig.palette.success.lighter,
          300: themeConfig.palette.success.light,
          500: themeConfig.palette.success.main,
          700: themeConfig.palette.success.dark,
          900: themeConfig.palette.success.darker,
        },
        warning: {
          100: themeConfig.palette.warning.lighter,
          300: themeConfig.palette.warning.light,
          500: themeConfig.palette.warning.main,
          700: themeConfig.palette.warning.dark,
          900: themeConfig.palette.warning.darker,
        },
        error: {
          100: themeConfig.palette.error.lighter,
          300: themeConfig.palette.error.light,
          500: themeConfig.palette.error.main,
          700: themeConfig.palette.error.dark,
          900: themeConfig.palette.error.darker,
        },
        general: {
          100: "#CED1DD",
          // 200: "#858585",
          300: "#EEEEEE",
          // 400: "#0CC25F",
          500: "#F6F8FA",
          // 600: "#E6F3FF",
          700: "#EBEBEB",
          800: "#ADADAD",
        },
      }
    },
  },
  plugins: [],
}