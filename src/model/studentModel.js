const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    Class: {
        type: Number,
        required: true,
        trim: true
    },

    rollNo: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },

    studentImage: {
        type: String,
        required: true,
    },

    identity: {
        type: String,
        required: true,
    },

    schoolName: {
        type: String,
        required: true,
        trim: true
    },

    district: {
        type: String,
        required: true,
        trim: true
    },

    pinCode: {
        type: Number,
        required: true,
        trim: true
    }

}, { timestamps: true })


module.exports = mongoose.model('Student', studentSchema);

