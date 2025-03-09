from flask_wtf import FlaskForm
from wtforms import StringField,DateField,IntegerField, SubmitField,DateTimeField
from wtforms.validators import DataRequired
from datetime import datetime

class Training_Record_Form(FlaskForm):
    training_date = DateField('training_date',validators=[DataRequired()])
    training_type = StringField('training_type', validators=[DataRequired()])
    trainer_name = StringField('trainer_name', validators=[DataRequired()])
    notes = StringField('notes', validators=[DataRequired()])
    create_at = DateTimeField('create_at',default=datetime.today)
    update_at = DateTimeField('update_at', default= datetime.today)
    dog_id = IntegerField('dog_id',validators=[DataRequired()])
    submit = SubmitField("create a training record")