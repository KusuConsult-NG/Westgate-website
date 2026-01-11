/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Consolidated color palette
                primary: {
                    DEFAULT: "#137fec", // Home, AI, Training
                    royal: "#0f49bd",   // Strategy, Advisory, Contact
                    purple: "#270da5",  // About
                    news: "#0d40a5",    // Insights
                },
                background: {
                    light: "#f6f7f8", // Home, AI
                    dark: "#0f172a",  // Home
                    "dark-blue": "#101922", // AI, Training, Strategy
                    "dark-deep": "#0a0f1d", // Home slate-950 equivalent
                },
                slate: {
                    950: "#0a0f1d",
                    gray: "#4c739a", // AI
                    accent: "#334155", // Strategy
                },
                accent: {
                    gold: "#c5a059",
                },
                ivory: "#fcfcfd", // AI
                "ivory-light": "#fafafb", // Contact
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
