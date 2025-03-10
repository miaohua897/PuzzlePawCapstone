from flask import Blueprint,jsonify,request
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

@health_record_routes.route('/',methods=['POST'])
@login_required
def add_health_record():
    form = Health_Record_Form()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit():
        new_health_record = Health_Record(
            record_date = form.data['record_date'],
            description= form.data['description'],
            treatment= form.data['treatment'],
            vet_name = form.data['vet_name'],
            dog_id = form.data['dog_id']
        )
        db.session.add(new_health_record)
        db.session.commit()
        return jsonify(new_health_record.to_dict()),201
    return form.errors,401

@health_record_routes.route('/<int:health_record_id>',methods=['PUT'])
@login_required
def update_health_record(health_record_id):
    health_record = Health_Record.query.get(health_record_id)
    if health_record is None:
        return jsonify({'error':'the record is not exist'})
    form = Health_Record_Form()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit(): 
        health_record.record_date = form.data['record_date']
        health_record.description= form.data['description']
        health_record.treatment= form.data['treatment']
        health_record.vet_name = form.data['vet_name']
        health_record.dog_id = form.data['dog_id']
        
        db.session.commit()
        return jsonify(health_record.to_dict()),201
    return form.errors,401