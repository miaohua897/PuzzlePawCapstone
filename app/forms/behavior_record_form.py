from flask_wtf import FlaskForm
from wtforms import StringField,DateField,IntegerField, SubmitField,DateTimeField
from wtforms.validators import DataRequired
from datetime import datetime

class Behavior_Record_Form(FlaskForm):
    behavior_record_date = DateField('behavior_record_date',validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    behavior_type = StringField('behavior_type', validators=[DataRequired()])
    create_at = DateTimeField('create_at',default=datetime.today)
    update_at = DateTimeField('update_at', default= datetime.today)
    dog_id = IntegerField('dog_id',validators=[DataRequired()])
    submit = SubmitField("create a behavior record")