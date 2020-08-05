from mongoengine import Document, EmbeddedDocument, IntField, StringField, ListField, ReferenceField, EmbeddedDocumentField
from models.Player import Player


class Setting(EmbeddedDocument):
    limit = IntField()
    gameFormat = StringField(choices=('flor', 'no-flor'))


class Game(Document):
    score = IntField()
    status = StringField(choices=('waiting', 'playing', 'finished'))
    settings = EmbeddedDocumentField(Setting)
    players = ListField(ReferenceField(Player))
