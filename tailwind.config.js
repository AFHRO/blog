/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0498b4;",
        // secondary: "#f95b26",
        secondary: "#E52424",
        secondaryDark: "hsl(15, 100%, 45%)",
        secondaryLight:"hsl(15, 100%, 65%)",

        blue: {
          950: "#17275c",
        },
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
