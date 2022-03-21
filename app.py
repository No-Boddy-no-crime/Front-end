from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)
host = 'localhost'
port = 5000
debug = True

@app.route('/game/<gameID>/player/<playerID>/suggestion', methods=['POST'])
def makeSuggestion():
    return 0

@app.route('/game/<gameID>/player/<playerID>/accusation', methods=['POST'])
def makeAccusation():
    return 0

@app.route('/game/<gameID>/player/<playerID>/move', methods=['POST'])
def createPlayerMove():
    return 0

@app.route('/game/<gameId>/player', methods=['POST'])
def createPlayer():
    return 0

@app.route('/game/<gameID>', methods=['GET'])
def findGame():
    return 0

@app.route('/game', methods=['POST'])
def game():
    return 0

@app.route('/')
def gameBoard():
    return render_template('index.html', title='No Boddy No Crime')

if __name__ == '__main__':
    #app.run(host=host, port=port, debug=debug)
    socketio.run(app)