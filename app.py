"""
Server
"""

# Start with a basic flask app webpage.
import json
from flask_socketio import SocketIO, emit
from flask import Flask, render_template, url_for, copy_current_request_context

app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def index():
    #only by sending this page first will the client be connected to the socketio instance
    return render_template('index.html')

@socketio.on('connect')
def test_connect():
    print('Client Connected...')


@socketio.on('disconnect')
def test_disconnect():
    print('Client Disconnected...')

@socketio.on('my_event_test')
def handle_my_custom_event(arg1):
    print('received args: ' + json.dumps(arg1))

@socketio.on('gameState')
def handle_async_gameState_update(gameStateJSON):
    print(json.dumps(gameStateJSON))


if __name__ == '__main__':
    socketio.run(app)