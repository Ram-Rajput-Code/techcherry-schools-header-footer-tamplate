import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3, minHeight: "60vh" }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
export default MainLayout