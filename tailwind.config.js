/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2E57A2",

          "secondary": "#87A8E3",
          "accent": "#5F8EE3",
          "accent-content": "#ffffff",
          "neutral": "#3A393B",

          "base-100": "#ffffff",
          "base-content": "#0D0D0D",
        },
        dark: {
          "primary": "#698AC5",

          "secondary": "#87A8E3",
          "accent": "#7CAAFE",
          "accent-content": "#ffffff",
          "neutral": "#181818",

          "base-100": "#090909",
          "base-content": "#FCFCFE",
        },
      },
    ],
  }
}
