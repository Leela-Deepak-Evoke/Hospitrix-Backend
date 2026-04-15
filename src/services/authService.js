const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (data) => {
    const existing = await User.findOne({ email: data.email });
    if (existing) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = new User({
        ...data,
        password: hashedPassword
    });

    return await user.save();
};

exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    return user;
};