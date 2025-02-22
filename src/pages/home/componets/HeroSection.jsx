import { Box, Button, Typography, Avatar, Stack, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Info } from "@mui/icons-material";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
const slides = [
    {
      title: "Shape Your Future. Elevate Your Skills.",
      text: "Step into the world of technology with expert-led training designed for innovation, excellence, and career growth.",
    },
    {
      title: "100k+ Students Trust Us",
      text: "We provide 99.9% uptime, lightning-fast transactions, and 24/7 support.",
    },
    {
      title: "Start Your Learning",
      text: "Unlock the secrets of trading and managing digital assets with ease.",
    },
  ];
  
const HeroSection = () => {
    const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-55% 0px -45% 0px" });
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", p: 2 }} ref={ref} >
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent:"space-around",
            gap: 4,
            p: 3,
            borderRadius: 4,
            boxShadow: 3,
            bgcolor: "white",
          }}
        > <Box
        component="img"
        src="/images/school.avif"
        alt="Crypto"
        sx={{ width: 250, borderRadius: 2 , border:"1px solid navy"}}
      />
          <Box sx={{width:{xs:"100%", md:"60%"}, display:{xs:"flex", md:"block"}, flexDirection:"column", alignItems:"center" }}>
            {/* <Typography variant="h3" fontWeight="bold"> */}
            <Typography variant="h3" fontWeight="bold">
            The Visionaries Behind Tech Cherry
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <Avatar src="/images/person.jfif" sx={{ width: 80, height: 80 }} />
              <Avatar src="/images/person2.jfif" sx={{ width: 80, height: 80 }} />
              <Avatar src="/images/person.jfif" sx={{ width: 80, height: 80 }} />
              {/* <Avatar src={people} sx={{ width: 40, height: 40 }} />
              <Avatar src={people} sx={{ width: 40, height: 40 }} /> */}
            </Stack>
            <Typography variant="body1" color="black" mt={2} sx={{ display:"flex", textAlign:{xs:"center", md:"left"} }}>
            At Tech Cherry, we are driven by a passionate team dedicated to transforming education and empowering the future.
            </Typography>
            
             <Stack direction="row" spacing={2} mt={3}>
      <Button
        variant="contained"
        startIcon={!isSmallScreen && <Star />} // Hide startIcon on small screens
        sx={{
          bgcolor: "pink",
          color: "black",
          flexDirection: isSmallScreen ? "column" : "row", // Change layout for small screens
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        {isSmallScreen && <Star sx={{ mb: 0.5 }} />} {/* Show icon above text */}
        Get started
      </Button>

      <Button
        variant="outlined"
        startIcon={!isSmallScreen && <Info />}
        sx={{
          borderColor: "black",
          color: "black",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSmallScreen && <Info sx={{ mb: 0.5 }} />}
        Find out more
      </Button>
    </Stack>
          </Box>
          
        </Box>
      </motion.div>

      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 4,
        }}
      >
        {/* Left Card */}
        <Box
        sx={{
            p: 2,
            borderRadius: 4,
            boxShadow: 3,
            bgcolor: "rgba(200, 150, 250, 0.2)",
            textAlign: "center",
            position: "relative",
            width: { xs: "90%", sm: "70%", md: "50%" }, // Responsive width
            minWidth: { xs: "100%", sm: "70%", md: "50%" },
            height:{xs:"150px", md:"auto"},
            mx: "auto", // Center the box horizontally
            // Fixed height to avoid layout shift
            display: "flex",
            flexDirection: "column",
            
          }}
    >
      {/* Animate Text Only */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", width: "95%",  }}
          
        >
          <Typography variant="body1" fontWeight="bold">
            {slides[index].title}
          </Typography>
          <Typography variant="body2" color="black" display="flex" justifyContent="center">
            {slides[index].text}
          </Typography>
        </motion.div>
      </AnimatePresence>

      {/* Static Buttons */}
      <Stack direction="row" spacing={2} mt={{xs:12, md:12}} justifyContent="center" >
        <Button size="small" variant="contained" onClick={prevSlide}>
          ←
        </Button>
        <Button size="small" variant="contained" onClick={nextSlide}>
          →
        </Button>
      </Stack>
    </Box>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow: 3,
              bgcolor: "rgba(255, 180, 200, 0.3)",
              minHeight:"150px"
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              100k+
            </Typography>
            <Typography variant="body2">
            Students Trust Us to Build Their Careers            </Typography>
            <Typography variant="body2">
                     </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <Typography variant="caption">✔ Industry-Relevant Courses
              </Typography>
              <Typography variant="caption">⚡ Expert-Led Training
              </Typography>
              <Typography variant="caption">🔒 Future-Ready Skills

</Typography>
            </Stack>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;
