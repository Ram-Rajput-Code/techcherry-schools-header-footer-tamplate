import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import BannerContact from "./components/BannerContact";

const ContactPage = () => {
  return (
    <>
    <BannerContact/>
    <Box
      component={motion.div}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <Contact/>
    </Box>
    </>
  );
};

export default ContactPage;
