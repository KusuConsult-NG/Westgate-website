/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#137fec",
                    royal: "#0f49bd",
                    purple: "#270da5",
                    news: "#0d40a5",
                },
                background: {
                    light: "#f6f7f8",
                    dark: "#0f172a",
                    "dark-blue": "#101922",
                    "dark-deep": "#0a0f1d",
                },
                slate: {
                    950: "#0a0f1d",
                    gray: "#4c739a",
                    accent: "#334155",
                },
                accent: {
                    gold: "#c5a059",
                },
                ivory: "#fcfcfd",
                "ivory-light": "#fafafb",
            },
            fontFamily: {
                sans: ["Inter", "Public Sans", "Noto Sans", "sans-serif"],
                serif: ["Playfair Display", "Newsreader", "Noto Serif", "serif"],
                display: ["Inter", "Newsreader", "Noto Serif", "sans-serif"],
            },
            borderRadius: {
                lg: "0.5rem",
                xl: "0.75rem",
            },
        },
    },
    plugins: [],
}
