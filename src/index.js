require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');

const app = express(),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {req.io = io; return next()});
app.use(routes);

io.on('connection', socket => {
    socket.on('disconnect', async () => {
        socket.leaveAll();
    })
})

server.listen(process.env.PORT, () => {
    console.log('Listening');
})