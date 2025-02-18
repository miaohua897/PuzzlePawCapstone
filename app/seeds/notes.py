from app.models import db, Note, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_notes():
    demo=Note(
       note_date = date(2024,1,1),
       title='helloworld',
       content='helloworld',
       user_id =1,
       dog_id=1 
    )
    db.session.add(demo)
    db.session.commit()

def undo_notes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM notes"))

    db.session.commit()
