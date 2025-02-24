import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

const staffData = [
  { name: "Mr. Ram Narayan Mishra", designation: "Chairman" },
  { name: "Mr. Vinod Kumar Pandey", designation: "Secretary" },
  { name: "Mrs. Purwa Pandey", designation: "Member" },
  { name: "Mr. Sacchidanand Mishra", designation: "Member" },
  { name: "Dr. Suresh Singh", designation: "Member" },
  { name: "Mr. Rakesh Ahuja", designation: "Member" },
  { name: "Dr. Ajit Kumar", designation: "Member" },
  { name: "Mrs. Bhavya Sinha", designation: "Member" },
  { name: "Mrs. Jyoti Yadu", designation: "Member" },
  { name: "Mrs. Yogita Dhomne", designation: "Member" },
  { name: "Dr. S.G. Das", designation: "Member" },
  { name: "Mr. Vicky Arora", designation: "Member" },
  { name: "Mrs. Sharda Tripathi", designation: "Member" },
  { name: "Mr. Krishnakant Sahu", designation: "Member" },
];

const ManagementStaff = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: "#f4f4f4",
        borderRadius: 2,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  padding: 2,
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "#335c67",
                  minHeight: "230px",
                }}
              >
                <Avatar
                  src={staff.image}
                  alt={staff.name}
                  sx={{ width: 80, height: 80, margin: "0 auto 10px" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {staff.name}
                  </Typography>

                  <Typography variant="body1" fontWeight="bold" color="primary">
                    {staff.designation}
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
