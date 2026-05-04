export default {
  content: ["./index.html", "./src/*/.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#111827",
        muted: "#6B7280"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: []
};