import requests
data = {
    'sleep_duration': 6.5,
    'rem_sleep': 22.0,
    'heart_rate': 70
}
url = 'http://127.0.0.1:5000/predict'
response = requests.post(url, json=data)
print(response.json())
