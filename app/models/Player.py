from mongoengine import Document, StringField

class Player(Document):
    nickname = StringField(max_length=200, required=True)
