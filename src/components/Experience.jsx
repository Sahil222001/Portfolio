import React from "react";

import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import cpp from "../assets/cpp-removebg-preview.png";
import php from "../assets/php.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-blue-700",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
     {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: php,
      title: "PHP",
      style: "shadow-indigo-400",
    },
   
    {
      id: 8,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-600",
    },
  ];

  return (
    
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-slate-900 to-slate-800 w-full h-screen"
    >
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-100 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
