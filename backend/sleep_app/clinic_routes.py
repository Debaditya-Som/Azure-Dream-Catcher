from flask import Blueprint, jsonify
import pandas as pd


clinics_routes = Blueprint("clinics_routes", __name__)



@clinics_routes.route('/clinics-data', methods=['GET'])
def get_clinics_data():
    """Endpoint to fetch the clinics data."""
    try:
        
        clinics_data = pd.read_csv('datasets/clinics.csv')
        
        data = clinics_data.to_dict(orient="records")
        return jsonify(data), 200
    except Exception as e:
        
        return jsonify({"error": str(e)}), 500
