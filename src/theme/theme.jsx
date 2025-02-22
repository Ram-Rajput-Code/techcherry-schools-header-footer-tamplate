

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
      navbar: "#2f4858", // Custom color for Navbar
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
      color: "black", // Default color
      "@media (min-width:600px)": { fontSize: "2rem"},
      "@media (min-width:900px)": { fontSize: "2.2rem" },
      "@media (min-width:1200px)": { fontSize: "2.5rem" },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "black", // Default color
      "@media (min-width:600px)": { fontSize: "1.6rem" },
      "@media (min-width:900px)": { fontSize: "1.8rem" },
      "@media (min-width:1200px)": { fontSize: "2rem"},
    },
    h3: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: "black", // Default color
      "@media (min-width:600px)": { fontSize: "1.4rem" },
      "@media (min-width:900px)": { fontSize: "1.6rem" },
      "@media (min-width:1200px)": { fontSize: "1.8rem"},
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "black", // Default color
      "@media (min-width:600px)": { fontSize: "1.2rem" },
      "@media (min-width:900px)": { fontSize: "1.4rem" },
      "@media (min-width:1200px)": { fontSize: "1.6rem"},
    },
    h5: {
      fontSize: "0.8rem",
      fontWeight: "bold",
      color: "black", // Default color
      "@media (min-width:600px)": { fontSize: "1rem" },
      "@media (min-width:900px)": { fontSize: "1.2rem" },
      "@media (min-width:1200px)": { fontSize: "1.4rem"},
    },
    h6: {
      fontSize: "0.6rem",
      fontWeight: "bold",
      color: "black", // Default color
      "@media (min-width:600px)": { fontSize: "0.8rem" },
      "@media (min-width:900px)": { fontSize: "1rem" },
      "@media (min-width:1200px)": { fontSize: "1.2rem"},
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
