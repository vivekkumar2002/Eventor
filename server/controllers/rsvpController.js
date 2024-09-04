// controllers/rsvpController.js
import { sendInvitations } from '../database/sendInvitation.js';

export const sendInvitationsController = async (req, res) => {
  try {
    console.log('Before sending invitations');

    // Extract the guests data from the request body
    const { guests } = req.body;

    // Additional logic related to handling RSVPs can be added here if needed

    // Sending invitations with the received guests data
    const response = await sendInvitations(guests);

    // Respond with a success message or any other appropriate response
    res.status(200).json({ message: 'Invitations sent successfully', response });

    console.log('After sending invitations');
  } catch (error) {
    console.error('Error:', error);

    // Respond with an error message or status code
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
