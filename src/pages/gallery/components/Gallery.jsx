import { Grid, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Sample image data (Replace with your own images)
const galleryItems = [
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
  { src: "/images/person2.jfif", title: "Text" },
];

const Gallery = () => {
  return (
    <Box sx={{ padding: 4}}>
      <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: "bold", color: "white" }}>
        Gallery
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {galleryItems.map((item, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}
            >
              {/* Image */}
              <motion.img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  transition: "filter 0.3s ease-in-out",
                }}
              />

              {/* Dark Background Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: "linear-gradient(to right, rgba(17, 113, 203, 0), rgba(48, 139, 135, 0))",
                  transition: "background-image 0.3s ease-in-out",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundImage: "linear-gradient(to top, rgba(5, 5, 5, 0.53), rgba(26, 78, 94, 0.8))", // Dark gradient on hover
                  },
                }}
              >
                {/* Overlay Text */}
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
