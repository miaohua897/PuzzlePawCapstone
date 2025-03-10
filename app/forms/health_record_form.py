from flask_wtf import FlaskForm
from wtforms import StringField,DateField,IntegerField, SubmitField,DateTimeField
from wtforms.validators import DataRequired
from datetime import datetime

class Health_Record_Form(FlaskForm):
    record_date = DateField('record_date',validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    treatment = StringField('treatment', validators=[DataRequired()])
    vet_name = StringField('vet_name', validators=[DataRequired()])
    create_at = DateTimeField('create_at',default=datetime.today)
    update_at = DateTimeField('update_at', default= datetime.today)
    dog_id = IntegerField('dog_id',validators=[DataRequired()])
    submit = SubmitField("create a health record")