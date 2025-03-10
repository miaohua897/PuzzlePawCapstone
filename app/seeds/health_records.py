from app.models import db, Health_Record, environment,SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_health_records():
    demo=Health_Record(
        record_date=date(2024, 1, 1),
        description='Routine checkup, healthy weight and vital signs.',
        vet_name='Dr. HHH',
        treatment='General Health Checkup',
        dog_id=1
    )
    demo1=Health_Record(
        record_date=date(2024, 2, 15),
        description='Vaccination booster for rabies and distemper.',
        vet_name='Dr. HHH',
        treatment='Vaccination Booster',
        dog_id=2
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