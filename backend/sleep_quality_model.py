import pickle
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix

import pandas as pd

from azure.identity import DefaultAzureCredential


df = pd.read_csv('datasets/sleep_data_with_labels.csv')

# Preprocess data
df['Sleep Quality'] = df['Sleep Quality'].apply(lambda x: 1 if x == 'Good' else 0)

# Features and target
X = df[['Sleep Duration (hours)', 'REM Sleep (%)', 'Heart Rate (bpm)']]
y = df['Sleep Quality']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Save the model as a .pkl file
model_filename = "sleep_quality_model.pkl"
with open(model_filename, "wb") as file:
    pickle.dump(model, file)

# Test the model and evaluate performance
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)

print(f"Model saved as {model_filename}")
print(f"Accuracy: {accuracy}")
print(f"Confusion Matrix:\n{conf_matrix}")
