// ContactUs.js
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
import Header from "../header/Header";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';import { toast, ToastContainer } from "react-toastify";
import validator from "validator";
import usePrivateRoute from "../login/usePrivateRoute";

const defaultTheme = createTheme();

export default function ContactUs({isAuthenticated}) {
  usePrivateRoute(isAuthenticated);

  const [formData, setFormData] = useState({
    userId: 1,
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for empty fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Check for a valid email
    if (!validator.isEmail(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:4000/auth/contact",
        formData,
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );

      // Handle the response as needed
      toast.success("Message sent successfully!");
      console.log("Response from server:", response.data);

      // Set the submitted state to true
      setSubmitted(true);
      setSubmitError(false); // Reset submitError state
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      toast.error("Error submitting message. Please try again.");
      setSubmitError(true);
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
      {" "}
      <ToastContainer />
      <Header style={{ zIndex: "1" }} />
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
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <ConnectWithoutContactIcon />
              </Avatar>
              {submitted || submitError ? (
                <Typography
                  component="h1"
                  style={{ color: "black" }}
                  variant="h5"
                >
                  {submitted
                    ?
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1 style={{fontSize:'large',marginBottom:'10px'}}>
                    Thank you <strong>{formData.name} </strong> for contacting us!
                    </h1>
                    <h2>
                    One of our representatives will be in touch with you soon.
                    </h2>
                    </div> 
                    : submitError
                    ? "Error submitting message. Please try again."
                    : "Contact Us Form"}
                </Typography>
              ) : (
                <>
                  <Typography
                    component="h1"
                    style={{ color: "black" }}
                    variant="h5"
                  >
                    Contact Us Form
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
                      id="name"
                      label="Your Name"
                      name="name"
                      autoComplete="off"
                      autoFocus
                      onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Your email"
                      name="email"
                      autoComplete="off"
                      autoFocus
                      onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    />
                    <TextField
                      margin="normal"
                      type="text"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      id="message"
                      label="Message"
                      name="message"
                      autoComplete="off"
                      autoFocus
                      onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Submit
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
