import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",

        primary: "var(--color-primary)",
        bgPrimary: "var(--color-bg-primary)",
        bgSecondary: "var(--color-bg-secondary)",

        success: "var(--color-success)",
        bgSuccess: "var(--color-bg-success)",

        warning: "var(--color-warning)",
        bgWarning: "var(--color-bg-warning)",

        danger: "var(--color-danger)",
        bgDanger: "var(--color-bg-danger)",

        textPrimary: "var(--color-text-primary)",
      },
    },
  },
  plugins: [],
};
export default config;
