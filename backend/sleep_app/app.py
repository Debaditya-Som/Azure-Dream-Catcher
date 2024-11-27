from flask import Flask, jsonify
import pickle
import numpy as np

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model_filename = "models/sleep_quality_model.pkl"
with open(model_filename, "rb") as file:
    model = pickle.load(file)

# Define the route for predictions
@app.route("/predict", methods=["GET"])
def predict():
    """
    Predict sleep quality based on predefined input features.
    Input is hardcoded for testing purposes.
    """
    try:
        # Hardcoded input data for testing
        input_data = {
            "Sleep Duration": 7.5,  # hours
            "REM Sleep": 20.0,      # percentage
            "Heart Rate": 65        # bpm
        }

        # Extract features from input data
        features = np.array([
            input_data["Sleep Duration"],
            input_data["REM Sleep"],
            input_data["Heart Rate"]
        ]).reshape(1, -1)

        # Make prediction
        prediction = model.predict(features)
        result = "Good" if prediction[0] == 1 else "Poor"

        # Return result as JSON
        return jsonify({"Input Data": input_data, "Sleep Quality": result}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Define a health check route
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "API is running"}), 200

# Run the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
