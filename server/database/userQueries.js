import {pool} from './db.js';
// import bcrypt from 'bcrypt';

export async function registerUser(username, hashedPassword, email, role) {
  try {
    const [result] = await pool.query(
      'INSERT INTO Users (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, 'user']
    );

    // Optionally, you can get the inserted user's ID if needed
    // const userId = result.insertId;

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getUserByEmail(email) {
  try {
    const [result] = await pool.query(`
      SELECT * FROM Users WHERE email = ?
    `, [email]);

    // Resolve with the user if found, or null if not found
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    throw error;
  }
}


export async function loginUser(email) {
  try {
    const [userRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
    return userRows.length > 0 ? userRows[0] : null;
  } catch (error) {
    throw error;
  }
}


export async function getVenues() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM venues');
    return rows;
  } catch (error) {
    throw error;
  }
}

export async function getVenueById(venueID) {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM venues WHERE venueID = ?', [venueID]);
    // Check if a venue with the specified ID was found
    if (rows.length === 0) {
      return null; // Return null if venue not found
    }
    return rows[0]; // Return the first row (should be the only row)
  } catch (error) {
    throw error;
  }
}


export async function getEventGuest(userID) {

  const query = `
  SELECT e.*, u.*
  FROM eventGuests e
  JOIN users u ON e.userid = u.userid
  WHERE u.userid = ?
`;

  try {
    const [result] = await pool.query(query, [userID]); 
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteEventGuest(eventGuestID) {
  try {
    // Use a SQL DELETE query to delete the guest by its ID
    const query = 'DELETE FROM EventGuests WHERE eventGuestID = ?';
    const [result] = await pool.query(query, [eventGuestID]);

    return result; // You can adjust the return value based on your needs
  } catch (error) {
    console.error('Error deleting event guest:', error);
    throw error; // Propagate the error to the caller
  }
}


