import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AboutBanner from "./AboutBanner";
// import theme from "../../theme/theme";
const AboutLayout = () => {
  return (
    <>
    <AboutBanner/>
    <Box sx={{ p: 3 }}>
      <Typography variant="h1">About Section</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Link to="us">About Us</Link>
        <Link to="team">Our Team</Link>
        <Link to="history">Our History</Link>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Outlet /> {/* This will render nested pages */}
      </Box>
    </Box>
    </>
  );
};

export default AboutLayout;
