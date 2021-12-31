import os
from flask import Flask
from flask_json import FlaskJSON, as_json
from flask_caching import Cache


from flask_cors import CORS

from api.example import example
import logging


config = {
    "DEBUG": bool(os.environ.get("DEBUG", False)),  # some Flask specific configs
    "CACHE_TYPE": "simple",  # Flask-Caching related configs
    "CACHE_DEFAULT_TIMEOUT": 300,
}

app = Flask(__name__)
app.config.from_mapping(config)
CORS(app)
cors = CORS(app, resource={
    r"/*": {
        "origins": "*"
    }
})

app.register_blueprint(example,url_prefix="/example")

formatter = logging.Formatter("[%(asctime)s] {%(pathname)s:%(lineno)d} %(levelname)s - %(message)s")

FlaskJSON(app)