import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        accent: "#00FF00",
        text: "#FFFFFF",
        muted: "rgba(255,255,255,0.55)"
      },
      borderRadius: {
        glass: "32px"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 255, 0, 0.15)"
      },
      letterSpacing: {
        tightestTech: "-0.07em"
      }
    }
  },
  plugins: []
};

export default config;
