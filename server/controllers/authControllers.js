import { getUserByEmail, registerUser } from '../database/userQueries.js';
import {pool} from '../database/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function registerUserController(req, res) {
  const { username, email, password, role } = req.body;

  try {

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      // User with the same email already exists
      return res.status(400).send({ error: 'Duplicate entry. User with the same email already exists.' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const registrationResult = await registerUser(username, hashedPassword, email, role);

    res.status(201).send({ message: 'User registered successfully', user: registrationResult });
  } catch (error) {
    console.error('Error registering user:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      // Duplicate entry error (e.g., duplicate email)
      res.status(400).send({ error: 'Duplicate entry. User with the same email already exists.' });
    } else {
      // Other types of errors
      res.status(500).send({ error: 'Internal Server Error' });
    }
  }
}


export async function loginUserController(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const [userRows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);

    if (userRows.length === 0) {
      return res.status(401).json({ error: 'UserNotFound' });
    }

    const user = userRows[0];

    // Compare the entered password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ error: 'IncorrectPassword' });
    }

    // Check if the user is an admin
    const isAdmin = user.role === 'admin';

    // Create and send a JWT token for authentication
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      'eventor',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      user: { username: user.username, email: user.email, role: user.role },
      token,
      isAdmin,
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

