const Patient = require('../models/patient');

exports.createPatient = async (data)=>{
    try {
        const patient = new Patient(data);
        return await patient.save();
    } catch (error) {
        throw new Error("Error creating patient: "+ error.message);
    }
};

exports.getPatients = async()=>{
    return await Patient.find().sort({createdAt: -1});
};

exports.getPatientById = async(id)=>{
    const patient = await Patient.findById(id);
    if(!patient) throw new Error("Patient Not Found");
    return patient;
};

exports.updatePatient = async(id,data)=>{
    const updated = await Patient.findByIdAndUpdate(id,data,{new:true},{returnDocument:'after'});
    if(!updated) throw new Error("Patient Not Found");
    return updated;
};

exports.deletePatient = async(id)=>{
    const deleted = await Patient.findByIdAndDelete(id);
    if(!deleted) throw new Error("Patient Not Found");
    return deleted;
}