import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import PredictionResult from "./components/Prediction";
import DataVisualization from "./components/DataVisualization";
import LandingPage from "./components/Hero";
import SentimentAnalysisForm from "./components/Sentiment";

const App = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div>
      <Header />
      <LandingPage/>
      <AboutUs/>
      <InputForm setPrediction={setPrediction} />
      <PredictionResult prediction={prediction} />
      <DataVisualization />
      <SentimentAnalysisForm/>
    </div>
  );
};

export default App;
