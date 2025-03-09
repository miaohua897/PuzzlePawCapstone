from app.models import db, Note, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_notes():
    demo=Note(
       note_date = date(2024,1,1),
       title='note1',
       content="Don't forget to walk the dog today at 3 PM. Make sure to bring the leash and his favorite ball. He loves playing fetch!",
       user_id =1,
       dog_id=1 
    )
    demo1=Note(
       note_date = date(2024,1,1),
       title='note2',
       content="Hi! Just a quick reminder to take care of Bella today. She’ll need her morning walk at 8 AM, and please make sure to keep an eye on her during the walk because she tends to chase after squirrels sometimes. After that, you can give her breakfast — 1 cup of her regular dry food mixed with half a spoonful of peanut butter. She loves that!",
       user_id =1,
       dog_id=1 
    )
    demo2=Note(
       note_date = date(2024,1,1),
       title='note3',
       content="Remember to feed Max his dinner at 7 PM. He’s been a bit picky lately, so try adding some chicken to his bowl.",
       user_id =1,
       dog_id=2 
    )
    demo3=Note(
       note_date = date(2024,1,1),
       title='note3',
       content='this is fourth note',
       user_id =1,
       dog_id=3 
    )
    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.commit()

def undo_notes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM notes"))

    db.session.commit()
