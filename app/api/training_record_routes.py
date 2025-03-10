from flask import Blueprint,jsonify,request
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
    training_record = Training_Record.query.get(training_record_id)
    if training_record is None:
        return jsonify({
            'message':'the note is not in the database'
        })
    db.session.delete(training_record)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })

@training_record_routes.route('/',methods=['POST'])
@login_required
def add_health_record():
    form = Training_Record_Form()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit():
        new_training_record = Training_Record(
            training_date = form.data['training_date'],
            training_type= form.data['training_type'],
            trainer_name= form.data['trainer_name'],
            notes = form.data['notes'],
            dog_id = form.data['dog_id']
        )
        db.session.add(new_training_record)
        db.session.commit()
        return jsonify(new_training_record.to_dict()),201
    return form.errors,401

@training_record_routes.route('/<int:training_record_id>',methods=['PUT'])
@login_required
def update_training_record(training_record_id):
    training_record = Training_Record.query.get(training_record_id)
    if  training_record is None:
        return jsonify({'error':'the record is not exist'})
    form = Training_Record_Form()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit(): 
        training_record.training_date = form.data['training_date']
        training_record.training_type= form.data['training_type']
        training_record.trainer_name= form.data['trainer_name']
        training_record.notes = form.data['notes']
        training_record.dog_id = form.data['dog_id']
        
        db.session.commit()
        return jsonify( training_record.to_dict()),201
    return form.errors,401