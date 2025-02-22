import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const accordionData = [
  {
    title: "Classrooms",
    content:
      "Spacious, well-lit, and ventilated classrooms designed to provide a positive learning atmosphere.",
  },
  {
    title: "Play Area and Sports Facilities",
    content:
      "A well-equipped play area and sports facilities to promote physical activities and teamwork.",
  },
  {
    title: "Library",
    content:
      "A vast collection of books and digital resources to encourage reading and research.",
  },
];

export default function AccordionComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto" }}>
      {accordionData.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: openIndex === index ? "#fef9ea" : "#fff",
            marginBottom: 2,
            borderRadius: 3,
            padding: 2,
            boxShadow: 2,
            cursor: "pointer",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => handleToggle(index)}
          >
            <Typography
              variant="subtitle1"
              fontWeight={openIndex === index ? "bold" : "normal"}
              color={openIndex === index ? "green" : "black"}
            >
              {item.title}
            </Typography>
            <IconButton>
              {openIndex === index ? <ExpandLess sx={{color:"red"}} /> : <ExpandMore sx={{color:"red"}} />}
            </IconButton>
          </Box>

          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="body2" mt={1}>
                {item.content}
              </Typography>
            </motion.div>
          )}
        </Box>
      ))}
    </Box>
  );
}
