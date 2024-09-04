import nodemailer from 'nodemailer';
import { executeQuery } from '../database/db.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.net',
  port: 465,
  secure: true,
  auth: {
    user: 'omhari1472@gmail.com',
    pass: 'bfyf nccv xgld aond',
  },
});

// Update the function to accept guests as a parameter
export async function sendInvitations(guests) {
  try {
    // Use Promise.all to wait for all emails to be sent
    await Promise.all(guests.map(async (guest) => {
      const { guestName, guestEmail, eventID } = guest;

      const mailOptions = {
        from: 'omhari1472@gmail.com',
        to: guestEmail,
        subject: 'RSVP Invitation',
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRYZGBgaGhgaGhgYGhgYGBgaGhwZGhoaGBocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzUrJCQ0NDQ0NDQ0REhESEhIRExQREBAQEBAQEBAQEBAQEBAQEBAQEBERAREBERAREBEAREBEBAQEBAQEBAQEBAQEBAQEBAQF/9k=') center center/cover no-repeat;">
            <h2 style="text-align: center; color: #fff;">You're Invited!</h2>
            <p style="text-align: center; color: #fff;">Dear ${guestName},</p>
            <p style="text-align: center; color: #fff;">You are invited to our event. Please RSVP by clicking the link below:</p>
            <div style="text-align: center; margin-top: 20px;">
              <a href="http://your-website.com/rsvp?eventId=${eventID}&guestEmail=${guestEmail}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px;">RSVP Now</a>
            </div>
          </div>
        ` 
      };

      await transporter.sendMail(mailOptions);

      // Log the guest's email to whom the invitation is sent
      console.log(`Invitation sent to: ${guestEmail}`);
    }));

    console.log('Invitations sent successfully');
    return 'Invitations sent successfully';
  } catch (error) {
    console.error('Error sending invitations:', error);
    throw error;
  } finally {
    // Close the transporter to terminate background processes
    transporter.close();
  }
}

// Function to start sending invitations
async function startInvitations(guests) {
  try {
    const response = await sendInvitations(guests);
    console.log(response); // Log the response
  } catch (error) {
    console.error('Error:', error);
  }
}

// Use a try-catch block to handle the response when needed
// For example, you can call startInvitations() in a specific route or controller
// based on your application's requirements.

export { startInvitations };
