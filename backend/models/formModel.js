const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('BasicForm', goalSchema)