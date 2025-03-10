from app.models import db, Behavior_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_behavior_records():
    demo= Behavior_Record(
       behavior_record_date = date(2024,1,1),
       description='Separation anxiety occurs when a dog becomes excessively anxious when separated from their owner. This often results in destructive behavior or inappropriate elimination.',
       behavior_type='Separation Anxiety',
       dog_id=1 
    )
    demo1= Behavior_Record(
       behavior_record_date = date(2024,1,1),
       description='This is when a dog barks excessively, which may be due to boredom, attention-seeking, fear, or territorial behavior.',
       behavior_type='Excessive Barking',
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