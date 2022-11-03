const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('BasicForm', goalSchema)