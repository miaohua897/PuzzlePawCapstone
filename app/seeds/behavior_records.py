from app.models import db, Behavior_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_behavior_records():
    demo= Behavior_Record(
       behavior_record_date = date(2024,1,1),
       description='behavior record1',
       behavior_type='behavior record1',
       dog_id=1 
    )
    demo1= Behavior_Record(
       behavior_record_date = date(2024,1,1),
       description='behavior record2',
       behavior_type='behavior record2',
       dog_id=1 
    )
    db.session.add(demo)
    db.session.add(demo1)
    db.session.commit()

def undo_behavior_records():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.behavior_records RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM behavior_records"))

    db.session.commit()