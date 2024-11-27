# Azure-Dream-Catcher

This web-based application predicts sleep quality based on user input, including sleep duration, REM sleep percentage, and heart rate. By using a machine learning model, the app classifies the sleep quality as either **Good** or **Poor**.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview
This application consists of two main components:
1. **Backend (Flask API)**: A RESTful API that accepts user input and uses a machine learning model to make predictions.
2. **Frontend (ReactJS)**: A user-friendly interface where users can input their data and receive a prediction about their sleep quality.

### Functionalities
- **User Input Form**: Users can enter their sleep data: Sleep Duration, REM Sleep, and Heart Rate.
- **Prediction**: The app predicts the quality of sleep as either "Good" or "Poor" based on the input data.
- **Minimalistic Design**: The application is designed with simplicity in mind, featuring a clean and intuitive interface.

## Tech Stack

### Backend
- **Flask**: A lightweight Python web framework used to create the REST API for processing input and returning predictions.
- **Python**: Used for backend logic and machine learning model integration.
- **Pickle**: For loading and saving the machine learning model.
- **NumPy**: Handles numerical data processing.

### Frontend
- **ReactJS**: A JavaScript library for building dynamic user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used to design the frontend in a minimalist, aesthetically pleasing way.
- **Axios**: A promise-based HTTP client used to communicate with the Flask API.

### Machine Learning
- **Model**: The machine learning model (saved as a `.pkl` file) classifies sleep quality based on input features like sleep duration, REM sleep percentage, and heart rate.

## Features
- **User Input Form**: Users can input three features:
  - **Sleep Duration** (in hours)
  - **REM Sleep** (percentage)
  - **Heart Rate** (beats per minute)
  
- **Prediction Result**: After submission, the model predicts whether the sleep quality is "Good" or "Poor".
- **API Integration**: The frontend interacts with the Flask backend through a REST API.
- **Responsive Design**: The layout is responsive, adapting to different screen sizes.
- **Minimalistic UI**: The application features a clean and simple design powered by Tailwind CSS.

