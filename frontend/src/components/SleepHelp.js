import React from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const SleepHelp = () => {
  const videos = [
    {
      title: "10-Minute Guided Meditation for Sleep",
      url: "https://www.youtube.com/embed/UOJ4V3DAAx8",
    },
    {
      title: "Relaxing Sleep Music with Nature Sounds",
      url: "https://www.youtube.com/embed/1ZYbU82GVz4",
    },
    {
      title: "Rain Sounds for Deep Sleep",
      url: "https://www.youtube.com/embed/tttNRCV9oiY",
    },
    {
      title: "Snowfall Serenity",
      url: "https://www.youtube.com/embed/AHIk3Sc8Fd8",
    },
    {
      title: "Calm Piano Music for Relaxation",
      url: "https://www.youtube.com/embed/9Q634rbsypE",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-32">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Facing Difficulty to Sleep?
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left section with text paragraph */}
        <div className="w-full md:w-1/2 text-center md:text-left mr-8">
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Struggling with sleep? These curated videos featuring guided meditations, relaxing music, and nature sounds can help you unwind, calm your mind, and drift off into a peaceful sleep. Whether you're battling insomnia or just need to relax before bed, these videos offer the perfect solution to improve your sleep quality.
          </p>
        </div>

        {/* Right section with video carousel */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full mx-auto"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-64 bg-black rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-center text-gray-700 mt-4">{video.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SleepHelp;
