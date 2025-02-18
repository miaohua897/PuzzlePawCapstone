from app.models import db, Behavior_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_behavior_records():
    demo= Behavior_Record(
       behavior_record_date = date(2024,1,1),
       description='helloworld',
       behavior_type='helloworld',
       dog_id=1 
    )
    db.session.add(demo)
    db.session.commit()

def undo_behavior_records():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.behavior_records RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM behavior_records"))

    db.session.commit()