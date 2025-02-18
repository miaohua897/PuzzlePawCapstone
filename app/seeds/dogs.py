from app.models import db, Dog, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_dogs():
    demo = Dog(
        dog_name='paw',age =1,gender='female',color='white',weight=7.20,
        image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Untitled+design+(20).png',
        birth_date=date(2023, 5, 10),
        breed_name ='Siberian Husky',
        owner_phone_number='1234556435',
        owner_email='hello@gmail.com',
        owner_address='helloworld, CA',
        user_id =1)
       
    db.session.add(demo)
    db.session.commit()

def undo_dogs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.dogs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM dogs"))

    db.session.commit()
        