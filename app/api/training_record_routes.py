from flask import Blueprint,jsonify
from flask_login import login_required
from app.models import User, Training_Record,db
from sqlalchemy import desc
from app.forms.training_record_form import Training_Record_Form

training_record_routes = Blueprint('training_record',__name__)

@training_record_routes.route('/',methods=['GET'])
def get_all_training_record():
    training_records = Training_Record.query.all()
    return {training_record.id:training_record.to_dict() for training_record in training_records}

@training_record_routes.route('/<int:training_record_id>',methods=['DELETE'])
@login_required
def delete_health_records(training_record_id):
    health_record = Training_Record.query.get(training_record_id)
    if health_record is None:
        return jsonify({
            'message':'the note is not in the database'
        })
    db.session.delete(health_record)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })