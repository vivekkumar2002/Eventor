import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, CardActionArea, CardActions, Modal } from "@mui/material";
import Header from "../header/Header";
import usePrivateRoute from "../login/usePrivateRoute"; // Adjust the path as needed

export default function Venue({ isAuthenticated }) {
  usePrivateRoute(isAuthenticated);
  const navigate = useNavigate();

  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [startDate, setStartDate] = useState(new Date()); // Set initial date to today
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/venue")
      .then((response) => {
        setVenues(response.data.venues);
        setFilteredVenues(response.data.venues); // Initially set filtered venues to all venues
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []);


  
  
  useEffect(() => {
    if (selectedVenue) {
      axios
        .get(`http://localhost:4000/auth/venue/${selectedVenue.venueID}/availability`)
        .then((response) => {
          const formattedDates = response.data.availability.map(
            (item) => new Date(item.date)
          );
          setExcludedDates(formattedDates);
          console.log("Excluded Dates:", formattedDates); // Log excluded dates
        })
        .catch((error) => {
          console.error("Error fetching venue availability:", error);
        });
    }
  }, [selectedVenue]);
  

  useEffect(() => {
    filterVenues(); // Update filtered venues whenever search query changes
  }, [searchQuery, locationFilter, priceFilter]);

  const filterVenues = () => {
    let filtered = venues.filter((venue) =>
      venue.venueName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (locationFilter) {
      filtered = filtered.filter(
        (venue) =>
          venue.address.toLowerCase().indexOf(locationFilter.toLowerCase()) !==
          -1
      );
    }

    if (priceFilter) {
      filtered = filtered.filter(
        (venue) => venue.price <= parseInt(priceFilter)
      );
    }

    setFilteredVenues(filtered);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleCardClick = (venue) => {
    setSelectedVenue(venue);
    console.log("Selected Venue ID:", venue.venueID); // Log selected venue ID
    setIsModalOpen(true);
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          variant="outlined"
          style={{ marginRight: "1rem" }}
        />
        <TextField
          label="Location"
          value={locationFilter}
          onChange={handleLocationFilterChange}
          variant="outlined"
          style={{ marginRight: "1rem" }}
        />
        <TextField
          label="Max Price"
          value={priceFilter}
          onChange={handlePriceFilterChange}
          variant="outlined"
          style={{ width: "120px" }}
        />
      </div>
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Add this line to center content vertically
  }}
>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent:'space-around',
      padding: "1rem",
    }}
  >
    {filteredVenues.map((venue) => (
      <Card
        key={venue.venueID}
        style={{ margin: "1rem", width: "300px", cursor: "pointer" }}
        sx={{ maxWidth: 345 }}
        onClick={() => handleCardClick(venue)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="100%"
            image={`./venueimg/${venue.venueID}.jpg`}
            alt={venue.venueName}
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {venue.venueName}
            </Typography>
            <Typography variant="body2" component="div">
              Capacity: {venue.capacity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: {venue.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contact Details: {venue.contactInfo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {venue.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More...
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
</div>

      {/* Venue Details Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="venue-modal-title"
        aria-describedby="venue-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "80%",
            maxHeight: "80%",
            overflow: "auto",
          }}
        >
          {selectedVenue && (
            <>
              <Typography variant="h5" id="venue-modal-title" gutterBottom>
                {selectedVenue.venueName}
              </Typography>
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={`./venueimg/${selectedVenue.venueID}.jpg`}
                alt={selectedVenue.venueName}
                style={{ objectFit: "cover", marginBottom: "1rem" }}
              />
              <Typography variant="body1" id="venue-modal-description" paragraph>
                Capacity: {selectedVenue.capacity}
              </Typography>
              <Typography variant="body1" id="venue-modal-description" paragraph>
                Address: {selectedVenue.address}
              </Typography>
              <Typography variant="body1" id="venue-modal-description" paragraph>
                Contact Details: {selectedVenue.contactInfo}
              </Typography>
              <Typography variant="body1" id="venue-modal-description" paragraph>
                Price: {selectedVenue.price}
              </Typography>
              <Typography variant="body1" id="venue-modal-description" paragraph>
                Availability Calendar
              </Typography>
              <DatePicker
                selected={startDate}
                id="eventdate"
                label="eventdate"
                width="100%"
                name="eventdate"
                minDate={new Date()}
                maxDate={addDays(new Date(), 90)}
                excludeDates={excludedDates}
                onChange={(date) => setStartDate(date)}
                inline
                readOnly
              />
              <Button
                onClick={handleCloseModal}
                style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                color="primary"
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}
                onClick={() => {
                  navigate("/event");
                }}
              >
                Book Now
              </Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
