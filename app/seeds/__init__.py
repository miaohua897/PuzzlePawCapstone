from flask.cli import AppGroup
from .users import seed_users, undo_users
from .dogs import seed_dogs, undo_dogs
from .notes import seed_notes, undo_notes
from .photos import seed_photos,undo_photos
from .health_records import seed_health_records,undo_health_records
from .behavior_records import seed_behavior_records,undo_behavior_records
from .training_records import seed_training_records,undo_training_records
from .news_photos import seed_news_photos,undo_news_photos

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_dogs()
        undo_notes()
        undo_photos()
        undo_news_photos()
        undo_health_records()
        undo_behavior_records()
        undo_training_records()
    seed_users()
    seed_dogs()
    seed_notes()
    seed_photos()
    seed_news_photos()
    seed_health_records()
    seed_behavior_records()
    seed_training_records()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_dogs()
    undo_notes()
    undo_photos()
    undo_news_photos()
    undo_health_records()
    undo_behavior_records()
    undo_training_records()
    # Add other undo functions here
