var socket;

$(document).ready(function(){
	socket = io.connect('http://' + document.domain + ':' + location.port);
});

const sendServerMessage = () => emit(socket)

const emit = (socket) => {
	socket.emit("hello", "server")
};