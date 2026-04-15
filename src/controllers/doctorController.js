const service = require('../services/doctorService');

exports.create = async (req,res,next)=>{
    try {
        res.status(201).json(await service.createDoctor(req.body));
    } catch (error) {
        next(error);
    }
};

exports.getAll = async(req,res,next)=>{
    try {
        res.json(await service.getDoctors());
    } catch (error) {
        next(error);
    }
};

exports.getById = async(req,res,next)=>{
    try {
        res.json(await service.getDoctorById(req.params.id));
    } catch (error) {
        next(error);
    }
};

exports.update = async(req,res,next)=>{
    try {
        res.json(await service.updateDoctor(req.params.id,req.body));
    } catch (error) {
        next(error);
    }
};

exports.remove = async(req,res,next)=>{
    try {
        await service.deleteDoctor(req.params.id);
        res.json({message:"Doctor deleted successfully"});
    } catch (error) {
        next(error);
    }
};