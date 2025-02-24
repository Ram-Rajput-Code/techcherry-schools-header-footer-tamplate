import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Banner from "./componentes/Banner";
// import theme from "../../theme/theme";
const TeamLayout = () => {
  return (
    <>
    <Banner/>
    <Box sx={{ p: 2, backgroundColor:"white" }}>
      
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Link to="management">Management</Link>
        <Link to="teacher">Teacher</Link>
        
      </Box>
      <Box sx={{ mt: 3 }}>
        <Outlet /> {/* This will render nested pages */}
      </Box>
    </Box>
    </>
  );
};

export default TeamLayout;
