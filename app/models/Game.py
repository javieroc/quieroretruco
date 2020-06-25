from mongoengine import Document, IntField, StringField, ListField, ReferenceField
from models.Player import Player

class Game(Document):
    score = IntField()
    status = StringField(choices=('waiting', 'playing', 'finished'))
    # players = ListField(ReferenceField(Player))
