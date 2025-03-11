from flask_wtf import FlaskForm
from wtforms import SubmitField,IntegerField
from wtforms.validators import DataRequired
from datetime import datetime

class FriendshipForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    friend_id = IntegerField('friend_id', validators=[DataRequired()])
    submit = SubmitField('create a connetion')

