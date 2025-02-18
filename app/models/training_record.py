from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime

class Training_Record(db.Model):
    __tablename__='training_records'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    training_date = db.Column(db.Date,nullable=False)
    training_type = db.Column(db.String(30),nullable=False)
    trainer_name =db.Column(db.String(30),nullable=False)
    notes = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.today)
    updated_at = db.Column(db.DateTime, default=datetime.today, onupdate=datetime.today)
    dog_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('dogs.id')))

    dog =db.relationship("Dog",back_populates='training_record')