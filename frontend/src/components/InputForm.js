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
      const response = await fetch("https://azure-dream-catcher.azurewebsites.net/model/predict", {
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

  const isPoor = predictionResult && predictionResult["Prediction Result"] === "Poor";

  return (
    <div id="input-form" className="min-h-screen bg-[#9B59B6] flex flex-col md:flex-row justify-center items-center p-4">
      
      {/* Left Side - Text Content */}
<div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
  <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
    Predict Your Sleep Quality
  </h1>
  <p className="text-base md:text-lg text-white max-w-lg text-center mb-8">
    Using advanced data science and Machine Learning Model (Logistic regression) trained in Azure ML Studio, our tool predicts your sleep quality based on your sleep duration, REM sleep, and heart rate.
  </p>
  <div id="cta" className="text-center mt-6">
    <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4">How It Works</h2>
    <p className="text-base md:text-lg text-white max-w-lg text-center mb-6">
      Input your sleep data and let our model predict whether your sleep quality is good or poor. 
      Our model uses a combination of sleep metrics to make accurate predictions.
    </p>
    <a
      href=""
      className="bg-[#33023B] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
    >
      Get Started
    </a>
  </div>
</div>

      {/* Right Side - Input Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-6">
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
          <div
            className={`mt-6 p-4 rounded-md ${isPoor ? 'bg-red-100' : 'bg-green-100'}`}
          >
            <h3
              className={`text-lg font-semibold ${isPoor ? 'text-red-800' : 'text-green-800'}`}
            >
              Prediction Result:
            </h3>
            <p
              className={`text-gray-700 ${isPoor ? 'text-red-600' : 'text-green-600'}`}
            >
              Sleep Quality:{" "}
              <strong>
                {predictionResult["Prediction Result"]}
              </strong>
            </p>

            {isPoor && (
              <div className="mt-4 text-red-600">
                <p>Your sleep quality seems poor. We recommend visiting <strong><a href="#map">a somnologist or sleep clinic</a>.</strong></p>
              </div>
            )}
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