from app.models import db, Training_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_training_records():
    demo= Training_Record(
       training_date = date(2024,1,1),
       note='helloworld',
       training_type='helloworld',
       trainer_name='hi',
       dog_id=1 
    )
    db.session.add(demo)
    db.session.commit()

def undo_training_records():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.training_records RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM training_records"))

    db.session.commit()