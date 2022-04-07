const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    price: {
        type: String,
        required: [true, 'Please add a price']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Item', itemSchema)