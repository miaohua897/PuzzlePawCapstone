from flask import Blueprint, jsonify, request,render_template,redirect
from flask_login import login_required, current_user
from app.models import User, Note,db
from sqlalchemy import desc
from app.forms.note_form import NoteForm
from .aws_helpers import (upload_file_to_s3, get_unique_filename)

note_routes = Blueprint('notes',__name__)

@note_routes.route('/', methods=['GET'])
def get_all_notes():
    notes = Note.query.all()
    return { note.id: note.to_dict() for note in notes}

@note_routes.route('/current', methods=['GET'])
@login_required
def get_session_notes():
    notes = Note.query.all()
    return {note.id:note.to_dict() for note in notes}

@note_routes.route('/',methods=['POST'])
@login_required
def add_note():
    form = NoteForm()
    form['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
        new_note = Note(
            note_date=form.data['note_date'],
            title =form.data['title'],
            content=form.data['content'],
            share = form.data['share'],
            user_id=form.data['user_id'],
            dog_id=form.data['dog_id']
        )
        db.session.add(new_note)
        db.session.commit()
        return jsonify(new_note.to_dict()),201
    return form.errors,401

@note_routes.route('/<int:note_id>',methods=['PUT'])
@login_required
def update_note(note_id):
    note = Note.query.get(note_id)
    if note is None:
        return jsonify({'error':'the note is note exist'})
    form = NoteForm()
    form['csrf_token'].data= request.cookies['csrf_token']
    if form.validate_on_submit():
        note.note_date = form.data['note_date']
        note.title = form.data['title']
        note.share = form.data['share']
        note.content = form.data['content']
        note.dog_id = form.data['dog_id']
        note.user_id = form.data['user_id']

        db.session.commit()
        return jsonify(note.to_dict()),201
    return form.errors,401

@note_routes.route('/<int:note_id>', methods=['DELETE'])
@login_required
def delete_note(note_id):
    note = Note.query.get(note_id)
    if note is None:
        return jsonify({
            'message':'the note is not in the database'
        })
    db.session.delete(note)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })
    
        
        