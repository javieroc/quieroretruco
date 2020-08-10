from flask import Blueprint, request, make_response
from models.Game import Game
from models.Match import Match

bp = Blueprint('matches', __name__)


@bp.route('/matches', methods=['GET'])
def get_matches():
    matches = Match.objects().to_json()
    return make_response(matches), 200


@bp.route('/matches', methods=['POST'])
def create_matches():
    data = request.get_json()
    match = Match(**data).save()
    return make_response(match.to_json()), 200
