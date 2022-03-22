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
	document.getElementById('randomButton').onclick = function(){
		socket.emit('my_event_test', {data: 'hello server'});
	}

	asyncID = setInterval(updateGameState, MILLISECONDS_IN_A.SEC * 10);
});

const compileGameState = () => {
	gameState.gameBoardID += 1;
	gameState.sentAt = Date.now();
	return gameState;
}
const updateGameState = () => socket.emit('gameState', compileGameState());

