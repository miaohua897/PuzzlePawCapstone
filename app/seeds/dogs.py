from app.models import db, Dog, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_dogs():
    demo = Dog(
        dog_name='PawPaw',age =1,color='white',weight=7,
        gender='male',
        neutered_spayed='spayed',
        microchip=False,
        image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-bill-emrich-64742-230785.jpg',
        birth_date=date(2023, 5, 10),
        breed_name ='Breed one',
        description='A dog photo typically captures the essence of a dog’s personality and appearancefsdfhhhh',
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
    demo_two = Dog(
        dog_name='Dog2',age =1,color='white',weight=8,
        gender='female',
        neutered_spayed='spayed',
        microchip=False,
        image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-nishizuka-25426-191353.jpg',
        birth_date=date(2023, 5, 10),
        breed_name ='Breed two',
        description='A dog photo typically captures the essence of a dog’s personality and appearancehhhh',
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
    demo_three = Dog(
        dog_name='Dog2',age =1,color='white',weight=9,
        gender='female',
        neutered_spayed='spayed',
        microchip=False,
        image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-simonakidric-2607544.jpg',
        birth_date=date(2023, 5, 10),
        breed_name ='Breed three',
        description='A dog photo typically captures the essence of a dog’s personality and appearancelalalal',
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
    demo_four = Dog(
        dog_name='PawPaw',age =1,color='white',weight=10,
        gender='male',
        neutered_spayed='spayed',
        microchip=False,
        image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ohshineon-33273.jpg',
        birth_date=date(2023, 5, 10),
        breed_name ='Breed four',
        description='A dog photo typically captures the essence of a dog’s personality and appearancefsdfhhhh',
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
    db.session.add(demo_two)
    db.session.add(demo_three)
    db.session.add(demo_four)
    db.session.commit()

def undo_dogs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.dogs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM dogs"))

    db.session.commit()
        