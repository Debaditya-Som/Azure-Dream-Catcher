import React, { useState } from "react";
import axios from "axios";

const SentimentAnalysisForm = () => {
  const [dreamText, setDreamText] = useState("");
  const [sentimentResult, setSentimentResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setDreamText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSentimentResult(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/sentiment/predict-sentiment", {
        text: dreamText,
      });

      if (response.data) {
        setSentimentResult(response.data);
      }
    } catch (err) {
      setError("Failed to fetch sentiment analysis.");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-2 py-2 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://wallpapers.com/images/hd/4k-firewatch-purple-forest-silhouette-l9ij5athfr2lj8on.jpg")',
      }}
    >
      <div className="bg-white/40 backdrop-blur-lg p-8 rounded-lg shadow-lg w-104 md:w-120">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Dream Sentiment Analysis
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label
              htmlFor="dreamText"
              className="block text-sm font-medium text-gray-700"
            >
              Share your dream:
            </label>
            <textarea
              name="dreamText"
              value={dreamText}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Analyze Sentiment
          </button>
        </form>

        {sentimentResult && (
          <div className="mt-4 p-4 bg-green-100 rounded-md">
            <h3 className="text-lg font-semibold text-green-800">Sentiment Analysis Result:</h3>
            <p className="text-gray-700">
              Sentiment:{" "}
              <strong className="text-green-600">
                {sentimentResult.sentiment}
              </strong>
            </p>
            <p className="text-gray-700">Confidence Scores:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Positive: {sentimentResult.confidenceScores.positive}</li>
              <li>Neutral: {sentimentResult.confidenceScores.neutral}</li>
              <li>Negative: {sentimentResult.confidenceScores.negative}</li>
            </ul>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-sm font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysisForm;
