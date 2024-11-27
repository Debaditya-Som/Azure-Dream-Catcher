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
    <div className="min-h-screen bg-[#9B59B6] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sleep Quality Predictor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="sleepDuration"
              className="block text-sm font-medium text-gray-700"
            >
              Sleep Duration (hours):
            </label>
            <input
              type="number"
              step="0.1"
              name="sleepDuration"
              value={formData.sleepDuration}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="remSleep"
              className="block text-sm font-medium text-gray-700"
            >
              REM Sleep (%):
            </label>
            <input
              type="number"
              step="0.1"
              name="remSleep"
              value={formData.remSleep}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="heartRate"
              className="block text-sm font-medium text-gray-700"
            >
              Heart Rate (bpm):
            </label>
            <input
              type="number"
              name="heartRate"
              value={formData.heartRate}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Predict
          </button>
        </form>

        {predictionResult && (
          <div className="mt-6 p-4 bg-green-100 rounded-md">
            <h3 className="text-lg font-semibold text-green-800">Prediction Result:</h3>
            <p className="text-gray-700">
              Sleep Quality:{" "}
              <strong className="text-green-600">
                {predictionResult["Prediction Result"]}
              </strong>
            </p>
            <p className="text-gray-700">Input Data: {JSON.stringify(predictionResult["Input Data"])}</p>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default InputForm;
