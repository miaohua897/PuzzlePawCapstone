from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, DecimalField,DateField,SubmitField,BooleanField
from wtforms.validators import DataRequired, URL, ValidationError,Optional
from flask_wtf.file import FileField,FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_EXTENSIONS

class DogForm(FlaskForm):
    dog_name = StringField('dog_name', validators=[DataRequired()])
    age = IntegerField('age', validators=[DataRequired()])
    gender= StringField('gender', validators=[DataRequired()])
    neutered_spayed= StringField('neutered_spayed', validators=[DataRequired()])
    microchip=BooleanField('microchip',validators=[DataRequired()])
    color= StringField('color',validators=[DataRequired()])
    weight= DecimalField('weight', validators=[DataRequired()])
    image_url = FileField("image_url", validators=[Optional(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    birth_date = DateField('birth_date',validators=[DataRequired()])
    breed_name = StringField('breed_name', validators=[DataRequired()])
    description = StringField('description',validators=[DataRequired()])
    medical_allergies = StringField('medical_allergies',validators=[DataRequired()])
    owner_phone_number = StringField('owner_phone_number', validators=[DataRequired()])
    owner_email = StringField('owner_email', validators=[DataRequired()])
    owner_address_line_one = StringField('owner_address_line_one', validators=[DataRequired()])
    owner_address_line_two = StringField('owner_address_line_one', validators=[Optional()])    
    owner_address_city = StringField('owner_address_city', validators=[DataRequired()])
    owner_address_state = StringField('owner_address_state', validators=[DataRequired()])
    owner_address_zip_code = StringField('owner_address_zip_code', validators=[DataRequired()])
    owner_country = StringField('owner_address_country', validators=[DataRequired()])
    user_id = IntegerField('user_id',validators=[DataRequired()])
    submit = SubmitField("Create a dog")