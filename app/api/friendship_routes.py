from flask import Blueprint,request, jsonify
from flask_login import login_required,current_user
from app.models import User, friendship, db
from sqlalchemy import desc,select
from app.forms.friendship_form import FriendshipForm

friendship_routes = Blueprint('friendships',__name__)

@friendship_routes.route('/',methods=['POST'])
@login_required
def add_connetion():
    form = FriendshipForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_id = form.data['user_id']
        friend_id = form.data['friend_id']
        if user_id == friend_id:
            return jsonify({'error':'You cannot be friends with yourself'}),400
        existing_friendship = db.session.query(friendship).filter(
            (friendship.c.user_id == user_id)&(friendship.c.friend_id==friend_id) |
            (friendship.c.user_id == friend_id) & (friendship.c.friend_id == user_id)
        ).first()
        if existing_friendship:
            return jsonify({'error':'there users are already friends'}),400
        db.session.execute(friendship.insert().values(user_id=form.data['user_id'],friend_id=form.data['friend_id']))
        db.session.commit()
        return jsonify({"message": "Friendship added successfully!"}),201
    return form.errors,401

@friendship_routes.route('/<int:friend_id>',methods =['DELETE'])
@login_required
def delete_friendship(friend_id):


    db.session.execute(
        friendship.delete().where(
            (friendship.c.user_id == current_user.id) & (friendship.c.friend_id == friend_id)
        )
    )
    db.session.commit()
    return jsonify({
        'message':'delete if successfully'
    })

@friendship_routes.route('/search',methods=['GET'])
@login_required
def search_friend():
    search_name = request.args.get('search_name')
    exist_user = User.query.filter_by(username =search_name)
    if exist_user is None:
        return {
            'error':'the user is not exist'
        }
    return jsonify(exist_user.to_dict()),201
