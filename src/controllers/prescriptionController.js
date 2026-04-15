const service = require('../services/prescriptionService');

exports.create = async(req,res,next)=>{
    try {
        res.status(201).json(await service.createPrescription(req.body,req.user));
    } catch (error) {
        next(error);
    }
};

exports.getAll = async(req,res,next)=>{
    try {
        res.json(await service.getPrescriptions());
    } catch (error) {
        next(error);
    }
};

exports.getByPatient = async (req,res,next)=>{
    try {
        res.json(await service.getByPatient(req.params.patientId));
    } catch (error) {
        next(error);
    }
};