from mongoengine import Document, EmbeddedDocument, IntField, StringField, ListField, ReferenceField, EmbeddedDocumentField
from models.Player import Player
from models.Game import Game

class Setting(EmbeddedDocument):
    limit = IntField()
    game_format = StringField(choices=('flor', 'no-flor'))


class Score(EmbeddedDocument):
    us = IntField()
    they = IntField()


class Match(Document):
    score = EmbeddedDocumentField(Score)
    status = StringField(choices=('waiting', 'playing', 'finished'))
    settings = EmbeddedDocumentField(Setting)
    players = ListField(ReferenceField(Player))
    games = ListField(ReferenceField(Game))
