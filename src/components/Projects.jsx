import React from "react";
import irri from "../assets/portfolio/Irrigation.jfif";
import docchain from "../assets/portfolio/docchain.jpg";
import wmanage from "../assets/portfolio/Waste Management.jpg";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: docchain,
      name: "DOC-CHAIN"
    },
    {
      id: 2,
      src: irri,
      name: "Smart Irrigator"
    },
    {
      id: 3,
      src: wmanage,
      name:"Waste Management System"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-slate-800 via-slate-900 to-black  w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Checkout some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
              
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <div>
                  <p className="py-6 cursor-pointer align-center  duration-200 hover:scale-105 ">
                  <a href="https://github.com/Sahil222001" >{name}</a>
                  </p>
                  </div>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Link
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
