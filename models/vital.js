const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the vital schema
const vitalSchema = new Schema({
  encounterId: {type: String, required: true, ref: 'Encounter'},
  bloodPressure: {type: String, required: true},
  temperature: {type: String, required: true},
  pulse: {type: String, required: true},
  sp02: {type: String, required: true}
});

module.exports = mongoose.model('Vital', vitalSchema);