import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

const GalleryPage = () => {
  return (
    <>
    <Banner/>
    <Box
      component={motion.div}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Gallery/>
      
    </Box>
    </>
  );
};

export default GalleryPage;
