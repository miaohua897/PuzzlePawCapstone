from app.models import db, friendship, environment,SCHEMA
from sqlalchemy.sql import text

def seed_friendship():
    db.session.execute(friendship.insert().values(user_id=1, friend_id=2))
    db.session.execute(friendship.insert().values(user_id=1,friend_id=3))
    db.session.commit()

def undo_friendship():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.friendships RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM friendships"))

    db.session.commit()

