
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Lightbulb, Flag } from "@mui/icons-material";


const visionMissionData = [
  {
    title: "Our Mission",
    description:
      "Mission of our school is to groom students in such a way that by assimilating modern Science and Technology blended with our rich cultural heritage they will be able to steer the nation to the path of progress and become a proud citizen of India.",
    icon: <Lightbulb fontSize="large" color="primary" />,
  },
  {
    title: "Our Vision",
    description:
      "India today needs bold enterprising and courageous future generation so as to cope up with challenges our country facing, hence SEA strongly believe that we should groom the students such that he or she is well aware of the burning problems of Indian Society. ",
    icon: <Flag fontSize="large" color="primary" />,
  },
];

const VisionMission = () => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px 0px", justifyContent: "center" }}>
      {visionMissionData.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card sx={{ padding: 2, textAlign: "center", boxShadow: 3, borderRadius: 3, backgroundColor:"#f5ebe0" }}>
              <CardContent>
                <Grid container justifyContent="center">
                  {item.icon}
                </Grid>
                <Typography variant="h5" component="div" gutterBottom color="red" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default VisionMission;