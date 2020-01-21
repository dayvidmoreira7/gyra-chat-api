const { model, Schema } = require('../configs/database');

const messageSchema = new Schema({
    senderName: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = model('Message', messageSchema);