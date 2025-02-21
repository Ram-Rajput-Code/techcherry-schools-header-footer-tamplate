import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4">Gallery Page</Typography>
      <Typography variant="body1">GalleryPage section</Typography>
    </Box>
  );
};

export default GalleryPage;
