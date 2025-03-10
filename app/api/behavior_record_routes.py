from flask import Blueprint,jsonify
from flask_login import login_required
from app.models import User, Behavior_Record,db
from sqlalchemy import desc
from app.forms.behavior_record_form import Behavior_Record_Form

behavior_record_routes = Blueprint('behavior_record',__name__)

@behavior_record_routes.route('/',methods=['GET'])
def get_all_health_record():
    behavior_records = Behavior_Record.query.all()
    return {
        behavior_record.id: behavior_record.to_dict() for behavior_record in behavior_records
    }

@behavior_record_routes.route('/<int:behavior_record_id>',methods=['DELETE'])
@login_required
def delete_health_records(behavior_record_id):
    health_record = Behavior_Record.query.get(behavior_record_id)
    if health_record is None:
        return jsonify({
            'message':'the note is not in the database'
        })
    db.session.delete(health_record)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })