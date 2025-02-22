

// import { useState, useEffect } from "react";
// import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import { LibraryBooks, Palette, SportsSoccer, School, MenuBook, Computer, LocalHospital, Backpack, Fastfood, Science, Public, Security, DirectionsBus, Event, People } from "@mui/icons-material";

// const cards = [
//   { icon: <LibraryBooks />, title: "Quality Education", desc: "Well-structured curriculum and modern teaching methods." },
//   { icon: <Palette />, title: "Extracurricular Activities", desc: "Arts, music, dance, and drama programs." },
//   { icon: <SportsSoccer />, title: "Sports & Fitness", desc: "Indoor and outdoor sports facilities." },
//   { icon: <School />, title: "Smart Classrooms", desc: "Digital and interactive learning." },
//   { icon: <MenuBook />, title: "Library & Reading Room", desc: "A well-stocked library for students." },
//   { icon: <Computer />, title: "Computer Lab", desc: "Advanced IT infrastructure for digital learning." },
//   { icon: <LocalHospital />, title: "Medical Facility", desc: "First aid and regular health check-ups." },
//   { icon: <Backpack />, title: "Admissions Open", desc: "Enrollment process and criteria." },
//   { icon: <Fastfood />, title: "Healthy Canteen", desc: "Nutritious meals for students." },
//   { icon: <Science />, title: "Science Lab", desc: "Hands-on experiments and innovation space." },
//   { icon: <Public />, title: "Global Learning", desc: "International collaborations and exchange programs." },
//   { icon: <Security />, title: "Safety & Security", desc: "CCTV monitoring and student safety measures." },
//   { icon: <DirectionsBus />, title: "School Trips & Excursions", desc: "Educational and recreational trips." },
//   { icon: <Event />, title: "Events & Celebrations", desc: "Annual functions, festivals, and competitions." },
//   { icon: <People />, title: "Parental Engagement", desc: "Regular PTMs and communication channels." }
// ];

// const HomeCards = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const nextSlide = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const prevSlide = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box sx={{ position: "relative", overflow: "hidden", width: "100%", p: 1 }}>
//       <IconButton
//         onClick={prevSlide}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: 10,
//           transform: "translateY(-50%)",
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           color: "white",
//           zIndex: 2,
//           "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>
      
//       <IconButton
//         onClick={nextSlide}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: 10,
//           transform: "translateY(-50%)",
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           color: "white",
//           zIndex: 2,
//           "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>

//       <Grid container spacing={2} justifyContent="center">
//         <AnimatePresence mode="popLayout">
//           {cards.slice(startIndex, startIndex + 4).map((card, index) => (
//             <Grid item xs={6} md={3} key={card.title}>
//               <motion.div
//                 initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -100, opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Paper elevation={4} sx={{ p: 3, textAlign: "center", backgroundColor: "#a3cef1", minHeight: "220px" }}>
//                   <Box sx={{ fontSize: 40, color: "#333" }}>{card.icon}</Box>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>{card.title}</Typography>
//                   <Typography variant="body2" sx={{ color: "#555" }}>{card.desc}</Typography>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           ))}
//         </AnimatePresence>
//       </Grid>
//     </Box>
//   );
// };

// export default HomeCards;

import { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { LibraryBooks, Palette, SportsSoccer, School, MenuBook, Computer, LocalHospital, Backpack, Fastfood, Science, Public, Security, DirectionsBus, Event, People } from "@mui/icons-material";

const cards = [
  { icon: <LibraryBooks />, title: "Quality Education", desc: "Well-structured curriculum and modern teaching methods." },
  { icon: <Palette />, title: "Extracurricular Activities", desc: "Arts, music, dance, and drama programs." },
  { icon: <SportsSoccer />, title: "Sports & Fitness", desc: "Indoor and outdoor sports facilities." },
  { icon: <School />, title: "Smart Classrooms", desc: "Digital and interactive learning." },
  { icon: <MenuBook />, title: "Library & Reading Room", desc: "A well-stocked library for students." },
  { icon: <Computer />, title: "Computer Lab", desc: "Advanced IT infrastructure for digital learning." },
  { icon: <LocalHospital />, title: "Medical Facility", desc: "First aid and regular health check-ups." },
  { icon: <Backpack />, title: "Admissions Open", desc: "Enrollment process and criteria." },
  { icon: <Fastfood />, title: "Healthy Canteen", desc: "Nutritious meals for students." },
  { icon: <Science />, title: "Science Lab", desc: "Hands-on experiments and innovation space." },
  { icon: <Public />, title: "Global Learning", desc: "International collaborations and exchange programs." },
  { icon: <Security />, title: "Safety & Security", desc: "CCTV monitoring and student safety measures." },
  { icon: <DirectionsBus />, title: "School Trips & Excursions", desc: "Educational and recreational trips." },
  { icon: <Event />, title: "Events & Celebrations", desc: "Annual functions, festivals, and competitions." },
  { icon: <People />, title: "Parental Engagement", desc: "Regular PTMs and communication channels." }
];

const HomeCards = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <Box 
      sx={{ position: "relative", overflow: "hidden", width: "100%", p: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <Grid container spacing={2} justifyContent="center">
        <AnimatePresence mode="popLayout">
          {cards.slice(startIndex, startIndex + 4).map((card, index) => (
            <Grid item xs={6} md={3} key={card.title}>
              <motion.div
                initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper elevation={4} sx={{ p: 3, textAlign: "center", backgroundColor: "#a1cca5", minHeight: "220px", cursor:"pointer" }}>
                  <Box sx={{ fontSize: 40,  color: "yellow" }}>{card.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>{card.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>{card.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default HomeCards;
