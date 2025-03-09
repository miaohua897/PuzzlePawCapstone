from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime

class Note(db.Model):
    __tablename__='notes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    note_date = db.Column(db.Date,nullable=False)
    title = db.Column(db.String(30),nullable=False)
    content = db.Column(db.Text, nullable=False, unique=True)
    created_at = db.Column(db.DateTime, default=datetime.today)
    updated_at = db.Column(db.DateTime, default=datetime.today, onupdate=datetime.today)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    dog_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('dogs.id')))

    user = db.relationship("User", back_populates='note')
    dog =db.relationship("Dog",back_populates='note')

    def to_dict(self):
        return {
            'id':self.id,
            'note_date':self.note_date,
            'title':self.title,
            'content':self.content,
            'user':self.user.to_dict(),
            'dog_id':self.dog_id
            # 'dog':self.dog.to_dict()  cant add this one, otherwise, run into infinite loop
        }