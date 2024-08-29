import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";
import Animated from "tailwindcss-animated";
import Transforms from "@xpd/tailwind-3dtransforms";

export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    // Loaded
                    "Inter Variable",
                    // Fallback
                    "Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", "Arial", "sans-serif",
                    // Emotes
                    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
                ],
                brand: [
                    "Rosario Variable"
                ],
            },
        },
    },
    plugins: [
        Typography,
        Animated,
        Transforms
    ],
} satisfies Config
