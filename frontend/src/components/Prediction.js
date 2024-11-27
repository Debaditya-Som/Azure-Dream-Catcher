import React from "react";

const PredictionResult = ({ prediction, error, isLoading }) => {
  return (
    <div>
      <h2>Prediction Result</h2>

      {/* Loading State */}
      {isLoading && <p>Loading your prediction...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Display Prediction Result */}
      {!isLoading && !error && prediction ? (
        <div>
          <p>
            Your Sleep Quality Prediction: <strong>{prediction["Prediction Result"]}</strong>
          </p>
          <h4>Input Data:</h4>
          <ul>
            {Object.entries(prediction["Input Data"]).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        !isLoading && !error && <p>Enter your data to get a prediction.</p>
      )}
    </div>
  );
};

export default PredictionResult;
