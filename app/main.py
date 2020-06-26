from flask import Flask, request, jsonify, Response
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from mongoengine import connect
from models.Player import Player
from models.Game import Game
from routes import auth, games

# Database
connect('quieroretruco', host='mongodb://mongodb/quieroretruco')

# App
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
app.register_blueprint(auth.bp)
app.register_blueprint(games.bp)
jwt = JWTManager(app)

# Socket
socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on('connect')
def handle_connection():
    print('someone is connected')


@socketio.on('disconnect')
def handle_disconnection():
    print('someone were disconnected')


@socketio.on('join game')
def handle_new_player(data):
    # game = data['game']
    # username = data['username']

    # add_player_to_game(username, game)
    # print('someone is connected' + str(data))
    # response = json.dumps({
    #     "game": games[game]
    # })

    # print(response)
    # if game:
    #     emit('join game', response, room=game)
    print('join game')


@socketio.on('leave game')
def handle_leave_connection(data):
    # game = data['game']
    # username = data['username']
    # remove_player_on_game(username, game)
    # print('leave game test')
    # response = json.dumps({
    #     "game": games[game]
    # })
    # emit('join game', response, room=game)
    print('leave game')

if __name__ == '__main__':
    # Only for debugging while developing
    socketio.run(app, host='0.0.0.0', debug=True, port=8001, log_output=True)
