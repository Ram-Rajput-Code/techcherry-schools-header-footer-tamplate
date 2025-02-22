
import {  Grid, Typography, Box } from "@mui/material";

const homeData = [
  {
    id: 1,
    image: "/images/homebody1.jpg", 
    text: "Shivam Educational Academy is a prestigious co-educational, English medium school located in Indraprastha, RDA Colony, Raipur, Chhattisgarh. Affiliated with the CBSE Board, Affiliation No.- 3330414, the school offers an intermediate-level education with a strong focus on both academic and personal development."
  },
  {
    id: 2,
    image: "images/homebody2.jpg", 
    text: "At Shivam Educational Academy, the curriculum is designed to foster critical thinking, creativity, and lifelong learning. The school provides a balanced approach to education by integrating academics with co-curricular activities such as sports, arts, and community involvement. With experienced faculty members dedicated to nurturing each student's potential, the academy emphasizes values, discipline, and skills that prepare students to thrive in a rapidly changing world."
  }
];

const HomeBody = () => {
  return (
    <Box boxShadow={1} sx={{ textAlign: "center", p: 1, m:1,  width:"99%" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Home Page
      </Typography>
      {homeData.map((item, index) => (
        <Grid
          container
         
         
          spacing={4}
          key={item.id}
         
          flexDirection={{ xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
          sx={{ mb: 5 }}
        >
          <Grid item xs={12} md={6} >
            <Box component="img" src={item.image} alt="Home section" sx={{ width: "90%", height:"300px", borderRadius: 2 }} />
          </Grid>
          <Grid  item xs={12} md={6}>
            <Typography variant="body1" sx={{ textAlign: "justify", px: { xs: 2, md: 0 } }}>
              {item.text}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default HomeBody;
