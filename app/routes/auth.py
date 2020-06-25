from flask import Blueprint, request, make_response
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from models.Player import Player

bp = Blueprint('auth', __name__)


@bp.route('/signup', methods=['POST'])
def register():
    try:
        data = request.get_json()
        player = Player.objects(nickname=data.get('nickname')).first()
        if player:
            return make_response({'status': 'fail', 'message': 'Nickname already taken'}), 202

        # Create new player
        nickname = data.get('nickname')
        hash_password = generate_password_hash(data.get('password'), 10)
        Player(nickname=nickname, password=hash_password).save()
        return make_response({'status': 'success', 'message': 'Player created'}), 201
    except Exception as e:
        print(e)
        return make_response({'status': 'fail', 'message': 'Something went wrong!'}), 500

@bp.route('/signin', methods=['POST'])
def login():
    try:
        data = request.get_json()
        player = Player.objects(nickname=data.get('nickname')).first()

        if not player:
            return make_response({'status': 'fail', 'message': 'Player does not exist'}), 404

        if not check_password_hash(player.password, data.get('password')):
            return make_response({'status': 'fail', 'message': 'Invalid password or nickname'}), 404

        token = create_access_token(identity=player.nickname)
        return make_response({'status': 'success', 'message': 'Successfully logged in', 'token': token}), 200
        return 'test'
    except Exception as e:
        print(e)
        return make_response({'status': 'fail', 'message': 'Something went wrong!'}), 500
