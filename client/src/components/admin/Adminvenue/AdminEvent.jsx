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
  tableCellClasses,
} from "@mui/material";
import AdminHeader from "./AdminHeader";

// Function to format date to YYYY-MM-DD format
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

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

const AdminEvent = () => {
  const [eventsWithUserDetails, setEventsWithUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/userevent")
      .then((response) => {
        // Format the event dates and add event status
        const currentDate = new Date();
        const formattedEvents = response.data.eventsWithUserDetails[0].map(event => ({
          ...event,
          eventDate: formatDate(event.eventDate),
          eventStatus: new Date(event.eventDate) < currentDate ? "Completed" : "Upcoming",
        }));
        setEventsWithUserDetails(formattedEvents);
        console.log("Fetched events with user details:", formattedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events with user details:", error);
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
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Event Type</StyledTableCell>
              <StyledTableCell align="right">Event Date</StyledTableCell>
              <StyledTableCell align="right">Event Time</StyledTableCell>
              <StyledTableCell align="right">Event Status</StyledTableCell> {/* New column for event status */}
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsWithUserDetails.map((event, index) => (
              <StyledTableRow key={event.eventID}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{event.username}</StyledTableCell>
                <StyledTableCell align="right">
                  <a href={`mailto:${event.email}`}>{event.email}</a>
                </StyledTableCell>
                <StyledTableCell align="right">{event.eventType}</StyledTableCell>
                <StyledTableCell align="right">{event.eventDate}</StyledTableCell>
                <StyledTableCell align="right">{event.eventTime}</StyledTableCell>
                <StyledTableCell align="right">{event.eventStatus}</StyledTableCell> {/* Display event status */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminEvent;
