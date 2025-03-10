from flask import Blueprint,jsonify
from flask_login import login_required
from app.models import User, Health_Record,db
from sqlalchemy import desc
from app.forms.health_record_form import Health_Record_Form

health_record_routes = Blueprint('health_record',__name__)

@health_record_routes.route('/',methods=['GET'])
def get_all_health_record():
    health_records = Health_Record.query.all()
    return {
        health_record.id: health_record.to_dict() for health_record in health_records
    }

@health_record_routes.route('/<int:health_record_id>',methods=['DELETE'])
@login_required
def delete_health_records(health_record_id):
    health_record = Health_Record.query.get(health_record_id)
    if health_record is None:
        return jsonify({
            'message':'the note is not in the database'
        })
    db.session.delete(health_record)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })