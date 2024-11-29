from flask import Flask
from model_routes import model_routes
from csv_routes import csv_routes
from sentiments_routes import sentiment_routes  
from clinic_routes import clinics_routes
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.register_blueprint(model_routes, url_prefix="/model")
app.register_blueprint(csv_routes, url_prefix="/data")
app.register_blueprint(sentiment_routes, url_prefix="/sentiment")  
app.register_blueprint(clinics_routes,url_prefix="/api")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
