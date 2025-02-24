import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    submenu: [
      { label: "About Us", path: "/about/us" },
      { label: "Founder", path: "/about/founder" },
      { label: "History", path: "/about/history" },
    ],
  },
  {
    label: "Team",
    path: "team",
    submenu: [
      { label: "Management", path: "/team/management" },
      { label: "Teacher", path: "/team/teacher" },
    ],
  },
  { label: "Contact", path: "/contact" },
  { label: "Gallery", path: "/gallery" },
];

const Menubar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detects screen size

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      top="0"
      sx={{ backgroundColor: theme.palette.background.navbar }}
    >
      <Toolbar>
        {/* Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, color:"white" }}>
          Tech Cherry
        </Typography>

        {/* Mobile Menu Icon */}
        {isMobile ? (
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box display="flex" gap={2}>
            {menuItems.map((menu, index) => (
              <Box
                key={index}
                sx={{ position: "relative" }}
                onMouseEnter={() => menu.submenu && setOpenSubMenu(index)}
                onMouseLeave={() => menu.submenu && setOpenSubMenu(null)}
              >
                <Button
                  component={NavLink}
                  to={menu.path}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    padding: "7px 15px",
                    borderRadius: "5px",
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                    "&.active": {
                      color: "yellow",
                    },
                  }}
                >
                  {menu.label}
                  {menu.submenu && (
                    <ExpandMoreIcon sx={{ fontSize: 20, ml: 1 }} />
                  )}
                </Button>

                {/* Submenu for Desktop */}
                {menu.submenu && openSubMenu === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "10px",
                      minWidth: "220px",
                      zIndex: 10,
                      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    {menu.submenu.map((submenuItem, subIndex) => (
                      <Box key={subIndex} sx={{ padding: 0, margin: 0 }}>
                        <Button
                          component={NavLink}
                          to={submenuItem.path}
                          sx={{
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            borderRadius: "3px",
                            transition: "background-color 0.3s, color 0.3s",
                            color: "#2358A9",
                            fontWeight: "bold",
                            "&.active": {
                              color: "navy",
                              backgroundColor: "rgba(255,0,0,0.1)",
                            },
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.2)",
                              color: "green",
                            },
                          }}
                        >
                          {submenuItem.label}
                        </Button>
                      </Box>
                    ))}
                  </motion.div>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: mobileOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
          style={{
            width: 250,
            height: "100%",
            backgroundColor: "#00715D",
            color: "white",
            padding: "10px",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ color: "white", ml: "auto", display: "block" }}
          >
            <CloseIcon />
          </IconButton>

          <List>
            {menuItems.map((menu, index) => (
              <Box key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={menu.path}
                    sx={{
                      color: "white",
                      "&.active": { color: "yellow" },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <ListItemText
                        primary={menu.label}
                        onClick={() =>
                          setOpenSubMenu(openSubMenu === index ? null : index)
                        }
                      />
                      {menu.submenu && (
                        <ExpandMoreIcon
                          onClick={() =>
                            setOpenSubMenu(openSubMenu === index ? null : index)
                          }
                        />
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>

                {/* Submenu for Mobile */}
                {menu.submenu && (
                  <Collapse
                    in={openSubMenu === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menu.submenu.map((submenuItem, subIndex) => (
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton
                            component={NavLink}
                            to={submenuItem.path}
                            sx={{
                              pl: 4,
                              color: "#BBDEFB",
                              "&.active": { color: "yellow" },
                              "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                              },
                            }}
                            onClick={toggleDrawer}
                          >
                            <ListItemText primary={submenuItem.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>
        </motion.div>
      </Drawer>
    </AppBar>
  );
};

export default Menubar;
