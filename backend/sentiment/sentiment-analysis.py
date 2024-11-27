import requests

# Azure endpoint and API key
endpoint = "https://dream-catcher-ds.cognitiveservices.azure.com/"  
api_key = "EBwVfmDvkmb8Rsv4CvdzaYZXPhW8o2ciNh4STof2l2w30MmEIhEKJQQJ99AKACYeBjFXJ3w3AAAaACOGr6m8"  

# Define the sentiment analysis API URL
sentiment_url = endpoint + "text/analytics/v3.1/sentiment"

# Text to analyze
documents = {
    "documents": [
        {"id": "1", "language": "en", "text": "I love this product! It's amazing and works like a charm."},
        {"id": "2", "language": "en", "text": "I'm very disappointed with the service I received."},
        {"id": "3", "language": "en", "text": "The product is okay, but not great."}
    ]
}

# Set headers
headers = {
    "Ocp-Apim-Subscription-Key": api_key,
    "Content-Type": "application/json"
}

# Make the API request
response = requests.post(sentiment_url, headers=headers, json=documents)

# Check the response
if response.status_code == 200:
    # Parse JSON response
    sentiment_analysis = response.json()
    for document in sentiment_analysis["documents"]:
        print(f"Document ID: {document['id']}")
        print(f"Sentiment: {document['sentiment']}")
        print(f"Confidence Scores: {document['confidenceScores']}")
        print("-" * 50)
else:
    print(f"Error: {response.status_code}")
    print(f"Message: {response.json()}")
