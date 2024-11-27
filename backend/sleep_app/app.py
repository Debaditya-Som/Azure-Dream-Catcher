# app.py
from flask import Flask
from model_routes import model_routes
from csv_routes import csv_routes
from sentiments_routes import sentiment_routes  

app = Flask(__name__)

# Register blueprints
app.register_blueprint(model_routes, url_prefix="/model")
app.register_blueprint(csv_routes, url_prefix="/data")
app.register_blueprint(sentiment_routes, url_prefix="/sentiment")  

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
