from flask import Blueprint, jsonify, request,render_template,redirect
from flask_login import login_required,current_user
from app.models import User,Photo,db
from sqlalchemy import desc
from app.forms.photo_form import PhotoForm
from .aws_helpers import (
    upload_file_to_s3, get_unique_filename)

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/',methods=['GET'])
def get_all_photos():
    photos = Photo.query.all()
    return {photo.id: photo.to_dict() for photo in photos}

@photo_routes.route('/share', methods=['GET'])
def get_all_share_photos():
    photos = Photo.query.filter_by(share=True).order_by(Photo.id.desc()).all()
    return {photo.id:{
          'id': photo.id,
          'title':photo.title,
          'description':photo.description,
          'image_url':photo.image_url,
          'share':photo.share,
          'owner':photo.owner.to_dict()
        } for photo in photos}

@photo_routes.route('/current',methods=['GET'])
@login_required
def get_session_photos():
    photos = Photo.query.filter_by(user_id=current_user.id).order_by(Photo.id.desc()).all()
    return {photo.id: photo.to_dict() for photo in photos}

@photo_routes.route('/',methods=['POST'])
@login_required
def add_photo():
    form = PhotoForm()
    form ['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():
        image = form.data["image_url"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)

        new_photo = Photo(photo_date = form.data['photo_date'],
             title=form.data['title'],
             description= form.data['description'],
             image_url=upload['url'],
             share = form.data['share'],
             dog_id= form.data['dog_id'],
             user_id= form.data['user_id'])
        db.session.add(new_photo)
        db.session.commit()
        return jsonify(new_photo.to_dict()),201
    
    return form.errors,401



@photo_routes.route('/<int:photo_id>',methods=['DELETE'])
@login_required
def delete_photo(photo_id):
    photo = Photo.query.get(photo_id)
    if photo is None:
        return jsonify({
        'message':'the photo is not in database'
         })
    db.session.delete(photo)
    db.session.commit()
    return jsonify({
        'message':'delete it successfully'
    })

@photo_routes.route('/<int:photo_id>',methods=['PUT'])
@login_required
def update_photo(photo_id):

    photo = Photo.query.get(photo_id)
    if photo is None:
        return  jsonify({"error": 'the photo is not exist'})
    form = PhotoForm()
    form ['csrf_token'].data=request.cookies['csrf_token']
    if form.validate_on_submit():

        image = form.data["image_url"]
        if image is not None:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            photo.image_url=upload['url']
        photo.photo_date = form.data['photo_date']
        photo.title = form.data['title']
        photo.share = form.data['share']
        photo.description = form.data['description']
        photo.dog_id = form.data['dog_id']
        photo.user_id = form.data['user_id']

        db.session.commit()
        return jsonify(photo.to_dict()),201
    
    return form.errors,401



