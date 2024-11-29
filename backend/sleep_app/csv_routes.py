from flask import Blueprint, jsonify
import pandas as pd
import os

csv_routes = Blueprint("csv_routes", __name__)

@csv_routes.route('/csv-data', methods=['GET'])
def get_csv_data():
    try:
        
        csv_file_path = os.path.join(os.getcwd(), "datasets", "sleep_data_with_labels.csv")
        
        sleep_data = pd.read_csv(csv_file_path)
        
        
        data = sleep_data.to_dict(orient="records")
        
        return jsonify(data)
    except Exception as e:
        
        return jsonify({"error": str(e)}), 500
