from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')


games = {}

def create_game(game):
    if game not in games:
        games[game] = []


def add_player_to_game(player, game):
    if player not in games[game]:
        join_room(game)
        games[game].append(player)


@app.route("/")
def hello():
    return "Hello World flask test"


@socketio.on('connect')
def handle_connection():
    print('someone is connected')


@socketio.on('disconnect')
def handle_connection():
    print('someone were disconnected')


@socketio.on('join game')
def handle_new_player(data):
    game = data['game']
    username = data['username']
    create_game(game)
    add_player_to_game(username, game)
    print('someone is connected' + str(data))
    response = json.dumps({
        "game": games[game]
    })

    print(response)
    if game:
        emit('join game', response)


@socketio.on('leave game')
def handle_connection():
    pass

if __name__ == '__main__':
    # Only for debugging while developing
    socketio.run(app, host='0.0.0.0', debug=True, port=8001, log_output=True)
