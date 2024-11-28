import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row text-center items-center py-16 bg-[#F6F2E6] text-brown">
       <div className="md:w-1/4 mt-8 md:mt-0 md:ml-8">
        <img
          src="https://i.pinimg.com/474x/8c/4c/32/8c4c328ddbed0d770bbbb8dc065f7927.jpg"
          alt="Team"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2 px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
        Our project is dedicated to addressing the critical gap in healthcare accessibility by offering an intuitive, AI-driven solution for locating and connecting with nearby sleep clinics. Built with cutting-edge technologies like Azure Cognitive Services, Azure Machine Learning, and cloud-based storage, our platform not only simplifies the search for healthcare resources but also ensures precise recommendations powered by sentiment analysis and predictive modeling.
        </p>
        <p className="text-lg">
        Our mission is to empower individuals by bridging the gap between healthcare and technology, providing users with a seamless, reliable, and efficient way to access essential health services. This project reflects our passion for innovation and our commitment to creating impactful solutions that make a real difference in people’s lives.
        </p>
      </div>

     
    </div>
  );
};

export default AboutUs;
