from mongoengine import Document, StringField

class Player(Document):
    nickname = StringField(required=True, unique=True)
    password = StringField(required=True)
