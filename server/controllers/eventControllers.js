import { createEvent, getAllEvents, insertBillingAddress, insertPaymentMethod, postEventGuest, submitContact } from '../database/eventQueries.js';
import { deleteEventGuest, getEventGuest, getVenueById, getVenues } from '../database/userQueries.js';// Replace with your actual venue module

export async function getVenuesController(req, res) {
  try {
    // Call the getVenues function to fetch venue data
    const venues = await getVenues();

    // Adjust the response based on your application's needs
    res.status(200).send({ venues });
  } catch (error) {
    console.error('Error fetching venues:', error);

    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export async function getVenueByIdController(req, res) {
  try {
    // Extract the venue ID from the request parameters
    const { venueID } = req.params;

    // Call the getVenueById function to fetch venue data by ID
    const venue = await getVenueById(venueID);

    // Check if the venue exists
    if (!venue) {
      return res.status(404).send({ error: 'Venue not found' });
    }

    // Adjust the response based on your application's needs
    res.status(200).send({ venue });
  } catch (error) {
    console.error('Error fetching venue by ID:', error);

    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


// eventsController.js
export async function createEventController(req, res) {
    const { eventName, eventType, eventDate, eventTime, venueID } = req.body;
    const userID = req.user.id; 
    // console.log("Creating user Id",req.user.userID);

    try {
      const result = await createEvent(eventName, eventType, eventDate, eventTime, venueID, req.user.email); // Pass user email
      
      // Adjust the response based on your application's needs
      res.status(201).send({ message: 'Event Created successfully', eventId: result.insertId  });
    } catch (error) {
      console.error('Error creating event:', error);
      // Adjust the response based on your error handling strategy
      res.status(500).send({ error: 'Internal Server Error' });
    }
}

export async function contactDetailController(req, res) {
    const { name, email, message } = req.body;
    const userID = req.user.id; 
    // console.log("Creating user Id",req.user.userID);

    try {
      const result = await submitContact( userID, name , email, message); // Pass user email
      
      // Adjust the response based on your application's needs
      res.status(201).send({ message: 'Contact detail submitted successfully', submissionId: result.insertId  });
    } catch (error) {
      console.error('Error creating event:', error);
      // Adjust the response based on your error handling strategy
      res.status(500).send({ error: 'Internal Server Error' });
    }
}

export async function getEventController(req, res) {
  const userID = req.user.userID
  ; 
  // console.log("Creating user Id",req.user.userID);


  try {
    // Fetch event details from the data access layer
    const eventDetails = await getAllEvents(userID);

    if (!eventDetails) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Adjust the response based on your application's needs
    res.status(200).json({ eventDetails });
  } catch (error) {
    console.error('Error fetching event details:', error);
    // Adjust the response based on your error handling strategy
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// export async function getEventController(req, res) {
//   try {
//     // Fetch all events from the data access layer
//     const allEvents = await getAllEvents();

//     // Adjust the response based on your application's needs
//     res.status(200).json({ allEvents });
//   } catch (error) {
//     console.error('Error fetching all events:', error);
//     // Adjust the response based on your error handling strategy
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// Add a new function to get all events from the database



export async function postEventGuestController(req, res) {
  const { guestName, guestEmail } = req.body;
  const userID = req.user.userID; 

  try {
    const result = await postEventGuest(userID, guestName, guestEmail); // Pass user email

    // Assuming postEventGuest returns the newly created guest
    const newGuest = {
      eventGuestID: result.insertId,
      guestName,
      guestEmail,
      // Include any other relevant properties from the result
  };

    // Adjust the response based on your application's needs
    res.status(201).send({ message: 'Guest Added successfully', newGuest });
  } catch (error) {
    console.error('Error adding guest:', error);
    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


// export async function getEventGuestController(req, res) {
//     const { guestName, guestEmail} = req.body;
//     const userID = req.user.id; 

//     try {
//       const result = await postEventGuest(req.user.email,guestName, guestEmail); // Pass user email
      
//       // Adjust the response based on your application's needs
//       res.status(201).send({ message: 'Guest Added successfully', eventGuestID: result.insertId  });
//     } catch (error) {
//       console.error('Error creating event:', error);
//       // Adjust the response based on your error handling strategy
//       res.status(500).send({ error: 'Internal Server Error' });
//     }
// }

export async function getEventGuestController(req, res) {
  try {
    // Call the getVenues function to fetch venue data
    const userID = req.user.userID; 

    const guests = await getEventGuest(userID);

    // Adjust the response based on your application's needs
    res.status(200).send({ guests });
  } catch (error) {
    console.error('Error fetching venues:', error);

    // Adjust the response based on your error handling strategy
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

// export async function deleteEventGuestController(req, res) {
//   try {
//     const { guestId } = req.params; // Assuming guestId is passed in the URL parameters

//     // Call the deleteEventGuest function to delete the guest
//     const result = await deleteEventGuest(guestId);

//     // Adjust the response based on your application's needs
//     if (result.affectedRows > 0) {
//       res.status(200).send({ message: 'Guest deleted successfully' });
//     } else {
//       res.status(404).send({ error: 'Guest not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting guest:', error);

//     // Adjust the response based on your error handling strategy
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// }


export async function deleteEventGuestController(req, res) {
  const { eventGuestID } = req.params;
  // console.log('Deleting guest with ID:', eventGuestID);

  try {
    // Call your delete function from the database
    await deleteEventGuest(eventGuestID);

    res.status(200).send({ message: 'Guest Deleted successfully' });
  } catch (error) {
    console.error('Error deleting guest:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}


// Import any required modules and functions

// Controller function for inserting billing address
export async function insertBillingAddressController(req, res) {
  const userID = req.user.userID; 
  console.log("userid",userID);
  const { firstName, lastName, address1, address2, city, state, zip, country } = req.body;

  try {
    // Call the function to insert the billing address into the database
    const result = await insertBillingAddress(firstName, lastName, address1, address2, city, state, zip, country, userID);

    // Respond with success message or inserted data
    res.status(200).json({ message: 'Billing address inserted successfully', data: result });
  } catch (error) {
    // Handle errors
    console.error('Error inserting billing address:', error);
    res.status(500).json({ message: 'Error inserting billing address', error: error.message });
  }
}

// Controller function for inserting payment method
export async function insertPaymentMethodController(req, res) {
  const userID = req.user.userID; 
  const { nameOnCard, cardNumber, expiryDate, cvv } = req.body;

  try {
    // Call the function to insert the payment method into the database
    const result = await insertPaymentMethod(nameOnCard, cardNumber, expiryDate, cvv, userID);

    // Respond with success message or inserted data
    res.status(200).json({ message: 'Payment method inserted successfully', data: result });
  } catch (error) {
    // Handle errors
    console.error('Error inserting payment method:', error);
    res.status(500).json({ message: 'Error inserting payment method', error: error.message });
  }
}
