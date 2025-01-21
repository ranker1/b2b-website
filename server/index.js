const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const Business = require('./models/Business');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});


// Route to get all businesses
app.get('/api/businesses', async (req, res) => {
    try {
      const businesses = await Business.find();
      res.json(businesses);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching businesses' });
    }
  });
  
  
  app.post('/api/businesses', async (req, res) => {
    try {
      const newBusiness = new Business(req.body);
      await newBusiness.save();
      res.status(201).json(newBusiness);
    } catch (error) {
      res.status(500).json({ message: 'Error adding business' });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
