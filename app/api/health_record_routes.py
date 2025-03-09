from flask import Blueprint
from flask_login import login_required
from app.models import User, Health_Record,db
from sqlalchemy import desc
from app.forms.health_record_form import Health_Record_Form

health_record_routes = Blueprint('health_record',__name__)

@health_record_routes.route('/',methods=['GET'])
def get_all_health_record():
    health_records = Health_Record.query.all()
    return {
        health_record.id: health_record.to_dict() for health_record in health_records
    }