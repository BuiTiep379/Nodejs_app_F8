const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: { type: String, minLength: 6, maxLength: 255 },
        address: { type: String, maxLength: 255 },
        email: { type: String, unique: true },
        phone: { type: String, length: 11 },
        gender: { type: String },
        password: { type: String, minLength: 8 },
        status: { type: Number },
        role: { type: String },
        avatar: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
