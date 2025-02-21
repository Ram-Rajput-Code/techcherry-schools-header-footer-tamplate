import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h4">Welcome to Tech Cherry</Typography>
      <Typography variant="body1">This is the homepage.</Typography>
    </Box>
  );
};
export default HomePage;
