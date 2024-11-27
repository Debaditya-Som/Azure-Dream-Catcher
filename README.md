# Azure-Dream-Catcher

This web-based application predicts sleep quality based on user input, including sleep duration, REM sleep percentage, and heart rate. By using a machine learning model, the app classifies the sleep quality as either **Good** or **Poor**.

## Features
- **Sleep Quality Prediction:** Predicts the quality of sleep based on parameters like sleep duration, REM sleep, and heart rate.
- **Sentiment Analysis:** Analyzes the sentiment of the dream description entered by the user to determine the overall mood or emotion in the text.

## Overview
This application consists of two main components:
1. **Backend (Flask API)**: A RESTful API that accepts user input and uses a machine learning model to make predictions.
2. **Frontend (ReactJS)**: A user-friendly interface where users can input their data and receive a prediction about their sleep quality.

### Functionalities
- **User Input Form**: Users can enter their sleep data: Sleep Duration, REM Sleep, and Heart Rate.
- **Prediction**: The app predicts the quality of sleep as either "Good" or "Poor" based on the input data.
- **Minimalistic Design**: The application is designed with simplicity in mind, featuring a clean and intuitive interface.

## Tech Stack
- **Backend:** 
  - Python (Flask)
  - Azure ML Workspace (for model training)
  - Azure AI (for Sentiment Analysis)
- **Frontend:** 
  - React.js
  - Tailwind CSS 

## Model Training
The sleep quality prediction model was trained using **Azure ML Workspace**. The dataset was uploaded and stored in **Azure Blob Storage**, ensuring scalability and easy access and the model was trained in **Azure ML Workspace**.

## Sentiment Analysis
For sentiment analysis, the project leverages **Azure AI**'s **Text Analytics API**. The API is used to analyze the sentiment of the dream descriptions provided by the users. Based on the emotional tone, the API classifies the text into different sentiment categories such as positive, neutral, or negative.

## Credits
- Azure ML Workspace: Used to train and deploy the sleep quality prediction model.
- Azure AI (Text Analytics API): Used for sentiment analysis on user-provided dream descriptions
