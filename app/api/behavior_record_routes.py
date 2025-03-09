from flask import Blueprint
from flask_login import login_required
from app.models import User, Behavior_Record,db
from sqlalchemy import desc
from app.forms.behavior_record_form import Behavior_Record_Form

behavior_record_routes = Blueprint('behavior_record',__name__)

@behavior_record_routes.route('/',methods=['GET'])
def get_all_health_record():
    behavior_records = Behavior_Record.query.all()
    return {
        behavior_record.id: behavior_record.to_dict() for behavior_record in behavior_records
    }