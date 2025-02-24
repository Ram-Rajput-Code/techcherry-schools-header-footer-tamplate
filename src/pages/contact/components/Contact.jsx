
import { TextField, Button, Grid, Paper, Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    
        padding: 4,
      }}
    >
      <Grid container spacing={4} maxWidth="lg">
        {/* Left Side - Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 4,
              boxShadow: 5,
              borderRadius: 3,
              background: "linear-gradient(to right,rgb(17, 113, 203),rgb(48, 139, 135))",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              InputProps={{ style: { color: "#fff" } }}
              sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#fff" } } }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              InputProps={{ style: { color: "#fff" } }}
              sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#fff" } } }}
            />
            <TextField
              fullWidth
              label="Mobile"
              variant="outlined"
              margin="normal"
              InputProps={{ style: { color: "#fff" } }}
              sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#fff" } } }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, bgcolor: "#ff9800", "&:hover": { bgcolor: "#f57c00" } }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>

        {/* Right Side - Google Map */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              height: "100%",
              padding: 2,
              boxShadow: 5,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.1)", // Glass effect
              backdropFilter: "blur(10px)",
            }}
          >
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "10px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4482792950407!2d81.2915566743104!3d21.1743438827642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293c4647d7d7e3%3A0x1fe4ee9d90e66fd8!2sTechCherry%20%7C%20Software%20%26%20APP%20development%20company!5e0!3m2!1sen!2sin!4v1740373586245!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
