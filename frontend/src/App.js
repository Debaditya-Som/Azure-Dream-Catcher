import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import PredictionResult from "./components/Prediction";
import DataVisualization from "./components/DataVisualization";

const App = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div>
      <Header />
      <InputForm setPrediction={setPrediction} />
      <PredictionResult prediction={prediction} />
      <DataVisualization />
    </div>
  );
};

export default App;
