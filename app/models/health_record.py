from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime

class Health_Record(db.Model):
    __tablename__='health_records'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    record_date = db.Column(db.Date,nullable=False)
    description = db.Column(db.Text, nullable=False)
    treatment = db.Column(db.Text, nullable=False)
    vet_name = db.Column(db.String(30),nullable=False)
    dog_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('dogs.id')))
    created_at = db.Column(db.DateTime, default=datetime.today)
    updated_at = db.Column(db.DateTime, default=datetime.today, onupdate=datetime.today)
    
    dog =db.relationship("Dog",back_populates='health_record')