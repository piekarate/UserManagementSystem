const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('BasicForm', goalSchema)