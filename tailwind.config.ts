const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "inherit",
            a: {
              color: "inherit",
              "&:hover": {
                color: "inherit",
              },
            },
          },
        },
        dark: {
          css: {
            color: "inherit",
            '[class~="lead"]': {
              color: "inherit",
            },
            a: {
              color: "inherit",
              "&:hover": {
                color: "inherit",
              },
            },
            strong: {
              color: "inherit",
            },
            "ol > li::before": {
              color: "inherit",
            },
            "ul > li::before": {
              backgroundColor: "inherit",
            },
            hr: {
              borderColor: "inherit",
            },
            blockquote: {
              color: "inherit",
              borderLeftColor: "inherit",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            "figure figcaption": {
              color: "inherit",
            },
            code: {
              color: "inherit",
            },
            "a code": {
              color: "inherit",
            },
            pre: {
              color: "inherit",
              backgroundColor: "inherit",
            },
            thead: {
              color: "inherit",
              borderBottomColor: "inherit",
            },
            "tbody tr": {
              borderBottomColor: "inherit",
            },
          },
        },
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#1e1e1e",
        },
        primary: {
          light: "#f5f5f5",
          dark: "#3498db",
        },
        accent1: {
          light: "#a5b6c4",
          dark: "#95a5a6",
        },
        accent2: {
          light: "#cccccc",
          dark: "#555555",
        },
        text: {
          light: "#333333",
          dark: "#f5f5f5",
        },
        heading: {
          light: "#555555",
          dark: "#ffffff",
        },
        subheading: {
          light: "#777777",
          dark: "#cccccc",
        },
        button: {
          light: "#f5f5f5",
          dark: "#3498db",
        },
        border: {
          light: "#cccccc",
          dark: "#555555",
        },
        card: {
          light: "#ffffff",
          dark: "#2c3e50",
        },
        formOutline: {
          light: "#cccccc",
          dark: "#555555",
        },
        highlight: {
          light: "#a5b6c4",
          dark: "#95a5a6",
        },
        aboutBackground: {
          light: "#e0f7fa", // Light cyan for light theme
          dark: "#37474f", // Blue gray for dark theme
        },
      },
      keyframes: {
        gradientBorder: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradientBorder: "gradientBorder 8s ease infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffffff",
            primary: "#f5f5f5",
            accent1: "#a5b6c4",
            accent2: "#cccccc",
            text: "#333333",
            heading: "#555555",
            subheading: "#777777",
            button: "#f5f5f5",
            border: "#cccccc",
            card: "#ffffff",
            formOutline: "#cccccc",
            highlight: "#a5b6c4",
            aboutBackground: "#e0f7fa", // Light cyan for light theme
            cardBackground: "#E4E3F5",
            btnDarkBlue: "#1F1D63",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#1e1e1e",
            primary: "#3498db",
            accent1: "#95a5a6",
            accent2: "#555555",
            text: "#f5f5f5",
            heading: "#ffffff",
            subheading: "#cccccc",
            button: "#3498db",
            border: "#555555",
            card: "#2c3e50",
            formOutline: "#555555",
            highlight: "#95a5a6",
            aboutBackground: "#37474f", // Blue gray for dark theme
          },
        },
      },
    }),
  ],
};

module.exports = config;
