
import { Box, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const staffData = [
  { name: "MR. VINOD KUMAR PANDEY", qualification: "MSc. MA, B.Ed.", designation: "Principal", experience: "12 Yrs.", image: "/images/founder.jpg" },
  { name: "MRS. NISHA KAR", qualification: "M.A.B.Ed.", designation: "Vice Principal", experience: "16 Yrs.", image: "https://via.placeholder.com/150" },
  { name: "MR. JAINENDRA KUMAR NISHAD", qualification: "M.Com., B.Ed.", designation: "PGT", experience: "5 Yrs.", image: "https://via.placeholder.com/150" },
  { name: "MRS.MALTI MANIKPURI", qualification: "M.A., M.Phil, B.Ed", designation: "PGT", experience: "22 Yrs.", image: "https://via.placeholder.com/150" },
  { name: "MRS.VAISHALI SINGH PAWAR", qualification: "M.Sc.B.Ed", designation: "PGT", experience: "6 Yrs.", image: "https://via.placeholder.com/150" },
  { name: "MR. ANUJ KUMAR", qualification: "B.E., M.Sc., B.Ed", designation: "PGT", experience: "2 Yrs.", image: "https://via.placeholder.com/150" },
  { name: "MISS.RAUNAK SARJAL", qualification: "M.Sc, B.Ed", designation: "PGT", experience: "1 Yr.", image: "https://via.placeholder.com/150" },
  { name: "MISS.RAUNAK SARJAL", qualification: "M.Sc, B.Ed", designation: "PGT", experience: "1 Yr.", image: "https://via.placeholder.com/150" },
];

const ManagementStaff = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: "#f4f4f4", borderRadius:2 }}>
      <Grid container spacing={3} justifyContent="center">
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ textAlign: "center", padding: 2, borderRadius: 3, boxShadow: 3, backgroundColor:"#335c67", minHeight:"300px" }}>
                <Avatar src={staff.image} alt={staff.name} sx={{ width: 80, height: 80, margin: "0 auto 10px" }} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {staff.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {staff.qualification}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="primary">
                    {staff.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience: {staff.experience}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManagementStaff;
