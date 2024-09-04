import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Header from "../header/Header";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        const response = await axios.get("http://localhost:4000/auth/event", {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        const data = response.data;

        setEventDetails(data.eventDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, []);

  const userString = localStorage.getItem('user');

  // Parse the JSON string to get the user object
  const user = userString ? JSON.parse(userString) : null;
  
  // Get the username from the user object
  const username = user ? user.username : null;

  const user1 = {
    profileImg: "./images/profile.jpg",
    name: "Hari Om",
    dob: "17/12/2003",
    email: "omhari1472@gmail.com",
    age: 20,
    gender: "Male",
    address: "NIE IT , boys hostel, Mysuru",
    mobileNo: "+91 7091758222",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: " 20px 0",
      }}
    >
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
  style={{
    display: "flex",
    width: "30%",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px",
    boxShadow:
      "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    marginBottom: "20px",
    minHeight: "100vh",
  }}
>
  <Avatar
    alt="Profile Image"
    src={user1.profileImg}
    style={{ width: "150px", height: "150px", marginBottom: "20px" }}
  />
  <h2 style={{ margin: "0", marginBottom: "10px" }}>{username}</h2>
  <p style={{ margin: "0", marginBottom: "5px" }}>Date of Birth: {user1.dob}</p>
  <p style={{ margin: "0", marginBottom: "5px" }}>Email: {user.email}</p>
  <p style={{ margin: "0", marginBottom: "5px" }}>Age: {user1.age}</p>
  <p style={{ margin: "0", marginBottom: "5px" }}>Gender: {user1.gender}</p>
  <p style={{ margin: "0", marginBottom: "5px" }}>Address: {user1.address}</p>
  <p style={{ margin: "0" }}>Mobile No: {user1.mobileNo}</p>
</div>


        <div style={{ flex: "1", padding: "20px" }}>
          {loading ? (
            <p>Loading event details...</p>
          ) : eventDetails.length > 0 ? (
            <div
              style={{
                width: "100%",
                padding: "1rem",
                bgcolor: "background.paper",
              }}
            >
              <h2 style={{ color: "#333", marginBottom: "10px" }}>
                Event Details:
              </h2>
              <List sx={{}}>
                {eventDetails.map((event, index) => {
                  const formattedDate = new Date(
                    event.eventDate
                  ).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  });

                  const formattedTime = new Date(
                    `2024-03-30 ${event.eventTime}`
                  ).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  });

                  return (
                    <ListItem
                      key={event.eventID}
                      disableGutters
                      secondaryAction={
                        <IconButton
                          aria-label="comment"
                          // style={{
                          //   borderRadius: "50%",
                          //   backgroundColor: "#9a2e2ec4",
                          //   marginRight: "15px",
                          //   boxShadow:
                          //     "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4)",
                          // }}
                        >
                          {/* <DeleteOutlineOutlinedIcon
                            style={{
                              boxShadow:
                                "0 4px 8px rgba(0, 0, 0, 0.2), 2px 0px 16px rgba(0, 0, 0, 0.4)",
                              borderRadius: "50%",
                              backgroundColor: "transparent",
                            }}
                          /> */}
                        </IconButton>
                      }
                      style={{
                        backgroundColor: index % 2 === 0 ? "#fff" : "#f2f2f2",
                        padding: "10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <ListItemText
                        primary={event.eventName}
                        secondary={`${event.eventType} - ${formattedDate} ${formattedTime}`}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          ) : (
            <p>No event details available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
