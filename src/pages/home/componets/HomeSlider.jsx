// import { Box, Typography, IconButton } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// const slides = [
//   {
//     image: "/images/homeSlider2.webp",
//     heading: "Welcome to Our Platform",
//     description: "Explore our services and offerings with ease."
//   },
//   {
//     image: "/images/homeSlider3.webp",
//     heading: "Empowering Your Learning",
//     description: "Get access to world-class education resources."
//   },
//   {
//     image: "/images/homeSlider4.webp",
//     heading: "Join Our Community",
//     description: "Connect with like-minded learners and experts."
//   }
// ];

// const HomeSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const timer = setTimeout(nextSlide, 4000);
//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: {xs:"200px", sm:"300px", md:"400px"},
//         overflow: "hidden"
//       }}
//     >
//       <AnimatePresence>
//         <motion.div
//           key={currentIndex}
//           initial={{ x: "100%" }}
//           animate={{ x: "0%" }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${slides[currentIndex].image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//           {/* Dark Overlay for Better Contrast */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay
//             }}
//           />

//           {/* Text Content */}
//           <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
//             <Typography
//               variant="h3"
//               fontWeight="bold"
//               sx={{
//                 color: "#fff",
//                 textShadow: "4px 4px 20px rgba(255,255,255,1)", // Brighter text
//               }}
//             >
//               {slides[currentIndex].heading}
//             </Typography>
//             <Typography
//               variant="h6"
//               mt={2}
//               sx={{
//                 color: "#fff",
//                 textShadow: "2px 2px 15px rgba(255,255,255,0.9)", // Brighter text
//               }}
//             >
//               {slides[currentIndex].description}
//             </Typography>
//           </Box>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Buttons */}
//       <IconButton
//         onClick={prevSlide}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "20px",
//           transform: "translateY(-50%)",
//           color: "white",
//           backgroundColor: "rgba(0,0,0,0.5)",
//           "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" }
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <IconButton
//         onClick={nextSlide}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: "20px",
//           transform: "translateY(-50%)",
//           color: "white",
//           backgroundColor: "rgba(0,0,0,0.5)",
//           "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" }
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default HomeSlider;


import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/homeSlider2.webp",
    heading: "Welcome to Our Platform",
    description: "Explore our services and offerings with ease."
  },
  {
    image: "/images/homeSlider3.webp",
    heading: "Empowering Your Learning",
    description: "Get access to world-class education resources."
  },
  {
    image: "/images/homeSlider4.webp",
    heading: "Join Our Community",
    description: "Connect with like-minded learners and experts."
  }
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "200px", sm: "300px", md: "400px" },
        overflow: "hidden"
      }}
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Dark Overlay for Better Contrast */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          />

          {/* Text Content with Slide-in Slide-out Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 2, textAlign: "center" }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  color: "#fff",
                  textShadow: "2px 2px 30px rgba(255,255,255,1)",
                }}
              >
                {slides[currentIndex].heading}
              </Typography>
              <Typography
                variant="h6"
                mt={2}
                sx={{
                  color: "#fff",
                  textShadow: "2px 2px 15px rgba(255,255,255,0.9)",
                }}
              >
                {slides[currentIndex].description}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default HomeSlider;
