
// import theme from "../theme/theme";


// import { Box, Grid, Typography, Link } from "@mui/material";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: theme.palette.background.footer, color: "white", padding: "20px 20px", textAlign: "center" }}>
//       <Grid container spacing={3}>
//         {/* Column 1 */}
//         <Grid item xs={12} md={4}>
//           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             <Typography variant="h6">About Us</Typography>
//             <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
//               We are a tech company providing innovative solutions in web and app development.
//             </Typography>
//           </motion.div>
//         </Grid>

//         {/* Column 2 */}
//         <Grid item xs={12} md={4}>
//           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <Typography variant="h6">Quick Links</Typography>
//             <Box sx={{ mt: 1 }}>
//               <Link href="/" color="inherit" sx={{ display: "block", textDecoration: "none", "&:hover": { color: "yellow" } }}>
//                 Home
//               </Link>
//               <Link href="/about" color="inherit" sx={{ display: "block", textDecoration: "none", "&:hover": { color: "yellow" } }}>
//                 About
//               </Link>
              
//               <Link href="/contact" color="inherit" sx={{ display: "block", textDecoration: "none", "&:hover": { color: "yellow" } }}>
//                 Contact
//               </Link>
//             </Box>
//           </motion.div>
//         </Grid>

//         {/* Column 3 */}
//         <Grid item xs={12} md={4}>
//           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//             <Typography variant="h6">Contact Us</Typography>
//             <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>Email: info@techcherry.com</Typography>
//             <Typography variant="body2" sx={{ color: "#bbb" }}>Phone: +91 1234567890</Typography>
//             <Typography variant="body2" sx={{ color: "#bbb" }}>Location: Bilaspur, Chhattisgarh</Typography>
//           </motion.div>
//         </Grid>
//       </Grid>

//       {/* Bottom Section */}
//       <Box sx={{ mt: 3, borderTop: "1px solid black", pt: 2 }}>
//         <Typography variant="body2" color="white">
//           © {new Date().getFullYear()} Tech Cherry. All Rights Reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import theme from "../theme/theme";
import { Box, Grid, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";

const footerData = [
  {
    title: "About Us",
    content: "We are a tech company providing innovative solutions in web and app development.",
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact Us",
    content: [
      "Email: info@techcherry.com",
      "Phone: +91 1234567890",
      "Location: Bilaspur, Chhattisgarh",
    ],
  },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: theme.palette.background.footer, color: "white", padding: "20px 20px", textAlign: "center" }}>
      <Grid container spacing={3}>
        {footerData.map((section, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 + index * 0.1 }}>
              <Typography variant="h6">{section.title}</Typography>

              {/* Render text content */}
              {section.content && typeof section.content === "string" ? (
                <Typography variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                  {section.content}
                </Typography>
              ) : null}

              {/* Render multiple text contents */}
              {section.content && Array.isArray(section.content) ? (
                section.content.map((text, i) => (
                  <Typography key={i} variant="body2" sx={{ mt: 1, color: "#bbb" }}>
                    {text}
                  </Typography>
                ))
              ) : null}

              {/* Render links */}
              {section.links && (
                <Box sx={{ mt: 1 }}>
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      color="inherit"
                      sx={{ display: "block", padding:"3px 0px", textDecoration: "none", "&:hover": { color: "yellow" } }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              )}
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ mt: 3, borderTop: "1px solid black", pt: 2 }}>
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} Tech Cherry. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
