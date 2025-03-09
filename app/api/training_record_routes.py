from flask import Blueprint
from flask_login import login_required
from app.models import User, Training_Record,db
from sqlalchemy import desc
from app.forms.training_record_form import Training_Record_Form

training_record_routes = Blueprint('training_record',__name__)

@training_record_routes.route('/',methods=['GET'])
def get_all_training_record():
    training_records = Training_Record.query.all()
    return {training_record.id:training_record.to_dict() for training_record in training_records}