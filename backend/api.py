from flask import Flask

app = Flask(__name__)


@app.route("/jolly")
def hello_world():
    return {"num": "ice"}
