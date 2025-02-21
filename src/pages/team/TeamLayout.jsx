import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
// import theme from "../../theme/theme";
const TeamLayout = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1">Team page</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Link to="management">Management</Link>
        <Link to="teacher">Teacher</Link>
        
      </Box>
      <Box sx={{ mt: 3 }}>
        <Outlet /> {/* This will render nested pages */}
      </Box>
    </Box>
  );
};

export default TeamLayout;
