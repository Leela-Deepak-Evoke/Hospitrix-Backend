const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Patient'
    },
    doctorId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'
    },
    appointmentDate: Date,
    slot: String,
    status:{type: String, default:'booked'}
}, {timestamps:true});

module.exports = mongoose.model('Appointment',appointmentSchema);