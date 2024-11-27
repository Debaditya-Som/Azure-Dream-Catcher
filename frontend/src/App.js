import React, { useState } from "react";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import PredictionResult from "./components/Prediction";
import DataVisualization from "./components/DataVisualization";
import LandingPage from "./components/Hero";
import SentimentAnalysisForm from "./components/Sentiment";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SleepHelp from "./components/SleepHelp";

const App = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div>
      <Header />
      <LandingPage/>
      <AboutUs/>
      <InputForm setPrediction={setPrediction} />
      
      <DataVisualization />
      <SentimentAnalysisForm/>
      <SleepHelp/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default App;
