from .db import db, environment, SCHEMA,add_prefix_for_prod
from datetime import datetime

friendship = db.Table(
   'friendships',
   # db.Model.metadata,
   db.Column('id',db.Integer, primary_key = True),
   db.Column('user_id',db.Integer,db.ForeignKey(add_prefix_for_prod('users.id'), ondelete='CASCADE'),nullable=False),
   db.Column('friend_id',db.Integer, db.ForeignKey(add_prefix_for_prod('users.id'), ondelete='CASCADE'),nullable=False),
   db.Column("created_at", db.DateTime, default=datetime.today),
   db.Column("updated_at", db.DateTime, default=datetime.today, onupdate=datetime.today),
   db.UniqueConstraint('user_id', 'friend_id', name='_user_friend_uc'),
   schema=SCHEMA if environment == "production" else None
)
