import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import usePrivateRoute from "../login/usePrivateRoute";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
  
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!username || !email || !password) {
      toast.error('All fields are required');
      return;
    }
  
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return;
    }
  
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        username,
        email,
        password,
      });
  
      if (response.status === 201) {
        setIsAuthenticated(true);
        navigate('/home');
        toast.success('Sign up successful!');
      } else {
        console.error("Sign up unsuccessful:", response.data.error);
  
        if (response.data.error.includes("Duplicate entry")) {
          toast.error("User with the same email already exists.");
        } else {
          toast.error("Signup unsuccessful. Please try again.");
        }
      }
  
      // Handle the response as needed
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error during signup:', error);
  
      // Log the entire response object for debugging purposes
      console.log('Response object:', error.response);
  
      if (error.response && error.response.data && error.response.data.error.includes("Duplicate entry")) {
        toast.error('User with the same email already exists.');
      } else {
        toast.error('Signup unsuccessful. Please try again.');
      }
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
    margin: "auto",
    height: "70vh",
  };

  usePrivateRoute(true);

  return (
    <div
      style={{
        backgroundImage: `url(./images/background.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        maxWidth: "100%",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
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
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="off"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                  <Grid item>
                  <Link component={RouterLink} to="/login" style={{ fontSize: '14px' }}>
                  {"Already have an account? Log In"}
</Link>

                   
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
