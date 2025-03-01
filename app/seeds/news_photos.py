from app.models import db, News_Photo, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_news_photos():
    demo=[
       News_Photo(
       photo_date = date(2023, 5, 10),
       title='dog photo one',
       description='A dog photo typically captures the essence of a dog’s personality and appearance.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1124002.jpg', 
       user_id =1),
       News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo eight',
       description='A dog photo typically captures the essence of a dog’s personality and appearance8.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-65928.jpg', 
       user_id =1
       ),
       News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo nine',
       description='A dog photo typically captures the essence of a dog’s personality and appearance9.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-aloismoubax-1562983.jpg', 
       user_id =1),
       News_Photo(
       photo_date = date(2023, 5, 10),
       title='dog photo ten',
       description='A dog photo typically captures the essence of a dog’s personality and appearance10.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-joey-marrone-709722-1559660.jpg', 
       user_id =1),
       News_Photo(
      photo_date = date(2023, 5, 10),
       title='dog photo eleven',
       description='brief introduction11',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-katlovessteve-551628.jpg', 
       user_id =1),
        News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo twelve',
       description='A dog photo typically captures the essence of a dog’s personality and appearance12.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-nietjuhart-612813.jpg', 
       user_id =1),
        News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo thirteen',
       description='brief introduction13',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-160846.jpg', 
       user_id =1),
        News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo fourteen',
       description='A dog photo typically captures the essence of a dog’s personality and appearance14.',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-pixabay-164186.jpg', 
       user_id =1),
        News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo fifteen',
       description='brief introduction15',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-simonakidric-2607544.jpg', 
       user_id =1),
       News_Photo(
        photo_date = date(2023, 5, 10),
       title='dog photo sixteen',
       description='brief introduction16',
       image_url='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-ohshineon-33273.jpg', 
       user_id =1)
    ]
    db.session.add_all(demo)
    db.session.commit()

def undo_news_photos():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.news_photos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM news_photos"))

    db.session.commit()
