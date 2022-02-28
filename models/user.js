const mongoose = require('mongoose');
const jwt = require('jsonwebtokem');
const joi = require('joi');
const passswordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    month: { type: String, required: true },
    date: { type: String, required: true },
    year: { type: String, required: true },
    likedSongs: { type: [String], default: [] },
    playlists: { type: [String], default: [] },
    isAdmin: { type: Boolean, default: false }
})
userSchema.methods.generateAuthtoken = function () {
    const token = jwt.sign(
        { _id: this_id, name: this.name, isAdmin: this.isAdmin },
        process.env.JWTPRIVATEKEY,
        { expiresln: "7d" }
    )
    return token;
}
const User = mongoose.model('user', userSchema);