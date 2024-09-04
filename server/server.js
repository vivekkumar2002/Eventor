import express from 'express'
// import router from './routes/authRoutes'
import cors from 'cors'; 
import router from './routes/authRoutes.js';

// import routes from './routes.js'; // Adjust the path and extension accordingly

// import { getNotes,createNote,deleteNote } from './database.js'
// import { registerUser  } from './database.js'

const app = express()
app.use(cors()); 
app.use(express.json());

// app.use(express.json())

const vendors = [
  { id: 1, name: 'Catering Services', category: 'Catering' },
  { id: 2, name: 'Photography Studio', category: 'Photography' },
  { id: 3, name: 'Event Decorations', category: 'Decoration' }
];

app.get('/api/vendors', (req, res) => {
  res.json(vendors);
});

app.post('/api/bookings', (req, res) => {
  // Handle booking logic and store in a database
  const bookingData = req.body;
  console.log('Booking received:', bookingData);
  res.json({ message: 'Booking successful!' });
});

app.post('/api/expenses', (req, res) => {
  // Handle expense logic and store in a database
  const expenseData = req.body;
  console.log('Expense received:', expenseData);
  res.json({ message: 'Expense added!' });
});




app.use('/auth', router);

// app.use('/auth', authRoutes);

// app.get("/notes", async (req, res) => {
//   const notes = await getNotes()
//   res.send(notes)
// })
// app.delete("/notes", async (req, res) => {
//   const notes = await deleteNote()
//   res.send(notes)
// })

// // app.get("/notes/:id", async (req, res) => {
// //   const id = req.params.id
// //   const note = await getNote(id)
// //   res.send(note)
// // })

// app.post("/notes", async (req, res) => {
//   const { act_id,act_name, act_gender } = req.body
//   const note = await createNote(act_id,act_name,act_gender)
//   res.status(201).send(note)
// })

// app.post("/createuser", async (req, res) => {
//   const { username,password, email } = req.body
//   const user = await registerUser(username,password,email)
//   res.status(201).send(user)
// })


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke 💩')
})

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})