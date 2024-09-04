import axios from 'axios';

// Function to insert billing address
export const insertBillingAddress = async (billingAddressData, authToken) => {
  try {
    const authToken = localStorage.getItem("authToken");

    // Make a POST request to your backend API endpoint for inserting billing addresses
    const response = await axios.post('http://localhost:4000/auth/billing', billingAddressData, {
      headers: {
        Authorization: `${authToken}`, // Include the authorization token in the request headers
      },
    });
    return response.data; // Return the response data if needed
  } catch (error) {
    throw new Error('Error inserting billing address: ' + error.message);
  }
};

// Function to insert payment method
export const insertPaymentMethod = async (paymentMethodData, authToken) => {
  try {
    const authToken = localStorage.getItem("authToken");
    // Make a POST request to your backend API endpoint for inserting payment methods
    const response = await axios.post('http://localhost:4000/auth/payment', paymentMethodData, {
      headers: {
        Authorization: `${authToken}`, // Include the authorization token in the request headers
      },
    });
    return response.data; // Return the response data if needed
  } catch (error) {
    throw new Error('Error inserting payment method: ' + error.message);
  }
};
