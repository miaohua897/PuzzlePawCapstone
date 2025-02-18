from app.models import db, Health_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_health_records():
    demo=Health_Record(
       record_date = date(2024,1,1),
       description='helloworld',
       vet_name='helloworld',
       treatment='helloworld',
       dog_id=1 
    )
    db.session.add(demo)
    db.session.commit()

def undo_health_records():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.health_records RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM health_records"))

    db.session.commit()