from flask import Blueprint
from flask_json import as_json
from flask import request


example = Blueprint("example", __name__)


@example.route('test',methods=['GET','POST'])
@as_json
def test():
    return "Hello world"