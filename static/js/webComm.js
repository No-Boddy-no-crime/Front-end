var socket;
var asyncID;

const MILLISECONDS_IN_A = Object.freeze({SEC: 1000, MIN: 60000, HOUR: 3600000});

const gameState = {
	name: 'gameState',
	gameBoardID: 0,
	sentAt: Date.now(),
	gameState: {
		board: "blah",
		players: 6,
		otherPayload: 'no'
	}
}

$(document).ready(function(){
	socket = io();
	document.getElementById('randomButton').onclick = () => send('my_event_test', {data: 'hello server'});
	
	socket.on('serverResponse', (msg) => handleServerResponse(msg))
	asyncID = setInterval(updateGameState, MILLISECONDS_IN_A.SEC * 10);
});

const handleServerResponse = (msg) => {
	const div = document.createElement('div');
	div.innerText = msg;
	document.getElementById('serverMessages').append(div);
}

const compileGameState = () => {
	gameState.gameBoardID += 1;
	gameState.sentAt = Date.now();
	return gameState;
}
const updateGameState = () => send('gameState', compileGameState())

const send = (eventName, payload) => socket.emit(eventName, payload)

