const Message = require('../models/MessageModel');

class MessageController {
    async store(req, res) {
        try {
            const message = await Message.create(req.body);
            
            req.io.sockets.emit('newMessage', message);

            return res.status(200).send('Mensagem enviada');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    async index(req, res) {
        try {
            const messages = await Message.find().sort({ createdAt: 1 });
            return res.status(200).json(messages);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

module.exports = new MessageController();