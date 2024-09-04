import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import AdminHeader from "./AdminHeader";

// Import tableCellClasses
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4a5b4a",
    color: theme.palette.common.white,
    fontSize: "large",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Message = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/messages")
      .then((response) => {
        setMessages(response.data[0]);
        console.log("Fetched messages:", response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <AdminHeader />
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right" style={{ width: "50%" }}>
                Message
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message, index) => (
              <StyledTableRow key={message.submissionId}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>{message.name}</StyledTableCell>
                <StyledTableCell align="right">
                  <a href={`mailto:${message.email}`}>{message.email}</a>
                </StyledTableCell>
                <StyledTableCell align="right">{message.message}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Message;
