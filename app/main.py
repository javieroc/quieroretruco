from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route("/")
def hello():
    return "Hello World flask test"

@socketio.on('connect')
def handle_connection():
    print('someone is connected')


@socketio.on('new player')
def handle_new_player(data):
    print('someone is connected' + str(data))


if __name__ == '__main__':
    # Only for debugging while developing
    socketio.run(app, host='0.0.0.0', debug=True, port=8001, log_output=True)
