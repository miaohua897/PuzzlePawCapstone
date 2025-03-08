from app.models import db, Note, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_notes():
    demo=Note(
       note_date = date(2024,1,1),
       title='note1',
       content='this is first note',
       user_id =1,
       dog_id=1 
    )
    demo1=Note(
       note_date = date(2024,1,1),
       title='note2',
       content='this is second note',
       user_id =1,
       dog_id=1 
    )
    demo2=Note(
       note_date = date(2024,1,1),
       title='note3',
       content='this is third note',
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
