import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <Box component={motion.div} initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 50 }}>
      <Typography variant="h5">Our Team</Typography>
      <Typography variant="body1">Meet our amazing instructors and staff.</Typography>
    </Box>
  );
};

export default Team;
