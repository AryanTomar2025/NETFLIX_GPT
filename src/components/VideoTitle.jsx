import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-36 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white text-xl p-2  px-10 rounded-2xl bg-opacity-75 hover:text-black hover:bg-white">
          ▶️ Play
        </button>
        <button className=" mx-3 bg-gray-500 text-white text-xl p-2  px-10 rounded-2xl bg-opacity-50 hover:bg-white hover:text-black">
          💁 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
