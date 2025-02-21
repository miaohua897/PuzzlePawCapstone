from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime

class Photo(db.Model):
    __tablename__='photos'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    photo_date = db.Column(db.Date,nullable=False)
    title = db.Column(db.String(30),nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(2000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.today)
    updated_at = db.Column(db.DateTime, default=datetime.today, onupdate=datetime.today)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    dog_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('dogs.id')))

    owner = db.relationship("User", back_populates='photo')
    dog =db.relationship("Dog",back_populates='photo')

    def to_dict(self):
        return {
            'id': self.id,
            'photo_date':self.photo_date,
            'title':self.title,
            'description':self.description,
            'image_url':self.image_url,
            'owner':self.owner.to_dict(),
            'dog':self.dog.to_dict()
        }