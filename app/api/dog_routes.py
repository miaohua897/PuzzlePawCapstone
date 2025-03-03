from flask import Blueprint, jsonify,request,redirect,render_template
from flask_login import login_required,current_user
from app.models import User,Dog,db
from app.forms.dog_form import DogForm
from .aws_helpers import (
    upload_file_to_s3, get_unique_filename)

dog_routes = Blueprint('dogs', __name__)

@dog_routes.route('/',methods=['GET'])
def get_all_dogs():
    dogs = Dog.query.all()
    return {dog.id: dog.to_dict() for dog in dogs}

@dog_routes.route('/current',methods=['GET'])
@login_required
def get_session_dogs():
    dogs = Dog.query.filter_by(user_id=current_user.id).all()
    return {dog.id: dog.to_dict() for dog in dogs}

@dog_routes.route('/',methods=['POST'])
@login_required
def add_dog():
    form = DogForm()
    form ['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
       
        image = form.data["image_url"]
        if image is not None:
                image.filename = get_unique_filename(image.filename)
                upload = upload_file_to_s3(image)

        new_dog = Dog(dog_name = form.data['dog_name'],
             age=form.data['age'],
             gender= form.data['gender'],
             neutered_spayed= form.data['neutered_spayed'],
             microchip=form.data['microchip'],
             color = form.data['color'],
             weight = form.data['weight'],
             birth_date = form.data['birth_date'],
             breed_name = form.data['breed_name'],
             description=form.data['description'],
             medical_allergies=form.data['medical_allergies'],
             owner_phone_number=form.data['owner_phone_number'],
             owner_email=form.data['owner_email'],
             owner_address_line_one=form.data['owner_address_line_one'],
             owner_address_line_two=form.data['owner_address_line_two'],
             owner_address_city=form.data['owner_address_city'],
             owner_address_state=form.data['owner_address_state'],
             owner_address_zip_code=form.data['owner_address_zip_code'],
             owner_country=form.data['owner_country'],
            #  image_url='http://hell.png',
             image_url=upload['url'],
             user_id= form.data['user_id'])
        db.session.add(new_dog)
        db.session.commit()
        return jsonify(new_dog.to_dict()),201
    return form.errors,401
    # if form.errors:
        # print(form.errors)
        
  

@dog_routes.route('/<int:dog_id>',methods=['DELETE'])
@login_required
def delete_dog(dog_id):
    dog = Dog.query.get(dog_id)
    if dog is None:
        return jsonify({
        'message':'the dog is not in database'
         })
    db.session.delete(dog)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })

@dog_routes.route('/<int:dog_id>',methods=['PUT'])
@login_required
def update_dog(dog_id):
    form = DogForm()
    form ['csrf_token'].data=request.cookies['csrf_token']
    dog = Dog.query.get(dog_id)
    if dog is None :
        return jsonify({
            'error':'the dog is not exist'
        })
    if form.validate_on_submit():

        image = form.data["image_url"]
        if image is not None:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            dog.image_url=upload['url']
        dog.dog_name=form.data['dog_name']
        dog.age=form.data['age']
        dog.gender= form.data['gender']
        dog.neutered_spayed= form.data['neutered_spayed']
        dog.color = form.data['color']
        dog.weight = form.data['weight']
        dog.birth_date = form.data['birth_date']
        dog.breed_name = form.data['breed_name']
        dog.description=form.data['description']
        dog.medical_allergies=form.data['medical_allergies']
        dog.owner_phone_number=form.data['owner_phone_number']
        dog.owner_email=form.data['owner_email']
        dog.owner_address_line_one=form.data['owner_address_line_one']
        dog.owner_address_line_two=form.data['owner_address_line_two']
        dog.owner_address_city=form.data['owner_address_city']
        dog.owner_address_state=form.data['owner_address_state']
        dog.owner_address_zip_code=form.data['owner_address_zip_code']
        dog.owner_country=form.data['owner_country']
        dog.user_id= form.data['user_id']
      
        db.session.commit()
        return jsonify(dog.to_dict()),201
    return form.errors,401
    # if form.errors:
    #     print(form.errors)
