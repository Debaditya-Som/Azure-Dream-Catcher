import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Azure Dream Catcher?",
      answer:
        "Azure Dream Catcher is an innovative project aimed at improving sleep quality by providing insights, mood tracking, and the ability to locate nearby sleep clinics. It combines AI tools and user-friendly features to help users achieve better sleep and well-being.",
    },
    {
      question: "What features does Azure Dream Catcher offer?",
      answer:
        "Azure Dream Catcher includes sleep monitoring, mood detection from music, sentiment analysis, and a map to locate nearby sleep clinics. It integrates AI and machine learning tools for precise insights.",
    },
    {
      question: "How does the sentiment analysis work?",
      answer:
        "Sentiment analysis in Azure Dream Catcher uses Azure AI to analyze user input, such as text data, to assess mood and emotions. This information helps users understand how their mental state affects sleep quality.",
    },
    {
      question: "Can Azure Dream Catcher show nearby sleep clinics?",
      answer:
        "Yes, Azure Dream Catcher uses React Leaflet to display a map with the nearest sleep clinics based on the user's current location. The data is fetched from an API connected to a MongoDB database.",
    },
    {
      question: "Do I need any specific hardware or devices?",
      answer:
        "No specific hardware is required. Azure Dream Catcher is designed to work on smartphones, tablets, and desktops with an internet connection.",
    },
    {
      question: "Is my data secure with Dream Catcher?",
      answer:
        "Yes, Azure Dream Catcher prioritizes user privacy. All data is securely stored and complies with data protection regulations.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-32">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 font-medium"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-[1000px] px-6 py-4 text-gray-600 border-t"
                  : "max-h-0 px-6 py-0 text-transparent border-t-0"
              }`}
            >
              {activeIndex === index && faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
