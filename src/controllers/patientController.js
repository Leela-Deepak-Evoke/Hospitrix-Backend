const service = require('../services/patientService');

exports.create = async (req,res,next) =>{
    try {
        const data = await service.createPatient(req.body);
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

exports.getAll = async(req,res,next)=>{
    try {
        const data = await service.getPatients();
        res.json(data);
    } catch (error) {
        next(error);
    }
};


exports.getById = async (req,res,next)=>{
    try {
        const data = await service.getPatientById(req.params.id);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req,res,next)=>{
    try {
        const data = await service.updatePatient(req.params.id,req.body);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.remove = async(req,res,next)=>{
    try {
        await service.deletePatient(req.params.id);
        res.json({message: "Patient deleted successfully"});
    } catch (error) {
        next(error);
    }
};