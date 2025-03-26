"""add-tables

Revision ID: 1a3235cc27b0
Revises: 
Create Date: 2025-03-10 20:10:40.847918

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")
# revision identifiers, used by Alembic.
revision = '1a3235cc27b0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('dogs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dog_name', sa.String(length=30), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('gender', sa.String(length=30), nullable=False),
    sa.Column('neutered_spayed', sa.String(length=30), nullable=False),
    sa.Column('microchip', sa.Boolean(), nullable=True),
    sa.Column('color', sa.String(length=30), nullable=False),
    sa.Column('weight', sa.Numeric(precision=6, scale=2), nullable=False),
    sa.Column('image_url', sa.String(length=2000), nullable=False),
    sa.Column('birth_date', sa.Date(), nullable=False),
    sa.Column('breed_name', sa.String(length=30), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=False),
    sa.Column('medical_allergies', sa.String(length=200), nullable=False),
    sa.Column('owner_phone_number', sa.String(length=20), nullable=False),
    sa.Column('owner_email', sa.String(length=100), nullable=False),
    sa.Column('owner_address_line_one', sa.String(length=200), nullable=False),
    sa.Column('owner_address_line_two', sa.String(length=200), nullable=False),
    sa.Column('owner_address_city', sa.String(length=30), nullable=False),
    sa.Column('owner_address_state', sa.String(length=30), nullable=False),
    sa.Column('owner_address_zip_code', sa.Integer(), nullable=False),
    sa.Column('owner_country', sa.String(length=30), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('friendships',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('friend_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['friend_id'], ['users.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_id', 'friend_id', name='_user_friend_uc')
    )
    op.create_table('news_photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('photo_date', sa.Date(), nullable=False),
    sa.Column('title', sa.String(length=30), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('image_url', sa.String(length=2000), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('behavior_records',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('behavior_record_date', sa.Date(), nullable=False),
    sa.Column('behavior_type', sa.String(length=30), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('dog_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dog_id'], ['dogs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('health_records',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('record_date', sa.Date(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('treatment', sa.Text(), nullable=False),
    sa.Column('vet_name', sa.String(length=30), nullable=False),
    sa.Column('dog_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['dog_id'], ['dogs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('notes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('note_date', sa.Date(), nullable=False),
    sa.Column('title', sa.String(length=30), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('share', sa.Boolean(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('dog_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dog_id'], ['dogs.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('content')
    )
    op.create_table('photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('photo_date', sa.Date(), nullable=False),
    sa.Column('title', sa.String(length=30), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('image_url', sa.String(length=2000), nullable=False),
    sa.Column('share', sa.Boolean(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('dog_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dog_id'], ['dogs.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('training_records',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('training_date', sa.Date(), nullable=False),
    sa.Column('training_type', sa.String(length=30), nullable=False),
    sa.Column('trainer_name', sa.String(length=30), nullable=False),
    sa.Column('notes', sa.Text(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('dog_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dog_id'], ['dogs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE dogs SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE notes SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE photos SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE news_photos SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE behavior_records SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE health_records SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE training_records SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE friendships SET SCHEMA {SCHEMA};")


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('training_records')
    op.drop_table('photos')
    op.drop_table('notes')
    op.drop_table('health_records')
    op.drop_table('behavior_records')
    op.drop_table('news_photos')
    op.drop_table('friendships')
    op.drop_table('dogs')
    op.drop_table('users')
    # ### end Alembic commands ###
