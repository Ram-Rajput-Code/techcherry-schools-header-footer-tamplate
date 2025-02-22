import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Teacher = () => {
  return (
    <Box component={motion.div} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <Typography variant="h5">Teacher</Typography>
      <Typography variant="body1">We have been shaping careers since 2010.</Typography>
    </Box>
  );
};

export default Teacher;
