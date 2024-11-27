import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#F8F6F5] bg-opacity-80 min-h-screen flex items-center justify-center px-7 py-0 sm:py-0 md:py-0">
      {/* Content Section: Right Side */}
      <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Predict Your Sleep Quality
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mb-8">
          Using advanced data science, our tool predicts your sleep quality based on your sleep duration, REM sleep, and heart rate.
        </p>
        <a
          href="#cta"
          className="bg-[#9B59B6] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Try it Now
        </a>
        <div id="cta" className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 mb-6">
            Input your sleep data and let our model predict whether your sleep quality is good or poor. 
            Our model uses a combination of sleep metrics to make accurate predictions.
          </p>
          <a
            href="/input-form"
            className="bg-[#9B59B6] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Image Section: Left Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMuanBn.jpg"
          alt="Sleep Prediction"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default LandingPage;
