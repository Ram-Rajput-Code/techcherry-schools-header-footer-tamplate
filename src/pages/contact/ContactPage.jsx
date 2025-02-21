import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1">Email: info@techcherry.com</Typography>
    </Box>
  );
};

export default ContactPage;
