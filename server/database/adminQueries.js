import {pool} from './db.js';

export async function postVenues(venueName, capacity,address,contactInfo,price) {
    try {

      // Insert event data with the associated user ID
      const [result] = await pool.query(`
        INSERT INTO venues (venueName, capacity,address,contactInfo,price)
        VALUES (?, ?, ?,?,?)
      `, [ venueName, capacity,address,contactInfo,price ]);

      // Optionally, you can get the inserted event's ID if needed
      // const eventId = result.insertId;

      return result;
    } catch (error) {
      throw error;
    }
}

export async function deleteVenue(venueID) {
    try {
      // Use a SQL DELETE query to delete the guest by its ID
      const query = 'DELETE FROM venues WHERE venueID = ?';
      const [result] = await pool.query(query, [venueID]);
  
      return result; // You can adjust the return value based on your needs
    } catch (error) {
      console.error('Error deleting event guest:', error);
      throw error; // Propagate the error to the caller
    }
  }

  export async function addVenueAvailability(venue_id, date, available) {
    try {
        // Execute SQL query to update venue availability
        const [result] = await pool.query(`
        INSERT INTO venue_availability (venue_id, date, available)
        VALUES (?, ?, ?)
      `, [ venue_id, date, available]); 
        return result; 
    } catch (error) {
        // Handle database errors
        throw new Error(`Error updating venue availability: ${error.message}`);
    }
}

export async function getVenueAvailability(venueId) {
  try {
    // Execute SQL query to fetch venue availability
    const [rows] = await pool.query(
      'SELECT * FROM venue_availability WHERE venue_id = ?',
      [venueId]
    );

    // Return the fetched availability data
    return rows;
  } catch (error) {
    // Handle database errors
    throw new Error(`Error fetching venue availability: ${error.message}`);
  }
}

export async function updateVenue(venueID, venueName, capacity, address, contactInfo, price) {
  try {
    // Update venue data based on the provided venueID
    const result = await pool.query(`
      UPDATE venues 
      SET venueName = ?, capacity = ?, address = ?, contactInfo = ?, price = ?
      WHERE venueID = ?
    `, [venueName, capacity, address, contactInfo, price, venueID]);

    return result;
  } catch (error) {
    throw error;
  }
}
