import React from "react";

const LandingPage = () => {
  return (
    <div id="home" className="bg-[#F8F6F5] bg-opacity-80 min-h-screen flex items-center justify-center px-7 py-2 sm:py-1 md:py-1">
      <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          "Rest Easy, Live Better"
        </h1>
        <p className="text-lg text-black max-w-lg mb-8 italic">
          Your gateway to better sleep and emotional well-being, powered by advanced AI and compassionate care.
        </p>
        <div id="cta" className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-black mb-4">Transforming Sleep Health with AI-Powered Care</h2>
          <p className="text-lg text-gray-800 mb-6">
            Welcome to the ultimate solution for tackling sleep disorders. Our platform connects you to expert clinics nearby, analyzes your emotional state with cutting-edge sentiment analysis, and provides actionable insights—all designed to help you achieve healthier sleep patterns and a better quality of life. Take the first step towards restful nights and brighter days.
          </p>
          <a
            href="#input-form"
            className="bg-[#9B59B6] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Try it Now
          </a>
        </div>
      </div>

      {/* Conditionally render image only on larger screens */}
      <div className="hidden md:block w-1/4 md:w-1/3 flex justify-center items-center mt-6 md:mt-0 ml-4">
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