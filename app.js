const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
/* SOCKET.IO CODE STARTS */
/* Default Name space */
io.on('connection', (socket) => {
  console.log('Someone connected to /chat-with-all');
  socket.on('send-chat-message', (message) => {
    io.sockets.emit('chat-message', message);
  });
});
/* Custom Namespace - /chat */
const chat = io.of('/chat');
chat.on('connection', (socket) => {
  console.log('Someone connected to /chat');
  socket.on('send-chat-message', (message) => {
    chat.emit('chat-message', message);
  });
});
/* Custom Namespace - /customer-care */
const customercare = io.of('/customercare');
customercare.on('connection', (socket) => {
  console.log('Someone connected to /customercare');
  socket.on('send-chat-message', (message) => {
    customercare.emit('chat-message', message);
  });
});
/* SOCKET.IO CODE ENDS */
app.use('/', router);
http.listen(3200, () => {
  console.log('Server listening to port 3200');
});
