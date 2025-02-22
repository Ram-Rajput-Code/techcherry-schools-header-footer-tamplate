import { Box } from "@mui/material";
import { motion } from "framer-motion";
import AboutBody from "./component/AboutBody";
import VisionMission from "./component/VisionMission";
import AccordionComponent from "./component/AccordionComponent";

const AboutUs = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} m={0}>
      <AboutBody />
      <VisionMission/>
      <AccordionComponent/>
    </Box>
  );
};

export default AboutUs;
