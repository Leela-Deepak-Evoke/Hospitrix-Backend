const Prescription = require('../models/Prescription');

exports.createPrescription = async(data)=>{
    const prescription = new Prescription(data);
    return await prescription.save();
};

exports.getPrescriptions = async()=>{
return await Prescription.find()
.populate('patientId','name')
.populate('doctorId','name specialization')
.sort({createdAt: -1});
};

exports.getByPatient = async(patientId)=>{
    return await Prescription.find({patientId})
    .populate('doctorId','name specialization')
    .sort({createdAt: -1});
};