import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import usePrivateRoute from "../login/usePrivateRoute"; // Adjust the path as needed
// import { useNavigate } from 'react-router-dom';
import Header from "../header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import validator from "validator";

const defaultTheme = createTheme();

export default function EventGuest({ isAuthenticated }) {
  usePrivateRoute(isAuthenticated);
  console.log("Authent", localStorage.getItem("authToken"));

  // const navigate = useNavigate();
  const [guests, setGuests] = useState([]);

  const [formData, setFormData] = useState({
    guestname: "",
    guestemail: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validator.isEmail(formData.guestemail)) {
      // toast.error("Invalid email address");
      return;
    }

    try {
      const eventData = {
        guestName: formData.guestname,
        guestEmail: formData.guestemail,
      };

      const authToken = localStorage.getItem("authToken");

      const response = await axios.post(
        "http://localhost:4000/auth/guest",
        eventData,
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );
      console.log("Response from server:", response.data);

      const newGuest = response.data.newGuest;
      const updatedGuests = [...guests, newGuest];
      console.log("Updated guests:", updatedGuests);
      console.log("Updated guest:", response.data.newGuest);
      setGuests(updatedGuests);

      toast.success("Guest Added Successfully");

      // Handle the response as needed
      console.log("Response from server:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    // Make a GET request to fetch venue data using axios

    const authToken = localStorage.getItem("authToken");

    axios
      .get("http://localhost:4000/auth/guest", {
        headers: {
          Authorization: `${authToken}`,
        },
      })
      .then((response) => {
        // Update the state with the fetched venue data
        setGuests(response.data.guests);
      })
      .catch((error) => {
        console.error("Error fetching guests:", error);
      });
  }, []);

  // Example code where you call the delete function
  const handleDelete = async (eventGuestID) => {
    try {
      // Make a DELETE request to delete the guest
      const response = await axios.delete(
        `http://localhost:4000/auth/guest/${eventGuestID}`
      );
      console.log("Response after deleting:", response.data);

      // Update the state to remove the deleted guest
      toast.error("Guest Deleted successfully");
      const updatedGuests = guests.filter(
        (guest) => guest.eventGuestID !== eventGuestID
      );
      setGuests(updatedGuests);
    } catch (error) {
      console.error("Error deleting guest:", error);
      // Handle error
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
    zIndex: "1",
    minWidth: "70%",
  };

  usePrivateRoute(true);

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
        background: "trasparent",
        height: "100vh",
      }}
    >
      <ToastContainer />
      <Header />
      <div style={{ display: "flex" }}>
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              style={containerStyle}
              xs={12}
              sm={8}
              md={5}
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
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <PersonAddAlt1OutlinedIcon />
                </Avatar>

                <Typography
                  component="h1"
                  style={{ color: "black" }}
                  variant="h5"
                >
                  Add Guest
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
                    id="guestname"
                    label="Guest Name"
                    name="guestname"
                    autoComplete="off"
                    autoFocus
                    onChange={(e) =>
                      setFormData({ ...formData, guestname: e.target.value })
                    }
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="guestemail"
                    label="Guest Email"
                    name="guestemail"
                    autoComplete="off"
                    autoFocus
                    onBlur={() => {
                      // Validate email onBlur
                      if (
                        formData.guestemail &&
                        !validator.isEmail(formData.guestemail)
                      ) {
                        toast.error("Invalid email address");
                      }
                    }}
                    onChange={(e) =>
                      setFormData({ ...formData, guestemail: e.target.value })
                    }
                  />

                  {/* Display an error message for invalid email */}
                  {formData.email && !validator.isEmail(formData.email) && (
                    <Typography variant="body2" color="error">
                      Invalid email address
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // onClick={handleSubmit}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add Guest
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
        <List
          style={{
            background: "rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(3.5px)",
            WebkitBackdropFilter: "blur(3.5px)",
            border: "1px solid rgba(255, 255, 255, 0.69)",
            objectFit: "contain",
            color: "black",
            margin: "0 auto",
            marginRight: "18px",
            height: "83vh",
            zIndex: "1",
            minWidth: "40%",
            padding: "1rem",
          }}
        >
          <h1 style={{ fontSize: "2rem", color: "blueviolet" }}>Guest List</h1>
          {guests.length > 0 ? (
            guests.map((guest, index) => (
              <ListItem
                key={guest.eventGuestID}
                disableGutters
                style={{
                  background: index % 2 === 0 ? "#f3f3f3" : "transparent",
                }}
                secondaryAction={
                  <IconButton
                    aria-label="comment"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#9a2e2ec4",
                      boxShadow:
                        "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4)",
                    }}
                    onClick={() => handleDelete(guest.eventGuestID)}
                  >
                    <DeleteOutlineOutlinedIcon
                      style={{
                        boxShadow:
                          "0 4px 8px rgba(0, 0, 0, 0.2), 2px 0px 16px rgba(0, 0, 0, 0.4)",
                        borderRadius: "50%",
                        backgroundColor: "transparent",
                      }}
                    />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={guest.guestName}
                  secondary={guest.guestEmail}
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
              No guests added yet.
            </Typography>
          )}
        </List>
      </div>
    </div>
  );
}
