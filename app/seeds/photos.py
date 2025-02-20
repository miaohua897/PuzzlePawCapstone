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
       dog_id=1),
        Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction9',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1562983.jpg', 
       user_id =1,
       dog_id=1),
         Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction10',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-joey-marrone-709722-1559660.jpg', 
       user_id =1,
       dog_id=1),
           Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction11',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-katlovessteve-551628.jpg', 
       user_id =1,
       dog_id=1),
              Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction12',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-nietjuhart-612813.jpg', 
       user_id =1,
       dog_id=1),
               Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction13',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-160846.jpg', 
       user_id =1,
       dog_id=1),
                  Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction14',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-164186.jpg', 
       user_id =1,
       dog_id=1),
        Photo(
       photo_date = date(2024,1,1),
       title='helloworld',
       description='brief introduction15',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-simonakidric-2607544.jpg', 
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
