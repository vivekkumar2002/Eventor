// client/src/components/Vendor/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ selectedVendor }) => {
  const [eventDetails, setEventDetails] = useState({});

  const handleBooking = () => {
    // Add additional validation logic if needed
    const bookingData = {
      vendorId: selectedVendor.id,
      eventName: eventDetails.eventName,
      eventDate: eventDetails.eventDate
    };

    axios.post('http://localhost:3001/api/bookings', bookingData)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error booking vendor', error));
  };

  return (
    <div>
      <h3>Book {selectedVendor.name}</h3>
      <label>Event Name: <input type="text" onChange={(e) => setEventDetails({ ...eventDetails, eventName: e.target.value })} /></label>
      <label>Event Date: <input type="date" onChange={(e) => setEventDetails({ ...eventDetails, eventDate: e.target.value })} /></label>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingForm;
