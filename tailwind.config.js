/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    import("tw-elements/dist/plugin.cjs"),
    function ({ addComponents }) {
      const layout = {
        ".primary": {
          background: "#ffffff",
          color: "black",
          width: "100%",
          minHeight: "100vh",
        },
        ".secondary": {
          background: "#000000",
          color: "white",
          width: "100%",
          minHeight: "100vh",
        },

        ".credential": {
          background: "#ffffff",
          color: "black",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        },
      };

      addComponents(layout);
    },
  ],
};
