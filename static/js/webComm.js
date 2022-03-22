var socket;

$(document).ready(function(){
	socket = io();
	document.getElementById('randomButton').onclick = function(){
		socket.emit('my_event_test', {data: 'hello server'});
	}
});