import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row text-center items-center py-16 bg-[#F6F2E6] text-brown">
      {/* Left Section - About Us Text */}
      <div className="md:w-1/2 px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          We are passionate about creating beautiful and meaningful experiences through our work. 
          Our mission is to bring innovative ideas to life with a touch of creativity and elegance. 
          Join us on our journey to redefine excellence!
        </p>
        <p className="text-lg">
          Our team consists of skilled professionals dedicated to pushing the boundaries of design and technology. 
          With years of experience, we are committed to delivering results that not only meet but exceed expectations.
        </p>
      </div>
      
      {/* Right Section - Image */}
      <div className="md:w-1/4 mt-8 md:mt-0"> 
  <img
    src="https://i.pinimg.com/474x/8c/4c/32/8c4c328ddbed0d770bbbb8dc065f7927.jpg"
    alt="Team"
    className="w-full h-auto rounded-lg "
  />
</div>

    </div>
  );
};

export default AboutUs;
