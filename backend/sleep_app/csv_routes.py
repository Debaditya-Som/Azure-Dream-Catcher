from flask import Blueprint, jsonify
import pandas as pd

# Create a blueprint for the CSV routes
csv_routes = Blueprint("csv_routes", __name__)

@csv_routes.route('/csv-data', methods=['GET'])
def get_csv_data():
    try:
        sleep_data = pd.read_csv('datasets/sleep_data_with_labels.csv')
        data = sleep_data.to_dict(orient="records")
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
