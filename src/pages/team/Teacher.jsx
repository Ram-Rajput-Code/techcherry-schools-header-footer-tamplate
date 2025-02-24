import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Teachers from "./componentes/Teachers";

const Teacher = () => {
  return (
    <Box component={motion.div} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <Typography variant="h4" sx={{textAlign:"center"}}>Teachers</Typography>
     <Teachers/>
    </Box>
  );
};

export default Teacher;
