import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "./AdminHeader";

const defaultTheme = createTheme();

export default function AdminAddVenue() {
  const [newVenueData, setNewVenueData] = useState({
    venueName: "",
    capacity: "",
    address: "",
    contactInfo: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVenueData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    const emptyFields = Object.keys(newVenueData).filter(
      (key) => !newVenueData[key]
    );
    if (emptyFields.length > 0) {
      // Display error message if any field is empty
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await axios.post("http://localhost:4000/auth/venue", newVenueData);
      toast.success("Venue added successfully");
      // history.push("/admin/venues"); // Redirect to venue list page
    } catch (error) {
      console.error("Error adding venue:", error);
      toast.error("Error adding venue");
    }
  };

  const containerStyle = {
    background: "rgba(255, 255, 255, 0.18)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3.5px)",
    WebkitBackdropFilter: "blur(3.5px)",
    border: "1px solid rgba(255, 255, 255, 0.69)",
    objectFit: "contain",
    color: "white",
    margin: "0 auto",
    height: "83vh",
    zIndex: "1"
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(./images/3.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "100%",
        backgroundPosition: "center",
        overflow: "hidden",
        minWidth: "100%",
        background: "transparent",
        minHeight: "100vh"
      }}
    >
      <ToastContainer style={{ margin: "0 auto" }} />
      <AdminHeader />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            style={containerStyle}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <EventAvailableIcon />
              </Avatar>
              <Typography component="h1" style={{ color: "black" }} variant="h5">
                Create Your Venue
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="venueName"
                  label="Venue Name"
                  name="venueName"
                  autoComplete="off"
                  autoFocus
                  value={newVenueData.venueName}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="capacity"
                  type="number"
                  label="Capacity"
                  name="capacity"
                  autoComplete="off"
                  value={newVenueData.capacity}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="off"
                  value={newVenueData.address}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="contactInfo"
                  label="Contact Info"
                  name="contactInfo"
                  autoComplete="off"
                  value={newVenueData.contactInfo}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="off"
                  value={newVenueData.price}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Venue
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
