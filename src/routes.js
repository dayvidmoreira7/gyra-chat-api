const router = require('express').Router();
const SessionController = require('./app/controllers/SessionController');
const MessagesController = require('./app/controllers/MessagesController');

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/session/entry', SessionController.entry);
router.post('/session/exit', SessionController.exit);
router.get('/room', MessagesController.index);
router.post('/room/message', MessagesController.store);

module.exports = router;