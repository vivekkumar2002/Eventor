import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Header from "../header/Header";
import axios from "axios";

const steps = ["Billing address", "Payment Details", "Review your Bill"];

// Function to get the billing address form data
const getAddressFormData = () => {
  // Retrieve the form data from the address form fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const country = document.getElementById("country").value;

  // Return an object containing the form data
  return {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    country,
  };
};

// Function to get the payment method form data
const getPaymentMethodData = () => {
  // Retrieve the form data from the payment method form fields
  const nameOnCard = document.getElementById("cardName").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const expiryDate = document.getElementById("expDate").value;
  const cvv = document.getElementById("cvv").value;

  // Return an object containing the form data
  return {
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  };
};

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    setActiveStep(activeStep + 1);

    // Insert billing address when moving to the next step for the first time
    if (activeStep === 0) {
      const addressData = getAddressFormData();
      console.log("Billing Address:", addressData);

      try {
        const authToken = localStorage.getItem("authToken");

        const response = await axios.post(
          "http://localhost:4000/auth/billing",
          addressData,
          {
            headers: {
              Authorization: `${authToken}`, // Include the authorization token in the request headers
            },
          }
        );
        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error inserting billing address:", error);
        // Handle error appropriately
      }
    }

    // Insert payment method when moving to the next step for the second time
    if (activeStep === 1) {
      const paymentData = getPaymentMethodData();
      console.log("Payment Method:", paymentData);
      try {
        const authToken = localStorage.getItem("authToken");
        const response = await axios.post(
          "http://localhost:4000/auth/payment",
          paymentData,
          {
            headers: {
              Authorization: `${authToken}`, // Include the authorization token in the request headers
            },
          }
        );
        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error inserting payment method:", error);
        // Handle error appropriately
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
        background: "trasparent",
        minHeight: "100vh",
      }}
    >
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your Booking! 
              </Typography>
              <Typography variant="subtitle1">
                Your Booking is confirmed. We have emailed your order
                confirmation.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <AddressForm />
              ) : activeStep === 1 ? (
                <PaymentForm />
              ) : (
                <Review />
              )}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
    </div>
  );
}
