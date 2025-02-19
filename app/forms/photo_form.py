from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DecimalField,DateField,SubmitField
from wtforms.validators import DataRequired, URL, ValidationError,Optional
from flask_wtf.file import FileField,FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_EXTENSIONS

class PhotoForm(FlaskForm):
    photo_date = DateField('photo_date',validators=[DataRequired()])
    title = StringField('title',validators=[DataRequired()])
    description= StringField('description', validators=[DataRequired()])
    image_url = FileField("image_url", validators=[Optional(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    dog_id = IntegerField('dog_id',validators=[DataRequired()])
    user_id = IntegerField('user_id',validators=[DataRequired()])
    submit = SubmitField("Create a dog")