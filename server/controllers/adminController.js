import {
  addVenueAvailability,
  deleteVenue,
  getVenueAvailability,
  postVenues,
  updateVenue,
} from "../database/adminQueries.js";
import {pool} from '../database/db.js';

export async function addVenuesController(req, res) {
  const { venueName, capacity, address, contactInfo, price } = req.body;

  try {
    const result = await postVenues(
      venueName,
      capacity,
      address,
      contactInfo,
      price
    ); // Pass user email

    // Adjust the response based on your application's needs
    res.status(201).send({ message: "Venue Added successfully" });
  } catch (error) {
    console.error("Error adding guest:", error);
    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: "Internal Server Error" });
  }
}

export async function deleteVenueController(req, res) {
  const { venueID } = req.params;
  // console.log('Deleting guest with ID:', eventGuestID);

  try {
    // Call your delete function from the database
    await deleteVenue(venueID);

    res.status(200).send({ message: "Venue Deleted successfully" });
  } catch (error) {
    console.error("Error deleting guest:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}

export async function addVenueAvailabilityController(req, res) {
  const { venue_id, date, available } = req.body;

  try {
    // Call a function to update venue availability in the database
    await addVenueAvailability(venue_id, date, available);

    // Respond with a success message
    res.status(200).json({
      success: true,
      message: "Venue availability updated successfully",
    });
  } catch (error) {
    // Handle errors
    console.error("Error setting venue availability:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}

export async function getVenueAvailabilityController(req, res) {
  const { venueId } = req.params; // Assuming venueId and date are passed as URL parameters

  try {
    // Call the function to fetch venue availability
    const availability = await getVenueAvailability(venueId);

    // Respond with the venue availability data
    res.status(200).json({ success: true, availability });
  } catch (error) {
    // Handle errors
    console.error('Error fetching venue availability:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

export async function updateVenueController(req, res) {
  const { venueID } = req.params;
  const { venueName, capacity, address, contactInfo, price } = req.body;

  try {
    // Assuming you have a function named updateVenue in your database service
    // const updatedVenue = await updateVenue(venueID, { venueName, capacity, address, contactInfo, price });
    const updatedVenue = await updateVenue(
      venueID,
      venueName,
      capacity,
      address,
      contactInfo,
      price
    ); // Pass user email

    if (!updatedVenue) {
      return res.status(404).send({ error: "Venue not found" });
    }

    res.status(200).send({ message: "Venue updated successfully", updatedVenue });
  } catch (error) {
    console.error("Error updating venue:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}


export async function getMessage(req, res) {
  try {
    // Query to retrieve messages from the ContactFormSubmission table
    const messages = await pool.query('SELECT * FROM ContactFormSubmission');

    res.json(messages); // Send the messages as JSON response
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export async function getAllEventsWithUserDetailsController(req, res) {
  try {
    // Perform a join operation to retrieve all events along with user details
    const query = `
      SELECT events.*, users.username, users.email 
      FROM events 
      INNER JOIN users ON events.userID = users.userID;
    `;
    const eventsWithUserDetails = await pool.query(query);

    // Respond with all events along with user details
    res.status(200).json({eventsWithUserDetails });
  } catch (error) {
    // Handle errors
    console.error('Error fetching all events with user details:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
