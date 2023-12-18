const mongoose = require('mongoose');
const { Schema } = mongoose;

const encounterSchema = new Schema({
  patientId: {type: String, required: true, ref: 'Patient'},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  type: {type: String, required: true, enum: ['Emergency', 'OPD', 'Specialist Care']}
});

module.exports = mongoose.model('Encounter', encounterSchema);
