/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette: pastel cyan world
        ink: "#10333C",
        aqua: {
          DEFAULT: "#17B8B0",
          deep: "#0E8C86",
        },
        foam: "#FAFEFE",
        foamdeep: "#EAF7F6",
        mist: "#DDF3F1",
        mint: "#CDEDEA",
        coral: {
          DEFAULT: "#FF8B7B",
          soft: "#FFE3DE",
        },
        sun: {
          DEFAULT: "#FFC94D",
          soft: "#FFF3D6",
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Nunito Sans"', "sans-serif"],
        body: ['"Nunito Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1200px",
      },
      borderRadius: {
        blob: "2rem",
      },
      boxShadow: {
        soft: "0 18px 50px -18px rgba(16, 51, 60, 0.18)",
        lift: "0 10px 30px -10px rgba(16, 51, 60, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        driftAlt: {
          "0%, 100%": { transform: "translateY(0) rotate(3deg)" },
          "50%": { transform: "translateY(14px) rotate(-3deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        drift: "drift 7s ease-in-out infinite",
        driftAlt: "driftAlt 9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
