import { Box, Typography, Container } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const FixedBannerReuseableComp = ({ imageUrl, heading, content }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Animate text opacity and movement based on scroll position
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "45vh", md: "60vh" },
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "60vh", md: "70vh" },
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          filter: "brightness(30%)", // Dark overlay effect
        }}
      />

      {/* Animated Text */}
      <Container
        ref={ref}
        component={motion.div}
        // style={{ opacity:1, textOpacity, y: textY }}
        style={{ opacity: textOpacity, y: textY }}
        sx={{
          position: "relative",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" color="white" fontWeight="bold">
          {heading}
        </Typography>
        <Typography variant="h6" color="white" mt={2} maxWidth="600px">
          {content}
        </Typography>
      </Container>

      {/* Scrollable Content */}
    </Box>
  );
};

export default FixedBannerReuseableComp;
