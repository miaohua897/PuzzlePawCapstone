from app.models import db, Photo, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_photos():
    demo=[
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo one',
       description='A dog photo typically captures the essence of a dog’s personality and appearance.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1124002.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo two',
       description='A dog photo typically captures the essence of a dog’s personality and appearance2.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-bill-emrich-64742-230785.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo three',
       description='A dog photo typically captures the essence of a dog’s personality and appearance3.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-fotios-photos-1009922.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo four',
       description='A dog photo typically captures the essence of a dog’s personality and appearance4.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ilargian-faus-763704-1629777.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo five',
       description='A dog photo typically captures the essence of a dog’s personality and appearance5.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-jhelmuth-3726314.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo six',
       description='A dog photo typically captures the essence of a dog’s personality and appearance6.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-mdsnmdsnmdsn-1577881.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo seven',
       description='A dog photo typically captures the essence of a dog’s personality and appearance7.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-37401.jpg', 
       user_id =1,
       dog_id=1),
       Photo(
       photo_date = date(2024,1,1),
       title='dog photo eight',
       description='A dog photo typically captures the essence of a dog’s personality and appearance8.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-65928.jpg', 
       user_id =1,
       dog_id=1),
        Photo(
       photo_date = date(2024,1,1),
       title='dog photo nine',
       description='A dog photo typically captures the essence of a dog’s personality and appearance9.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1562983.jpg', 
       user_id =1,
       dog_id=1),
         Photo(
       photo_date = date(2024,1,1),
       title='dog photo ten',
       description='A dog photo typically captures the essence of a dog’s personality and appearance10.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-joey-marrone-709722-1559660.jpg', 
       user_id =1,
       dog_id=1),
           Photo(
       photo_date = date(2024,1,1),
       title='dog photo eleven',
       description='brief introduction11',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-katlovessteve-551628.jpg', 
       user_id =1,
       dog_id=1),
              Photo(
       photo_date = date(2024,1,1),
       title='dog photo twelve',
       description='A dog photo typically captures the essence of a dog’s personality and appearance12.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-nietjuhart-612813.jpg', 
       user_id =1,
       dog_id=1),
               Photo(
       photo_date = date(2024,1,1),
       title='dog photo thirteen',
       description='brief introduction13',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-160846.jpg', 
       user_id =1,
       dog_id=1),
                  Photo(
       photo_date = date(2024,1,1),
       title='dog photo fourteen',
       description='A dog photo typically captures the essence of a dog’s personality and appearance14.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-164186.jpg', 
       user_id =1,
       dog_id=1),
        Photo(
       photo_date = date(2024,1,1),
       title='dog photo fifteen',
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
