import { Box } from "@mui/material";
import { motion } from "framer-motion";
import HistoryComp from "./component/HistoryComp";

const History = () => {
  return (
    <Box component={motion.div} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <HistoryComp/>
    </Box>
  );
};

export default History;
