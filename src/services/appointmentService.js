const { ReturnDocument } = require('mongodb');
const Appointment = require('../models/Appointment');

exports.createAppointment = async (data) => {
    const { doctorId, appointmentDate, slot } = data;

    const exists = await Appointment.findOne({
        doctorId,
        appointmentDate,
        slot
    });

    if (exists) {
        throw new Error("Slot already booked");
    }

    const appointment = new Appointment(data);
    return await appointment.save();
};

exports.getAppointments = async (query = {}) => {
    return await Appointment.find(query)
        .populate('patientId', 'name age')
        .populate('doctorId', 'name specialization')
        .sort({ appointmentDate: 1 });
};

exports.getAppointmentById = async(id)=>{
    const appointment = await Appointment.findById(id)
    .populate('patientId')
    .populate('doctorId');

    if(!appointment) throw new Error("Appointment not found");
    return appointment;
};

exports.updateAppointment = async(id,data)=>{
    return await Appointment.findByIdAndUpdate(id,data,{new:true},{returnDocument:'after'});
};

exports.deleteAppointment = async(id)=>{
    return await Appointment.findByIdAndDelete(id);
}