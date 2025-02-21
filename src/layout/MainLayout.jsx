import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="false"  sx={{ padding: 0, margin: 0, minHeight: '60vh', mt:3, mb:3, }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
export default MainLayout