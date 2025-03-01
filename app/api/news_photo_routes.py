from flask import Blueprint, jsonify, request, render_template, redirect
from flask_login import login_required,current_user
from app.models import User, News_Photo, db
from sqlalchemy import desc
from app.forms.news_photo_form import NEWS_PHOTOFORM
from .aws_helpers import (upload_file_to_s3, get_unique_filename)

news_photo_routes = Blueprint('news_photo',__name__)

@news_photo_routes.route('/',methods=['GET'])
def get_all_news_photos():
    news_photos = News_Photo.query.order_by(News_Photo.id.desc()).limit(6).all()
    return {
        news_photo.id: news_photo.to_dict() for news_photo in news_photos
    }

@news_photo_routes.route('/current', methods=['GET'])
@login_required
def get_session_news_photos():
    news_photos = News_Photo.query.filter_by(user_id = current_user.id).order_by(News_Photo.id.desc()).limit(6).all()
    return {
        news_photo.id: news_photo.to_dict() for news_photo in news_photos
    }