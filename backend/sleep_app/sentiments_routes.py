# sentiment_routes.py
from flask import Blueprint, request, jsonify
import requests

# Initialize blueprint
sentiment_routes = Blueprint('sentiment_routes', __name__)

# Azure endpoint and API key
endpoint = "https://dream-catcher-ds.cognitiveservices.azure.com/"  # Replace with your Azure endpoint
api_key = "EBwVfmDvkmb8Rsv4CvdzaYZXPhW8o2ciNh4STof2l2w30MmEIhEKJQQJ99AKACYeBjFXJ3w3AAAaACOGr6m8"  # Replace with your API key

# Define the sentiment analysis API URL
sentiment_url = endpoint + "text/analytics/v3.1/sentiment"

@sentiment_routes.route('/predict-sentiment', methods=['POST'])
def predict_sentiment():
    try:
        # Extract text from the request
        user_input = request.json.get('text', '')
        
        # Prepare data for the API
        documents = {
            "documents": [
                {"id": "1", "language": "en", "text": user_input}
            ]
        }

        # Set headers for the API request
        headers = {
            "Ocp-Apim-Subscription-Key": api_key,
            "Content-Type": "application/json"
        }

        # Call Azure's Sentiment Analysis API
        response = requests.post(sentiment_url, headers=headers, json=documents)

        if response.status_code == 200:
            sentiment_analysis = response.json()
            sentiment = sentiment_analysis["documents"][0]["sentiment"]
            confidence_scores = sentiment_analysis["documents"][0]["confidenceScores"]
            return jsonify({
                "sentiment": sentiment,
                "confidenceScores": confidence_scores
            })
        else:
            return jsonify({"error": response.json()}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500
