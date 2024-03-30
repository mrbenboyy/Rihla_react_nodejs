const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const cityRouter = require("./Routes/citiesRoute");
const adminRouter = require("./Routes/adminsRoute");
const bookingRouter = require("./Routes/bookingsRoute");
const contactRouter = require("./Routes/contactsRoute");
const cors = require("cors");
const path = require("path")
const axios = require("axios");
app.use(cors());

app.use(express.json());
app.use("/", cityRouter);
app.use("/", adminRouter);
app.use("/", bookingRouter);
app.use("/", contactRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const mongoose = require('mongoose');
const URL = process.env.DB_URL

mongoose.connect(URL).then(result => app.listen(process.env.PORT, () => {
    console.log("server is running!");
})).catch(error => console.log(error));

//Code brevo pour l'envoie des messages
app.post('/api/send-email', async (req, res) => {
  const { userEmail, message } = req.body;
  const apiKey = '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'; // Replace with your Sendinblue API key

  const sendinblueEndpoint = 'https://api.sendinblue.com/v3/smtp/email';

  const headers = {
    'Content-Type': 'application/json',
    'api-key': apiKey,
  };

  const data = {
    sender: { name: 'Rihla', email: 'mrbenboyyy@gmail.com' }, // Replace with your name and email
    to: [{ email: userEmail }],
    subject: 'Réservation avec Rihla',
    textContent: message,
  };

  try {
    await axios.post(sendinblueEndpoint, data, { headers });
    console.log('Email sent');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
});