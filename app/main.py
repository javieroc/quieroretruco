from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room
from mongoengine import connect
from models.Player import Player
import json

connect('quieroretruco', host='mongodb://mongodb/quieroretruco')
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')


games = {}

def create_game(game):
    if game not in games:
        games[game] = []


def add_player_to_game(player, game):
    if player not in games[game]:
        games[game].append(player)
        join_room(game)


def remove_player_on_game(player, game):
    if player in games[game]:
        games[game].remove(player)
        leave_room(game)


@socketio.on('connect')
def handle_connection():
    print('someone is connected')


@socketio.on('disconnect')
def handle_disconnection():
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
        emit('join game', response, room=game)


@socketio.on('leave game')
def handle_leave_connection(data):
    game = data['game']
    username = data['username']
    remove_player_on_game(username, game)
    print('leave game test')
    response = json.dumps({
        "game": games[game]
    })
    emit('join game', response, room=game)

if __name__ == '__main__':
    # Only for debugging while developing
    player = Player(nickname='Connan')
    player.save()
    socketio.run(app, host='0.0.0.0', debug=True, port=8001, log_output=True)
