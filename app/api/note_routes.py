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