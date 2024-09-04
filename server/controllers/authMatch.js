import jwt from 'jsonwebtoken';
import {pool} from '../database/db.js';
export async function matchTokenFormat(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - No token provided' });
  }

  try {
    // console.log(token);
    const decoded = jwt.verify(token, 'eventor');

    // console.log('Decoded Token2:', decoded); // Log the decoded token for troubleshooting

    const [userRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [decoded.email]);

    if (userRows.length === 0) {
      return res.status(401).json({ error: 'Unauthorized - User not found' });
    }

    const user = userRows[0];
    req.user = user; 

    console.log("userID: ",user);
    // Optionally, you can perform additional checks on the decoded token here

    next();
  } catch (error) {
    console.error('Error during token verification:', error);
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
}
