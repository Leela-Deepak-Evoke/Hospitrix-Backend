const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    phone: String,
    email: String,
    medicalHistory: [String],
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);