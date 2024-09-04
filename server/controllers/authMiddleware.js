import jwt from "jsonwebtoken";
import { pool } from "../database/db.js";

export async function authenticateUser(req, res, next) {
  req.user = {}; // Initialize req.user as an object

  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "eventor");

    const [userRows] = await pool.query("SELECT * FROM Users WHERE email = ?", [
      decoded.email,
    ]);

    // const [eventsRows] = await pool.query(
    //   `
    //   SELECT e.* FROM Events e
    //   JOIN Users u ON e.userId = u.userId
    //   WHERE u.email = ?
    // `,
    //   [decoded.email]
    // );

    // req.user.events = eventsRows;

    if (userRows.length === 0) {
      return res.status(401).json({ error: "Unauthorized - User not found" });
    }

    const user = userRows[0];
    req.user = user; // Attach user information to the request object
    // console.log("nj",user);
    next();
  } catch (error) {
    console.error("Error during token verification:", error);
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
}
