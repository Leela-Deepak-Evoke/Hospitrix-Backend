const authService = require('../services/authService');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res, next) => {
    try {
        const user = await authService.register(req.body, req.user);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await authService.login(req.body.email, req.body.password);
        const token = generateToken(user._id);
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.logout = async (req, res) => {
    try {
        return res.status(200).json({
            message: "Logged out successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error logging out"
        });
    }
};