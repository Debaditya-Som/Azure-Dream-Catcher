import joblib
import json
import numpy as np
from azureml.core.model import Model

# Initialization function that loads the model
def init():
    global model
    # Load the registered model from Azure ML
    model_path = Model.get_model_path('sleep_quality_model')
    model = joblib.load(model_path)

# Scoring function that takes input and returns the prediction
def run(data):
    try:
        # Parse the input data
        data = json.loads(data)
        input_data = np.array([data['Sleep Duration (hours)', 'REM Sleep (%)', 'Heart Rate (bpm)']])

        # Make predictions
        prediction = model.predict(input_data)

        # Return the result
        return json.dumps({'prediction': prediction.tolist()})

    except Exception as e:
        error = str(e)
        return json.dumps({'error': error})
