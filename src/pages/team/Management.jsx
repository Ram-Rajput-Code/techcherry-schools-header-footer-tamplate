import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Management = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Typography variant="h5">Management team</Typography>
      <Typography variant="body1">We are an innovative computer education center.</Typography>
    </Box>
  );
};

export default Management;
