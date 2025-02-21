

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: {
      default: "#121212", // Default background color
      white: "rgba(219, 218, 218, 0.69)", // white background color
      paper: "#1E1E1E", // Background for components like Card
      navbar: "#0D47A1", // Custom color for Navbar
      footer: "#00715D", // Custom color for Footer
    },
  },

  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 900, // Medium devices (small laptops)
      lg: 1200, // Large devices (desktops)
      xl: 1536, // Extra large devices
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
   
    h1: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "red", // Default color
      "@media (min-width:600px)": { fontSize: "2rem", color: "blue" },
      "@media (min-width:900px)": { fontSize: "2.2rem", color: "green" },
      "@media (min-width:1200px)": { fontSize: "2.5rem", color: "orange" },
    },

    h2: {
      fontSize: "1.75rem",
      "@media (min-width:600px)": { fontSize: "2.25rem" },
      "@media (min-width:900px)": { fontSize: "2.75rem" },
    },
    h3: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": { fontSize: "2rem" },
      "@media (min-width:900px)": { fontSize: "2.5rem" },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": { fontSize: "1.125rem" },
      "@media (min-width:900px)": { fontSize: "1.25rem" },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.125rem" },
    },
  },
});

export default theme;
