const io = require('socket.io-client')

const socket = io.connect('https://localhost:3000')

function registerHandler(onMessageRecieved) {
    socket.on('message', onMessageRecieved)
}

function unregisteredHandler() {
    socket.off('message')
}

socket.on('error', function(err){
    console.log('recieved socket error')
    console.log(err)
})

function register(name, cb) {
    socket.emit('register', name, cb)
}

function join(chatroomName, cb) {
    socket.emit('join', chatroomName, cb)
}

function leave(chatroomName, cb) {
    socket.emit('leave', chatroomName, cb)
}

function message(chatroomName, msg, cb) {
    socket.emit('message', {chatroomName, message: msg}, cb)
}

function getChatrooms(cb) {
    socket.emit('chatrooms', null, cb)
}

function getAvailableUsers(cb) {
    socket.emit('availableUsers', null, cb)
}