from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User,Dog

dog_routes = Blueprint('dogs', __name__)

@dog_routes.route('/',methods=['GET'])
def get_all_dogs():
    dogs = Dog.query.all()
    return {dog.id: dog.to_dict() for dog in dogs}
