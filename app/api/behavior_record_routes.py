from flask import Blueprint,jsonify,request
from flask_login import login_required
from app.models import User, Behavior_Record,db
from sqlalchemy import desc
from app.forms.behavior_record_form import Behavior_Record_Form

behavior_record_routes = Blueprint('behavior_record',__name__)

@behavior_record_routes.route('/',methods=['GET'])
def get_all_behavior_record():
    behavior_records = Behavior_Record.query.all()
    return {
        behavior_record.id: behavior_record.to_dict() for behavior_record in behavior_records
    }

@behavior_record_routes.route('/<int:behavior_record_id>',methods=['DELETE'])
@login_required
def delete_behavior_records(behavior_record_id):
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

@behavior_record_routes.route('/',methods=['POST'])
@login_required
def add_behavior_record():
    form = Behavior_Record_Form()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit():
        new_behavior_record = Behavior_Record(
           behavior_record_date = form.data['behavior_record_date'],
            behavior_type= form.data['behavior_type'],
            description= form.data['description'],
            dog_id = form.data['dog_id']
        )
        db.session.add(new_behavior_record)
        db.session.commit()
        return jsonify(new_behavior_record.to_dict()),201
    return form.errors,401

@behavior_record_routes.route('/<int:behavior_record_id>',methods=['PUT'])
@login_required
def update_behavior_record(behavior_record_id):
    behavior_record = Behavior_Record.query.get(behavior_record_id)
    if  behavior_record is None:
        return jsonify({'error':'the record is not exist'})
    form = Behavior_Record_Form()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit(): 
        behavior_record.behavior_record_date = form.data['behavior_record_date']
        behavior_record.description= form.data['description']
        behavior_record.behavior_type= form.data['behavior_type']
        behavior_record.dog_id = form.data['dog_id']
        
        db.session.commit()
        return jsonify( behavior_record.to_dict()),201
    return form.errors,401