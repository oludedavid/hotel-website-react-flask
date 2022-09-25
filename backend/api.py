# import modules
import datetime
import time
from flask import Flask, jsonify, render_template, redirect

# create a flask application instance
app = Flask(__name__)

# create a simple route
# home route
@app.route("/")
def home():
    name = {"name": "olude first react-flask app"}
    return name


@app.route("/time")
def get_current_time():
    current_time = {"time": time.time()}
    return current_time


# the GET http method is not specified here. This is because, by default, view functions in flask accept GET requests only.
# the current_time dictionary being returned at the end of the function is not being passed as an argument to the popular jsonify function like this jsonify(current_time).
# This is because view functions in Flask can return a dictionary, which Flask then turns to JSON format.
