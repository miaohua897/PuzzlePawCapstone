from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,SubmitField,DateTimeField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField
from datetime import datetime
from app.api.aws_helpers import ALLOWED_EXTENSIONS

class NoteForm(FlaskForm):
    note_date = StringField('note_date', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    content = StringField('content',validators=[DataRequired()])
    create_at = DateTimeField('create_at',default=datetime.today)
    update_at = DateTimeField('update_at', default= datetime.today)
    dog_id = IntegerField('dog_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    submit = SubmitField('create a note')

