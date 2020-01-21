class SessionController {
    async entry(req, res) {
        try {
            let { username } = req.body;
            let data = {
                senderName: 'system',
                socketId: '0',
                text: `${username} entrou na sala`
            }
    
            req.io.sockets.emit('roomMoves', data);
            return res.status(200).send('Entrou na sala');
        } catch (error) {
            return res.status(400).send(error);            
        }
    }
    async exit(req, res) {
        try {
            let { username } = req.body;
            let data = {
                senderName: 'system',
                socketId: '0',
                text: `${username} saiu da sala`
            }
    
            req.io.sockets.emit('roomMoves', data);
            return res.status(200).send('Saiu da sala');
        } catch (error) {
            
        }
    }
}

module.exports = new SessionController();