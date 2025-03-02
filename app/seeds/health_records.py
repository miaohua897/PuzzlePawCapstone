from app.models import db, Health_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_health_records():
    demo=Health_Record(
       record_date = date(2024,1,1),
       description='health record1',
       vet_name='hhh',
       treatment='health record1',
       dog_id=1 
    )
    demo1=Health_Record(
       record_date = date(2024,1,1),
       description='health record2',
       vet_name='hhh',
       treatment='health record2',
       dog_id=1 
    )
    
    db.session.add(demo)
    db.session.add(demo1)
    db.session.commit()

def undo_health_records():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.health_records RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM health_records"))

    db.session.commit()