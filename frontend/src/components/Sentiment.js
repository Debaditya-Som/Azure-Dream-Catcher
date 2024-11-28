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
      className="min-h-screen flex justify-center items-center px-2 py-8 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://wallpapers.com/images/hd/4k-firewatch-purple-forest-silhouette-l9ij5athfr2lj8on.jpg")',
        backgroundSize: '80%', // Reduced the background size
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section: Sentiment Analysis Form */}
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full md:w-[650px] lg:w-[700px] max-w-[750px]">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Dream Sentiment Analysis
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="dreamText"
                className="block text-base font-medium text-gray-900 italic"
              >
                Share your dream:
              </label>
              <textarea
                name="dreamText"
                value={dreamText}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-transform duration-200"
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

        {/* Right Section: Description about Dream Sentiment Analysis */}
        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-lg shadow-xl w-64 md:w-96 lg:w-[500px] max-w-[550px]">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            About Dream Sentiment Analysis
          </h3>
          <p className="text-black text-base text-center">
  This Dream Sentiment Analysis tool utilizes the power of&nbsp;
  <strong>
    <a 
      href="https://learn.microsoft.com/en-us/training/paths/get-started-azure-ai?wt.mc_id=studentamb_296415" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Azure AI Cognitive Services&nbsp;
    </a>
  </strong> 
  to analyze the emotional tone of your dreams. By analyzing your dream text, the tool predicts the sentiment (positive, negative, or neutral) and provides confidence scores for each sentiment type. Whether you're looking for insights into your emotional state or seeking patterns in your dreams, this tool offers an easy and quick way to understand the emotional context behind your dreams.
</p>


        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisForm;
