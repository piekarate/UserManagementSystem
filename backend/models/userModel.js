const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
    adminID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Admin"
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)