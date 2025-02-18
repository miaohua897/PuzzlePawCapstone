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
    photo =db.relationship("Photo",back_populates='dog')


    def to_dict(self):
        return {
            'id': self.id,
            'dog_name': self.dog_name,
            'age': self.age,
            'gender':self.gender,
            'color':self.color,
            'weight':self.weight,
            'image_url':self.image_url,
            'birth_date':self.birth_date,
            'breed_name':self.breed_name,
            'description':self.description,
            "medical_allergies":self.medical_allergies,
            "owner_phone_number":self.owner_phone_number,
            "owner_email":self.owner_email,
            "owner_address_line_one":self.owner_address_line_one,
            "owner_address_line_two":self.owner_address_line_two,
            "owner_address_city":self.owner_address_city,
            "owner_address_state":self.owner_address_state,
            "owner_address_zip_code":self.owner_address_zip_code,
            "owner_country":self.owner_country,
            "created_at":self.created_at,
            "updated_at":self.updated_at,
            "owner":self.owner.to_dict()

        }