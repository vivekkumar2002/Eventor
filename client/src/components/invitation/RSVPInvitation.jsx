import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../header/Header";

const RSVPInvitation = ({
  guestName,
  eventName,
  eventDate,
  eventTime,
  eventVenue,
  rsvpLink,
}) => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

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
        const updatedGuests = response.data.guests.map((guest) => ({
          ...guest,
          emailStatus: "pending", // Add emailStatus to track the status of the email
        }));
        setGuests(updatedGuests);
      })
      .catch((error) => {
        console.error("Error fetching guests:", error);
      });
  }, []);

  const handleRSVP = async () => {
    try {
      setLoading(true);

      // Make an API call to your server to send emails
      await axios.post("http://localhost:4000/auth/rsvp", { guests });

      // Update the status to "success" once emails are sent successfully
      const updatedGuests = guests.map((guest) => ({
        ...guest,
        emailStatus: "success",
      }));
      setGuests(updatedGuests);

      // Add any additional logic or feedback as needed
      console.log("Emails sent successfully!");
    } catch (error) {
      console.error("Error sending emails:", error);
    } finally {
      setLoading(false);
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
    color: "black",
    margin: "0 auto",
    height: "83vh",
    zIndex: "1",
    minWidth: "40%",
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
      height: "100vh",
    }}
  >  

    <Header/>

    <div style={containerStyle} className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md mt-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">RSVP Invitation</h1>
      </div>

      <div className="mb-6">
        <p>Dear {guestName},</p>
        <p>You are invited to our special event:</p>
        <ul className="list-disc ml-8">
          <li >
            <strong>Event Name:</strong>{eventName}
          </li>
          <li>
            <strong>Date:</strong> {eventDate}
          </li>
          <li>
            <strong>Time:</strong> {eventTime}
          </li>
          <li>
            <strong>Venue:</strong> {eventVenue}
          </li>
        </ul>
        <p>
          Please let us know if you can attend by clicking the RSVP button
          below:
        </p>
      </div>

      <button
        className="block w-full bg-blue-500 text-white py-2 px-4 rounded text-center"
        onClick={handleRSVP}
        rel="noopener noreferrer"
        disabled={loading}
      >
        {loading ? (
          <div>
            Sending...
            <CircularProgress size={20} style={{ color: "white" }} />
          </div>
        ) : (
          "RSVP Now"
        )}
      </button>

      <List
      style={{background:'transparent'}}
        sx={{
          width: "100%",
          maxWidth: 500,
          padding: "1rem",
          bgcolor: "background.paper",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "blueviolet" }}>Guest List</h1>
        {guests.map((guest) => (
          <ListItem
            key={guest.eventGuestID}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                {guest.emailStatus === "pending" ? (
                  <HourglassEmptyIcon color="primary" />
                ) : (
                  <CheckCircleOutlineIcon color="success" />
                )}
              </IconButton>
            }
          >
             
            <ListItemText
              primary={guest.guestName}
              secondary={guest.guestEmail}
            />
          </ListItem>
        ))}
      </List>
    </div>
    </div>
  );
};

export default RSVPInvitation;
