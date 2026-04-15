const mongoose = require('mongoose');
const Doctor = require('../models/Doctor');

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// ✅ CREATE
exports.createDoctor = async (data) => {
    try {
        const { name, specialization, experience } = data;

        // 🔍 Validate required fields
        if (!name || !specialization) {
            throw new Error("Name and specialization are required");
        }

        // 🔍 Optional validation
        if (experience && typeof experience !== 'number') {
            throw new Error("Experience must be a number");
        }

        const doctor = new Doctor(data);
        return await doctor.save();

    } catch (err) {
        throw new Error("Error creating doctor: " + err.message);
    }
};



// ✅ GET ALL
exports.getDoctors = async () => {
    try {
        return await Doctor.find().sort({ createdAt: -1 });
    } catch (err) {
        throw new Error("Error fetching doctors: " + err.message);
    }
};



// ✅ GET BY ID
exports.getDoctorById = async (id) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Invalid doctorId");
        }

        const doctor = await Doctor.findById(id);

        if (!doctor) {
            throw new Error("Doctor not found");
        }

        return doctor;

    } catch (err) {
        throw new Error("Error fetching doctor: " + err.message);
    }
};



// ✅ UPDATE
exports.updateDoctor = async (id, data) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Invalid doctorId");
        }

        // 🔍 Optional validation on update
        if (data.experience && typeof data.experience !== 'number') {
            throw new Error("Experience must be a number");
        }

        const updated = await Doctor.findByIdAndUpdate(
            id,
            data,
            {returnDocument:'after'},
            { new: true } // ✅ Correct option
        );

        if (!updated) {
            throw new Error("Doctor not found");
        }

        return updated;

    } catch (err) {
        throw new Error("Error updating doctor: " + err.message);
    }
};



// ✅ DELETE
exports.deleteDoctor = async (id) => {
    try {
        if (!isValidObjectId(id)) {
            throw new Error("Invalid doctorId");
        }

        const deleted = await Doctor.findByIdAndDelete(id);

        if (!deleted) {
            throw new Error("Doctor not found"); // ✅ fixed message
        }

        return deleted;

    } catch (err) {
        throw new Error("Error deleting doctor: " + err.message);
    }
};