const mongoose = require('mongoose')

const Schema = mongoose.Schema
const staffSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
    age: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
   
},
{
    timestamps: true
});

const Staff = mongoose.model('User', staffSchema);

module.exports = Staff;