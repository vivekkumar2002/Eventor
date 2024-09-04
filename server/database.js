import mysql from 'mysql2'
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { config_path } from './secret/configpath';
// import { config_path } from './secret/configpath.js';

// Load environment variables from .env file
dotenv.config({
  path:config_path,
});

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

// module.exports = pool;

export async function registerUser(username, hashedPassword, email) {
  try {
    const [result] = await pool.query(`
      INSERT INTO Users (username, password, email)
      VALUES (?, ?, ?)
    `, [username, hashedPassword, email]);

    // Optionally, you can get the inserted user's ID if needed
    // const userId = result.insertId;

    return result;
  } catch (error) {
    throw error;
  }
}

// export async function getNotes() {
//   const [rows] = await pool.query("select * from actor" )
//   return rows
// }
// export async function deleteNote() {
//   const [rows] = await pool.query("delete from actor where act_id=305" )
//   return getNotes()
// }

// export async function getNote(id) {
//   const [rows] = await pool.query(`
//   SELECT * 
//   FROM notes
//   WHERE id = ?
//   `, [id])
//   return rows[0]
// }



// export async function loginUser(username, password) {
//   const query = 'SELECT * FROM Users WHERE username = ?';
//   const values = [username];

//   const [user] = await executeQuery(query, values);

//   if (!user) {
//     throw new Error('User not found');
//   }

//   const isValidPassword = await bcrypt.compare(password, user.password);

//   if (!isValidPassword) {
//     throw new Error('Invalid password');
//   }

//   return user;
// }
