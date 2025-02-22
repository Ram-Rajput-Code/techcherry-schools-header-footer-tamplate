import { Box, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AboutBanner from "./AboutBanner";

// import theme from "../../theme/theme";
const AboutLayout = () => {
  return (
    <>
      <AboutBanner />
      <Container maxWidth="false" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ p: { xs: 0, md: 2 } }}>
            {/* for navigate button........................................................... */}
            <Box sx={{ display: "flex", gap: 2, mt: 2}}>
              <Link
                to="us"
                style={{
                  textDecoration: "none",
                  color: "green",
                  backgroundColor: "#f0f0f0",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                About Us
              </Link>
              <Link
                to="founder"
                style={{
                  textDecoration: "none",
                  color: "green",
                  backgroundColor: "#f0f0f0",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                Founder
              </Link>
              <Link
                to="history"
                style={{
                  textDecoration: "none",
                  color: "green",
                  backgroundColor: "#f0f0f0",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                Our History
              </Link>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Outlet /> {/* This will render nested pages */}
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default AboutLayout;
