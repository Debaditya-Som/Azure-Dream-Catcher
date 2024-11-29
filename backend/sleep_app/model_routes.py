from flask import Blueprint, jsonify, request
import pickle
import numpy as np
import os

model_routes = Blueprint("model_routes", __name__)


try:
    model_filename = os.path.join(os.getcwd(), "models", "sleep_quality_model.pkl")
    with open(model_filename, "rb") as file:
        model = pickle.load(file)
    print("Model loaded successfully.")
except Exception as e:
    model = None
    print(f"Error loading model: {e}")


@model_routes.route("/predict", methods=["POST"])
def predict():
    """
    Predict sleep quality based on user-provided input features.
    """
    try:
        
        if model is None:
            return jsonify({"error": "Model not loaded. Check server logs for details."}), 500

        
        if not request.is_json:
            return jsonify({"error": "Request body must be in JSON format."}), 400

        input_data = request.json

        
        required_fields = ["Sleep Duration", "REM Sleep", "Heart Rate"]
        missing_fields = [field for field in required_fields if field not in input_data]
        if missing_fields:
            return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

        
        try:
            features = np.array([
                float(input_data["Sleep Duration"]),
                float(input_data["REM Sleep"]),
                float(input_data["Heart Rate"])
            ]).reshape(1, -1)
        except ValueError as ve:
            return jsonify({"error": "Invalid input: all fields must be numeric."}), 400

        
        print(f"Features for prediction: {features}")

       
        prediction = model.predict(features)
        print(f"Raw prediction result: {prediction}")

        
        result = "Good" if prediction[0] == 1 else "Poor"

        
        return jsonify({
            "Input Data": input_data,
            "Prediction Result": result
        }), 200

    except Exception as e:
       
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500


@model_routes.route("/health", methods=["GET"])
def health_check():
    """
    Health check endpoint to verify API status.
    """
    return jsonify({"status": "API is running"}), 200
