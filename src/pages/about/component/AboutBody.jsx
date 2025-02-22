import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const aboutData = [
  {
    id: 1,
    heading: "About Our School",
    text: `Shivam Educational Academy is a prestigious co-educational, English medium school located in Indraprastha, RDA Colony, Raipur, Chhattisgarh. Affiliated with the Central Board of Secondary Education (CBSE), the school offers an intermediate-level education with a strong focus on both academic and personal development.

            At Shivam Educational Academy, the curriculum is designed to foster critical thinking, creativity, and lifelong learning. The school provides a balanced approach to education by integrating academics with co-curricular activities such as sports, arts, and community involvement. With experienced faculty members dedicated to nurturing each student's potential, the academy emphasizes values, discipline, and skills that prepare students to thrive in a rapidly changing world.`,
    image: "/images/aboutschool.avif",
  },
];

const AboutBody = () => {
  return (
    <Box sx={{ p: 2, boxShadow: "1" }}>
      {aboutData.map((item) => (
        <>
          <Typography
            key={item.id}
            variant="h4"
            align="center"
            gutterBottom
            component={motion.h4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item.heading}
          </Typography>

          <Grid
            container
            spacing={4}
            // alignItems="center"
            justifyContent="space-around"
            sx={{ mt: 1 }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                component={motion.p}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                sx={{ textAlign: "justify" }}
              >
                {item.text}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.img
                src={item.image}
                alt="About Us"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              />
            </Grid>
          </Grid>
        </>
      ))}
    </Box>
  );
};

export default AboutBody;
