const service = require('../services/appointmentService');

exports.create = async(req,res,next) =>{
    try {
        const data = await service.createAppointment(req.body);
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

exports.getAll = async(req,res,next)=>{
    try {
        const data = await service.getAppointments(req.query);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.getById = async (req,res,next)=>{
    try {
        const data = await service.getAppointmentById(req.params.id);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req,res,next)=>{
    try {
        const data = await service.updateAppointment(req.params.id,req.body);
        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.remove = async(req,res,next)=>{
    try {
        await service.deleteAppointment(req.params.id,req.user);
        res.json({message: "Appointment deleted"});
    } catch (error) {
        next(error);
    }
};