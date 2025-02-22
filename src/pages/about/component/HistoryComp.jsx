import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const historyData = [
  {
    year: "2019",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2020",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2021",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2022",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const HistoryComp = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e9edc9",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 4,
        borderRadius:2
      
      }}
    >
      <Grid container spacing={4} maxWidth={900} >
        {historyData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Typography variant="h4" fontWeight="bold" color="black">
                {item.year}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {item.text}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HistoryComp;
