from app.models import db, Dog, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_dogs():
    demo = Dog(
        dog_name='paw',age =1,color='white',weight=7.20,
        gender='male',
        neutered_spayed='spayed',
        microchip=False,
        image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Untitled+design+(20).png',
        birth_date=date(2023, 5, 10),
        breed_name ='Siberian Husky',
        description='info brief',
        medical_allergies='NA',
        owner_phone_number='1234556435',
        owner_email='hello@gmail.com',
        owner_address_line_one='helloworld ln',
        owner_address_line_two='helloworld two ln',
        owner_address_city ='SD',
        owner_address_state='CA',
        owner_address_zip_code = 92130,
        owner_country = "UK",
        user_id =1)
       
    db.session.add(demo)
    db.session.commit()

def undo_dogs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.dogs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM dogs"))

    db.session.commit()
        