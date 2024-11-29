 # Azure-Dream-Catcher


<p align="center">
  <img src="https://github.com/user-attachments/assets/0485e4f8-ffd2-4560-a4c0-9e6aa102549f" alt="main_logo">
</p>
<p align="center">
<img src="https://img.shields.io/badge/Azure_ML-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Azure ML Workspace" width="100" />
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" width="100" />
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" width="100" />
<img src="https://img.shields.io/badge/Azure_AI-5C2D91?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Azure AI" width="100" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="logo" width="100" />
   <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo" width="100" />

   <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="logo" width="100" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="logo" width="100" />
  </p>
This project is a web application designed to using Azure AI and ML tools to analyze dream sentiments, predict sleep quality, and locate nearby clinics for comprehensive sleep health insights.


## Features
- **Sleep Quality Prediction:** Predicts the quality of sleep based on parameters like sleep duration, REM sleep, and heart rate.
- **Sentiment Analysis:** Analyzes the sentiment of the dream description entered by the user to determine the overall mood or emotion in the text.
- **Nearby Clinics Locator**: Helps users locate nearby clinics or counseling centers based on their current location, providing easy access to professional assistance when needed.

## Project Workflow

![image](https://github.com/user-attachments/assets/0627ff30-3fea-47d2-969c-bb76a002eac3)


## Overview
This application consists of two main components:
1. **Backend (Flask API)**: A RESTful API that accepts user input and uses a machine learning model to make predictions.
2. **Frontend (ReactJS)**: A user-friendly interface where users can input their data and receive a prediction about their sleep quality.

### Functionalities
- **User Input Form**: Users can enter their sleep data: Sleep Duration, REM Sleep, and Heart Rate.
- **Prediction**: The app predicts the quality of sleep as either "Good" or "Poor" based on the input data.
- **Locate Nearest Clinics** : Locate nearest sleep clinics in an interactive map. 
- **Minimalistic Design**: The application is designed with simplicity in mind, featuring a clean and intuitive interface.

## Tech Stack
- **Backend:** 
  - Python (Flask)
  - Azure ML Workspace (for model training)
  - Azure AI Cognitive Services (for Sentiment Analysis)
- **Frontend:** 
  - React.js
  - Tailwind CSS
- **Deployment:**
  - Docker
  - Docker Compose
  - Azure App Services
  - Azure Container Registry
    

## Model Training
The sleep quality prediction model was trained using **Azure ML Workspace**. The dataset was uploaded and stored in **Azure Blob Storage**, ensuring scalability and easy access and the model was trained in **Azure ML Workspace**.

## Sentiment Analysis
For sentiment analysis, the project leverages **Azure AI**'s **Text Analytics API**. The API is used to analyze the sentiment of the dream descriptions provided by the users. Based on the emotional tone, the API classifies the text into different sentiment categories such as positive, neutral, or negative.

## Nearby Clinics Locator
The project integrates a Nearby Sleep Clinics Locator feature that uses geolocation services to assist users in finding the nearest clinics or counseling centers. This functionality aims to ensure users can easily access professional help based on their current location.

## Deployments
This project has been deployed using Docker, Docker Compose, Azure App Services, and Azure Container Registry for efficient, scalable, and containerized deployment. Below are the details of the deployment process

## Credits

- **Azure ML Workspace**  
  Used to train and deploy the **sleep quality prediction model**, leveraging scalable cloud-based machine learning tools to streamline the model development and deployment process.

- **Azure AI (Text Analytics API)**  
  Utilized for performing **sentiment analysis** on user-provided dream descriptions, enabling accurate emotional tone classification (positive, neutral, or negative).

- **Azure Blob Storage**  
  Facilitated secure storage and retrieval of datasets used for training the machine learning models.

- **Azure App Services**  
  Hosted the web application, ensuring high availability, scalability, and integration with other Azure services like Azure Container Registry.

- **Azure Container Registry**  
  Served as a central repository for managing and securely storing Docker images used for deploying the project in a containerized environment.

- **Docker and Docker Compose**  
  Enabled consistent containerization and multi-container orchestration for deploying the application.

  

## Demo Video 



https://github.com/user-attachments/assets/dbb6fda5-f57f-48f4-84fc-8767e7b2a274



## Presentation link :

[Click Here](https://stdntpartners-my.sharepoint.com/:p:/g/personal/debaditya_som_studentambassadors_com/EWMoHN3y8vtFhJCVOkuc9E8BQuNsuMDeGY3_Lb8dRkARpg?e=zBeoXg)

## Pitch link :

[Click Here](https://www.youtube.com/watch?v=Kc6VUHSGFVY)
