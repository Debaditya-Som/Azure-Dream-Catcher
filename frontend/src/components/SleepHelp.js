import React from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const SleepHelp = () => {
  const videos = [
    {
      title: "10-Minute Guided Meditation for Sleep",
      url: "https://www.youtube.com/embed/1vx8iUvfyCY",
    },
    {
      title: "Relaxing Sleep Music with Nature Sounds",
      url: "https://www.youtube.com/embed/1ZYbU82GVz4",
    },
    {
      title: "Rain Sounds for Deep Sleep",
      url: "https://www.youtube.com/embed/Ez6A9B-Vas4",
    },
    {
      title: "Body Scan Meditation for Insomnia",
      url: "https://www.youtube.com/embed/Q6_w5L0QafM",
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
      <p className="text-center text-gray-600 mb-6">
        Relax with these curated meditation and relaxation sounds to help you sleep better.
      </p>

      <Swiper
  modules={[Navigation]}
  navigation={true}
  spaceBetween={20}
  slidesPerView={1}
  className="w-full md:w-2/3 lg:w-1/2 mx-auto"
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
  );
};

export default SleepHelp;
