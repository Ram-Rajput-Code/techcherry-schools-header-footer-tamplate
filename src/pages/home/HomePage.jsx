import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import theme from "../../theme/theme";
import HomeBanner from "./componets/HomeBanner";

const HomePage = () => {
  return (
    <>
       <HomeBanner/>
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{backgroundColor:theme.palette.background.white, borderRadius:"5px", p:2 }}
    >
   
      <Typography variant="h4">Welcome to Tech Cherry</Typography>
      <Typography variant="body1">This is the homepage.</Typography>
    </Box>
    </>
  );
};
export default HomePage;
