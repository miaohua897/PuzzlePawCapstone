from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User,Photo

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/',methods=['GET'])
def get_all_photos():
    photos = Photo.query.all()
    return {photo.id: photo.to_dict() for photo in photos}