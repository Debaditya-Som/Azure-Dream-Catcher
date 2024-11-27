import React, { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    sleepDuration: "",
    remSleep: "",
    heartRate: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPredictionResult(null);
  
    try {
      const response = await fetch("http://127.0.0.1:5000/model/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Sleep Duration": parseFloat(formData.sleepDuration),
          "REM Sleep": parseFloat(formData.remSleep),
          "Heart Rate": parseInt(formData.heartRate, 10),
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to get prediction: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data);
      setPredictionResult(data);
    } catch (err) {
      console.error("Error during fetch:", err); 
      setError(err.message);
    }
  };
  
  

  return (
    <div>
      <h2>Sleep Quality Predictor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sleep Duration (hours):
          <input
            type="number"
            step="0.1"
            name="sleepDuration"
            value={formData.sleepDuration}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          REM Sleep (%):
          <input
            type="number"
            step="0.1"
            name="remSleep"
            value={formData.remSleep}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Heart Rate (bpm):
          <input
            type="number"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Predict</button>
      </form>

      {predictionResult && (
  <div>
    <h3>Prediction Result:</h3>
    <p>
      Sleep Quality: <strong>{predictionResult["Prediction Result"]}</strong>
    </p>
    <p>Input Data: {JSON.stringify(predictionResult["Input Data"])}</p>
  </div>
)}


      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputForm;
