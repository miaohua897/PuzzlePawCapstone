from app.models import db, Photo, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_photos():
    demo=Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Untitled+design+(20).png', 
       user_id =1,
       dog_id=1 
    )
    db.session.add(demo)
    db.session.commit()

def undo_photos():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.photos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM photos"))

    db.session.commit()
