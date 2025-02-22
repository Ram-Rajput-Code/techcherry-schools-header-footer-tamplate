import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box
      
        sx={{ padding: 0, margin: 0, minHeight: "60vh", mt: 0, mb: 3 }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
export default MainLayout;
