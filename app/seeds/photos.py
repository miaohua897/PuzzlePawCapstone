from app.models import db, Photo, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_photos():
    demo=[
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1124002.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction2',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-bill-emrich-64742-230785.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction3',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-fotios-photos-1009922.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction4',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ilargian-faus-763704-1629777.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction5',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-jhelmuth-3726314.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction6',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-mdsnmdsnmdsn-1577881.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction7',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-37401.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction8',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-65928.jpg', 
       user_id =1,
       dog_id=1)
    ]
    db.session.add_all(demo)
    db.session.commit()

def undo_photos():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.photos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM photos"))

    db.session.commit()
