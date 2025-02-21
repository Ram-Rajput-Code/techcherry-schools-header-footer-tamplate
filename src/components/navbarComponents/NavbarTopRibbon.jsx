

// import { useState } from "react";
// import { Box, Typography, IconButton, Grid, useTheme, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InfoIcon from "@mui/icons-material/Info";

// const ribbonData = [
//   { icon: <EmailIcon />, text: "info@techcherry.com" },
//   { icon: <PhoneIcon />, text: "+91 98765 43210" },
//   { icon: <LocationOnIcon />, text: "Durg, Chhattisgarh" },
//   { icon: <InfoIcon />, text: "Mandatory Disclosure" },
// ];

// const NavbarTopRibbon = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const handleIconClick = (index) => {
//     setSelectedIndex(selectedIndex === index ? null : index);
//   };

//   return (
//     <Box
//       component={motion.div}
//       initial={{ x: -20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       sx={{
//         backgroundColor: "#00715D",
//         color: "white",
//         padding: "5px 10px",
//       }}
//     >
//       <Grid container spacing={1} justifyContent="center">
//         {ribbonData.map((item, index) => (
//           <Grid item  xs={3} md={3} key={index} sx={{ textAlign: "center", justifyContent:"space-around" }}>
//             <Grid container sx={{display:"flex", alignItems:"center"}}>
//             <IconButton
//               sx={{ color: "white", position:"relative" }}
//               onClick={() => handleIconClick(index)}
//             >
//               {item.icon}
//             </IconButton>
//             {isSmallScreen && selectedIndex === index && (
//               <Typography variant="caption" display="block" top="0px" position="absolute">
//                 {item.text}
//               </Typography>
              
//             )}
//             {!isSmallScreen && (
//               <Typography variant="subtitle2">{item.text}</Typography>
//             )}
//             </Grid>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default NavbarTopRibbon;

// import { useState } from "react";
// import { 
//   Box, Typography, IconButton, Grid, useTheme, useMediaQuery, Dialog, DialogContent 
// } from "@mui/material";
// import { motion } from "framer-motion";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import InfoIcon from "@mui/icons-material/Info";

// const ribbonData = [
//   { icon: <EmailIcon />, text: "info@techcherry.com" },
//   { icon: <PhoneIcon />, text: "+91 98765 43210" },
//   { icon: <LocationOnIcon />, text: "Durg, Chhattisgarh" },
//   { icon: <InfoIcon />, text: "Mandatory Disclosure" },
// ];

// const NavbarTopRibbon = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
//   const [open, setOpen] = useState(false);
//   const [selectedText, setSelectedText] = useState("");

//   const handleIconClick = (text) => {
//     if (isSmallScreen) {
//       setSelectedText(text);
//       setOpen(true);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedText("");
//   };

//   return (
//     <Box
//       component={motion.div}
//       initial={{ x: -20, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       sx={{
//         backgroundColor: "#00715D",
//         color: "white",
//         padding: "5px 10px",
//       }}
//     >
//       <Grid container spacing={1} justifyContent="center">
//         {ribbonData.map((item, index) => (
//           <Grid item xs={3} md={3} key={index} sx={{ textAlign: "center" }}>
//             <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <IconButton
//                 sx={{ color: "white", padding:"0px" }}
//                 onClick={() => handleIconClick(item.text)}
//               >
//                 {item.icon}
//               </IconButton>
//               {!isSmallScreen && <Typography variant="subtitle2">{item.text}</Typography>}
//             </Grid>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Modal (only for small screens) */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//           <Typography variant="h6">{selectedText}</Typography>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default NavbarTopRibbon;

import { useState } from "react";
import { 
  Box, Typography, IconButton, Grid, useTheme, useMediaQuery, Popover 
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";

const ribbonData = [
  { icon: <EmailIcon />, text: "info@techcherry.com" },
  { icon: <PhoneIcon />, text: "+91 98765 43210" },
  { icon: <LocationOnIcon />, text: "Durg, Chhattisgarh" },
  { icon: <InfoIcon />, text: "Mandatory Disclosure" },
];

const NavbarTopRibbon = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedText, setSelectedText] = useState("");

  const handleIconClick = (event, text) => {
    if (isSmallScreen) {
      setAnchorEl(event.currentTarget);
      setSelectedText(text);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedText("");
  };

  return (
    <Box
      component={motion.div}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        backgroundColor: "#00715D",
        color: "white",
        padding: "5px 10px",
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        {ribbonData.map((item, index) => (
          <Grid item xs={3} md={3} key={index} sx={{ textAlign: "center" }}>
            <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton
                sx={{ color: "white", padding: "0px" }}
                onClick={(event) => handleIconClick(event, item.text)}
              >
                {item.icon}
              </IconButton>
              {!isSmallScreen && <Typography variant="subtitle2">{item.text}</Typography>}
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Popover for small screens */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ mt: 1 }}
      >
        <Typography sx={{ p: 1 }}>{selectedText}</Typography>
      </Popover>
    </Box>
  );
};

export default NavbarTopRibbon;
