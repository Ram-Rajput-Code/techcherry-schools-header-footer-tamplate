
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Grid,
} from "@mui/material";

// Sample Fees Data
const feesData = [
  { class: "Nursery", admission: 10000, tuitionFee: 26000, april: 9100, aug: 9100, nov: 3900, jan: 3900 },
  { class: "LKG", admission: 10000, tuitionFee: 26000, april: 9100, aug: 9100, nov: 3900, jan: 3900 },
  { class: "UKG", admission: 10000, tuitionFee: 26000, april: 9100, aug: 9100, nov: 3900, jan: 3900 },
  { class: "1st", admission: 10000, tuitionFee: 31000, april: 10850, aug: 10850, nov: 4650, jan: 4650 },
  { class: "2nd", admission: 10000, tuitionFee: 31000, april: 10850, aug: 10850, nov: 4650, jan: 4650 },
  { class: "3rd", admission: 10000, tuitionFee: 31000, april: 10850, aug: 10850, nov: 4650, jan: 4650 },
  { class: "4th", admission: 10000, tuitionFee: 31000, april: 10850, aug: 10850, nov: 4650, jan: 4650 },
  { class: "5th", admission: 10000, tuitionFee: 31000, april: 10850, aug: 10850, nov: 4650, jan: 4650 },
  { class: "6th", admission: 15000, tuitionFee: 36000, april: 12600, aug: 12600, nov: 5400, jan: 5400 },
  { class: "7th", admission: 15000, tuitionFee: 36000, april: 12600, aug: 12600, nov: 5400, jan: 5400 },
  { class: "8th", admission: 15000, tuitionFee: 36000, april: 12600, aug: 12600, nov: 5400, jan: 5400 },
  { class: "9th", admission: 20000, tuitionFee: 41000, april: 14350, aug: 14350, nov: 6150, jan: 6150 },
  { class: "10th", admission: 20000, tuitionFee: 41000, april: 14350, aug: 14350, nov: 6150, jan: 6150 },
  { class: "11th", admission: 20000, tuitionFee: 46000, april: 16100, aug: 16100, nov: 6900, jan: 6900 },
  { class: "12th", admission: 20000, tuitionFee: 46000, april: 16100, aug: 16100, nov: 6900, jan: 6900 },
];

const FeesStructure = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "#1976D2",
          
        }}
      >
        School Fees Structure (Session 2024-25)
      </Typography>

      {/* Responsive Table Container */}
      <TableContainer component={Paper} sx={{ borderRadius: 2, overflowX: "auto", backgroundColor:"#415a77" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976D2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Class</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Admission Fee</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Tuition Fee (Yearly)</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>10th April</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>10th Aug</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>10th Nov</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>10th Jan</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {feesData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.class}</TableCell>
                <TableCell>₹{row.admission.toLocaleString()}</TableCell>
                <TableCell>₹{row.tuitionFee.toLocaleString()}</TableCell>
                <TableCell>₹{row.april.toLocaleString()}</TableCell>
                <TableCell>₹{row.aug.toLocaleString()}</TableCell>
                <TableCell>₹{row.nov.toLocaleString()}</TableCell>
                <TableCell>₹{row.jan.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Important Notes */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: "white", borderRadius: 2, boxShadow: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#D32F2F",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Important Notes:
        </Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Typography>🔹 <strong>Total Fees</strong> will be realized in <strong>four installments</strong>.</Typography>
            <Typography>🔹 <strong>No re-admission</strong> is required for students.</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>🔹 <strong>5% concession</strong> if full fees paid in April.</Typography>
            <Typography>🔹 <strong>Sibling Discount</strong>: Last installment waived for younger one.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FeesStructure;
