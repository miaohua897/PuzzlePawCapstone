from .db import db, environment,SCHEMA, add_prefix_for_prod
from datetime import datetime

class Dog(db.Model):
    __tablename__='dogs'
    if environment == 'production':
        __table_args__ ={"schema":SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    dog_name = db.Column(db.String(30), nullable=False)
    age =db.Column(db.Integer,nullable=False)
    gender = db.Column(db.String(30),nullable=False)
    color= db.Column(db.String(30),nullable=False)
    weight = db.Column(db.Numeric(6, 2), nullable=False)
    image_url = db.Column(db.String(2000), nullable=False)
    birth_date=db.Column(db.Date,nullable=False)
    breed_name=db.Column(db.String(30),nullable=False)
    description=db.Column(db.String(200), nullable=False)
    medical_allergies=db.Column(db.String(200), nullable=False)
    owner_phone_number=db.Column(db.String(20),nullable=False)
    owner_email=db.Column(db.String(100),nullable=False)
    owner_address_line_one = db.Column(db.String(200),nullable=False)
    owner_address_line_two = db.Column(db.String(200),nullable=False)
    owner_address_city = db.Column(db.String(30),nullable=False)
    owner_address_state = db.Column(db.String(30),nullable=False)
    owner_address_zip_code = db.Column(db.Integer,nullable=False)
    owner_country =db.Column(db.String(30),nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.today)
    updated_at = db.Column(db.DateTime, default=datetime.today, onupdate=datetime.today)

    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

    owner = db.relationship("User", back_populates='dog')
    note =db.relationship("Note",back_populates='dog')
    health_record =db.relationship("Health_Record",back_populates='dog')
    behavior_record =db.relationship("Behavior_Record",back_populates='dog')
    training_record =db.relationship("Training_Record",back_populates='dog')