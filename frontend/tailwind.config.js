/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundPrimary: "var(--background-primary)",
        backgroundSecondary: "var(--background-secondary)",
        backgroundThird: "var(--background-third)",
        foregroundPrimary: "var(--foreground-primary)",
        foregroundSecondary: "var(--foreground-secondary)",
        accentPrimary: "var(--accent-primary)",
        accentSecondary: "var(--accent-secondary)",
        validationPrimary: "var(--validation-primary)",
        validationSecondary: "var(--validation-secondary)",
        errorPrimary: "var(--error-primary)",
        errorSecondary: "var(--error-secondary)",
        warningPrimary: "var(--warning-primary)",
        warningSecondary: "var(--warning-secondary)",
        utilityBlue: "var(--utility-blue)",
        utilityBlueAlt: "var(--utility-blue-alt)",
        utilityRed: "var(--utility-red)",
        utilityRedAlt: "var(--utility-red-alt)",
        utilityYellow: "var(--utility-yellow)",
        utilityYellowAlt: "var(--utility-yellow-alt)",
        utilityGreen: "var(--utility-green)",
        utilityGreenAlt: "var(--utility-green-alt)",
        utilityLightblue: "var(--utility-lightblue)",
        utilityLightblueAlt: "var(--utility-lightblue-alt)",
        borderColor: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
