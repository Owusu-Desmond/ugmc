const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the vital schema
const patientSchema = new Schema({
    patientId: {type: String, required: true, unique: true},
    surname: {type: String, required: true},
    othernames: {type: String, required: true},
    gender: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    residentialAddress: {type: String, required: true},
    emergencyName: {type: String, required: true},
    emergencyContact: {type: String, required: true},
    emergencyRelationship: {type: String, required: true}
  });
  

module.exports = mongoose.model('Patient', vitalSchema);