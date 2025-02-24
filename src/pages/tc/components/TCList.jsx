
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { jsPDF } from "jspdf";


// Sample TC Data
const tcList = [
  { id: 1, name: "AAHIL AHMED", class: "1ST", issuedDate: "21/06/2024" },
  { id: 2, name: "AISHWARY LAXMI MISHRA", class: "6TH", issuedDate: "29/03/2024" },
  { id: 3, name: "AKSHAT SONI", class: "2ND", issuedDate: "16/05/2024" },
  { id: 4, name: "ARADHYA YADAV", class: "UKG", issuedDate: "30/04/2024" },
  { id: 5, name: "ARHAAN SHEIKH", class: "1ST", issuedDate: "04/04/2024" },
  { id: 6, name: "DIPALI SHARMA", class: "5TH", issuedDate: "28/03/2024" },
];

const TCList = () => {
  // Function to Download TC as PDF
  const downloadTC = async (tc) => {
    const doc = new jsPDF();
    const content = `
      SCHOOL NAME
      Address, City, State - Pincode | Contact: 123-456-7890

      Transfer Certificate
      ---------------------
      Student Name: ${tc.name}
      Class: ${tc.class}
      TC Issued Date: ${tc.issuedDate}
    `;

    doc.text(content, 10, 10);
    doc.save(`${tc.name}-TC.pdf`);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3 }}>
        Transfer Certificate List
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: "100%", overflowX: "auto" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976D2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>S. No.</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Student Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Class</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>TC Issued Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tcList.map((tc, index) => (
              <TableRow key={tc.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tc.name}</TableCell>
                <TableCell>{tc.class}</TableCell>
                <TableCell>{tc.issuedDate}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => downloadTC(tc)}>
                    Download PDF
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TCList;
