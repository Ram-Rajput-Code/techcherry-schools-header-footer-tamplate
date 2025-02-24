import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ManagementStaff from "./componentes/ManagementStaff";

const Management = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Typography variant="h4" textAlign="center">Management Team</Typography>
      <ManagementStaff/>
    </Box>
  );
};

export default Management;
