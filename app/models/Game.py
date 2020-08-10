from mongoengine import Document, EmbeddedDocument, IntField, StringField, ListField, ReferenceField, EmbeddedDocumentField
from models.Player import Player


class PlayerGame(EmbeddedDocument):
    nickname = StringField
    cards_played = ListField(StringField)
    cards_hand = ListField(StringField)


class State(EmbeddedDocument):
    players = ListField(PlayerGame)


class Game(Document):
    boton = StringField()
    turns = ListField(StringField)
    states = ListField(State)
