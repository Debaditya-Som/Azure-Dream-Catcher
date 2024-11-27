from flask import Blueprint, jsonify, request
import pickle
import numpy as np

# Create a blueprint for the model routes
model_routes = Blueprint("model_routes", __name__)

# Load the trained model
try:
    model_filename = "models/sleep_quality_model.pkl"
    with open(model_filename, "rb") as file:
        model = pickle.load(file)
    print("Model loaded successfully.")
except Exception as e:
    model = None
    print(f"Error loading model: {e}")

# Define the route for predictions
@model_routes.route("/predict", methods=["POST"])
def predict():
    """
    Predict sleep quality based on user-provided input features.
    """
    try:
        # Check if model was loaded successfully
        if model is None:
            return jsonify({"error": "Model not loaded. Check server logs for details."}), 500

        # Validate incoming request
        if not request.is_json:
            return jsonify({"error": "Request body must be in JSON format."}), 400

        input_data = request.json

        # Validate the input fields
        required_fields = ["Sleep Duration", "REM Sleep", "Heart Rate"]
        missing_fields = [field for field in required_fields if field not in input_data]
        if missing_fields:
            return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400

        # Ensure input values are numeric
        try:
            features = np.array([
                float(input_data["Sleep Duration"]),
                float(input_data["REM Sleep"]),
                float(input_data["Heart Rate"])
            ]).reshape(1, -1)
        except ValueError as ve:
            return jsonify({"error": "Invalid input: all fields must be numeric."}), 400

        # Debugging: Log the input features
        print(f"Features for prediction: {features}")

        # Perform prediction
        prediction = model.predict(features)
        print(f"Raw prediction result: {prediction}")

        # Interpret the prediction
        result = "Good" if prediction[0] == 1 else "Poor"

        # Return the prediction result
        return jsonify({
            "Input Data": input_data,
            "Prediction Result": result
        }), 200

    except Exception as e:
        # Log the error for debugging
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

# Define a health check route
@model_routes.route("/health", methods=["GET"])
def health_check():
    """
    Health check endpoint to verify API status.
    """
    return jsonify({"status": "API is running"}), 200
