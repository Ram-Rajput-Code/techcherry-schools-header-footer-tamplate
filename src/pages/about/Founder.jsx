
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Ravindra Pratap Singh",
    title: "Founder & Director",
    description:
      "A school plays a central role in nurturing and developing the unique talent of every child as well as in shaping their character. In SEA it is our mission to march forward and contribute to the society through spreading value-based education. We believe in focusing on various dimensions of growth for a child and not just academics. SEA is proudly motivating and mobilizing the young hearts to be equipped with humility and integrity. We dedicate ourselves everyday to provide an excellent education for our children. Our curriculum and practices are consistently reviewed to ensure that we are following the most updated best practices, meeting all regulations, and addressing the future needs of our students. Our list of activities and other extracurricular offerings are broadened each year with a hope to have something that interests every student.",
    image: "/images/founder.jpg", }
];

const FounderSection = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 4 }}>
      {founders.map((founder, index) => (
        <Grid
          key={index}
          container
          spacing={4}
          // alignItems="center"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {/* Left Side - Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={founder.image}
                alt={founder.name}
                sx={{
                  width: "100%",
                  maxHeight: "600px",
                  borderRadius: "8px",
                  boxShadow: 3,
                }}
              />
            </motion.div>
          </Grid>

          {/* Right Side - Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" color="navy" fontWeight="bold">
                {founder.name}
              </Typography>
              <Typography variant="h6" color="gray" mt={1}>
                {founder.title}
              </Typography>
              <Typography variant="body1" color="black" mt={2}>
                {founder.description}
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default FounderSection;
