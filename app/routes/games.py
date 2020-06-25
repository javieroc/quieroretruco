from flask import Blueprint, request, Response
from models.Game import Game

bp = Blueprint('games', __name__)

# def add_player_to_game(player, game):
#     if player not in games[game]:
#         games[game].append(player)
#         join_room(game)


# def remove_player_on_game(player, game):
#     if player in games[game]:
#         games[game].remove(player)
#         leave_room(game)


@bp.route('/games', methods=['GET'])
def get_games():
    games = Game.objects().to_json()
    return Response(games, mimetype="application/json", status=200)


@bp.route('/games', methods=['POST'])
def create_game():
    data = request.get_json()
    game = Game(**data).save()
    return Response(game.to_json(), mimetype="application/json", status=200)
