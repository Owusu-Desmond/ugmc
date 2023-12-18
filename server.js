// Import the required modules
const express = require('express');
const mongoose = require('mongoose');

const Patient = require('./models/patient')
const Encounter = require('./models/encounter')
const Vital = require('./models/vital')


// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/ugmc', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

// Use JSON middleware
app.use(express.json());

// Define the routes and controllers

// Register a new patient
app.post('/patients', async (req, res) => {
  try {
    // Create a new patient document
    const patient = new Patient(req.body);
    // Save it to the database
    await patient.save();
    res.status(201).json({message: 'Patient registered successfully', patient});
  } catch (error) {
    // Handle any errors
    res.status(500).json({message: 'An error occurred', error});
  }
});

// Start an encounter for a patient
app.post('/encounters', async (req, res) => {
  try {
    const encounter = new Encounter(req.body);
    await encounter.save();
    res.status(201).json({message: 'Encounter started successfully', encounter});
  } catch (error) {
    res.status(500).json({message: 'An error occurred', error});
  }
});

// Submit information on patient vitals
app.post('/vitals', async (req, res) => {
  try {
    const vital = new Vital(req.body);
    await vital.save();
    res.status(201).json({message: 'Vital information submitted successfully', vital});
  } catch (error) {
    res.status(500).json({message: 'An error occurred', error});
  }
});

// View a list of patients
app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({message: 'Patients retrieved successfully', patients});
  } catch (error) {
    res.status(500).json({message: 'An error occurred', error});
  }
});

// View the details of a specific patient
app.get('/patients/:patientId', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    if (patient) {
      res.status(200).json({message: 'Patient retrieved successfully', patient});
    } else {
      res.status(404).json({message: 'Patient not found'});
    }
  } catch (error) {
    res.status(500).json({message: 'An error occurred', error});
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
