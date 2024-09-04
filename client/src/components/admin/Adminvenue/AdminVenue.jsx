import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableBody,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import AdminHeader from "./AdminHeader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4a5b4a',
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

const AdminVenuePage = () => {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null); // To store the venue being edited
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // Fetch venue data from the backend when the component mounts
    axios
      .get("http://localhost:4000/auth/venue")
      .then((response) => {
        setVenues(response.data.venues); // Assuming the response data is an array of venues
      })
      .catch((error) => {
        console.error("Error fetching venue data:", error);
      });
  }, []);

  // Function to handle edit button click
  const handleEditClick = (venue) => {
    setSelectedVenue(venue);
    console.log("Venue selected", venue);
    setShowEditModal(true);
  };

  // Function to handle delete button click
  const handleDeleteClick = (venue) => {
    setSelectedVenue(venue);
    setShowDeleteModal(true);
  };

  // Function to handle saving edits
  // Function to handle saving edits
  const handleSaveEdits = () => {
    const updatedVenue = {
      ...selectedVenue,
      venueName: document.getElementById("venueName").value,
      capacity: document.getElementById("capacity").value,
      address: document.getElementById("address").value,
      contactInfo: document.getElementById("contactInfo").value,
      price: document.getElementById("price").value,
    };

    axios
      .put(
        `http://localhost:4000/auth/venue/${selectedVenue.venueID}`,
        updatedVenue
      )
      .then(() => {
        setVenues((prevVenues) =>
          prevVenues.map((venue) =>
            venue.venueID === selectedVenue.venueID ? updatedVenue : venue
          )
        );
        setShowEditModal(false);
        toast.success("Venue updated successfully");
      })
      .catch((error) => {
        console.error("Error saving edits:", error);
        toast.error("Error updating venue");
      });
  };

  // Function to handle deleting a venue
  const handleDeleteVenue = () => {
    axios
      .delete(`http://localhost:4000/auth/venue/${selectedVenue.venueID}`)
      .then(() => {
        setVenues((prevVenues) =>
          prevVenues.filter((venue) => venue.venueID !== selectedVenue.venueID)
        );
        setShowDeleteModal(false);
        toast.success("Venue deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting venue:", error);
        toast.error("Error deleting venue");
      });
  };

  return (
    <div>
      <ToastContainer position="" />
      <AdminHeader />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>Serial No.</StyledTableCell>
              <StyledTableCell align="right">Venue Name</StyledTableCell>
              <StyledTableCell align="right">Capacity</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Contact Info</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {venues.map((venue, index) => (
    <StyledTableRow key={venue.id}>
      <StyledTableCell component="th" scope="row">
        {index + 1}
      </StyledTableCell>
      <StyledTableCell align="right">
        {venue.venueName}
      </StyledTableCell>
      <StyledTableCell align="right">
        {venue.capacity}
      </StyledTableCell>
      <StyledTableCell align="right">
        {venue.address}
      </StyledTableCell>
      <StyledTableCell align="right">
        {venue.contactInfo}
      </StyledTableCell>
      <StyledTableCell align="right">
        {venue.price}
      </StyledTableCell>
      <StyledTableCell align="right">
        <Button
          style={{ marginRight: "5px" }}
          variant="contained"
          color="success"
          onClick={() => handleEditClick(venue)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteClick(venue)}
        >
          Delete
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>

      {/* Edit Modal */}
      {showEditModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "80%",
              maxWidth: "600px",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Edit Venue
            </h3>
            <div style={{ marginBottom: "1rem" }}>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="venueName"
                  label="Venue Name"
                  name="venueName"
                  autoComplete="off"
                  autoFocus
                  // value={newVenueData.venueName}
                  defaultValue={selectedVenue && selectedVenue.venueName}
                  // onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Capacity"
                  type="number"
                  id="capacity"
                  name="capacity"
                  autoComplete="off"
                  autoFocus
                  // value={newVenueData.venueName}
                  defaultValue={selectedVenue && selectedVenue.capacity}
                  // onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Capacity"
                  type="text"
                  id="address"
                  name="address"
                  defaultValue={selectedVenue && selectedVenue.address}
                  autoComplete="off"
                  autoFocus
                  // value={newVenueData.venueName}
                  // onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Venue Name"
                  type="contact"
                  id="contactInfo"
                  name="contactInfo"
                  defaultValue={selectedVenue && selectedVenue.contactInfo}
                  autoComplete="off"
                  autoFocus
                  // value={newVenueData.venueName}
                  // onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Price"
                  type="text"
                  id="price"
                  name="price"
                  defaultValue={selectedVenue && selectedVenue.price}
                  autoComplete="off"
                  autoFocus
                  // value={newVenueData.venueName}
                  // onChange={handleChange}
                />
              </Box>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowEditModal(false)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                Close
              </button>
              <button
                onClick={handleSaveEdits}
                style={{
                  backgroundColor: "#27ae60",
                  color: "white",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "50%",
              maxWidth: "400px",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Delete Venue
            </h3>
            <p>
              Are you sure you want to delete the venue "
              {selectedVenue && selectedVenue.venueName}"?
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowDeleteModal(false)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                Close
              </button>
              <button
                onClick={handleDeleteVenue}
                style={{
                  backgroundColor: "#27ae60",
                  color: "white",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVenuePage;
