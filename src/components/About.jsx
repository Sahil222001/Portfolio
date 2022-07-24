import React from "react";
import cricket from "../assets/cricket.jpg";
import photo from "../assets/photo.jpeg";
import sketch from "../assets/sketch.jpg"

  
const About = () => {

  const hobby = [
    {
      id: 1,
      src: cricket,
      title: "Cricket",
      style: "shadow-white",
    },
    {
      id: 2,
      src: photo,
      title: "Photography and video editing",
      style: "shadow-white",
    },
     {
      id: 3,
      src: sketch,
      title: "Sketching Potraits",
      style: "shadow-white",
    }
  ];


  return (
    <div
      name="about"
      className="w-full top-0 pt-6 h-auto bg-gradient-to-b  from-slate-800 via-slate-900 to-black   text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-2xl text-green-300 mt-5">
        Hello Visitors....
        </p>

        <br />

        <p className="text-l">
          This is Sahil Chorghe here and thanks for visitng my Portfolio.
        </p>

        <p className="text-xl mt-2">
          
          
<ol class="items-center sm:flex mt-5">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-4 sm:pr-8">
            <h3 class="text-lg  font-semibold text-white dark:text-white">SSC</h3>
            <time class="block mb-6 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">St.John Bosco High School    </time>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Completed my 10th Std. with 88.60% with Institute Rank : 3rd</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-white dark:text-white">Diploma in Computer Engineering </h3>
            <time class="mt-3 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">B.V.P  2020 </time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Complted my Diploma with 96.86% with Institute Rank:4th</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-white dark:text-white">BTech In Computer Engineering  current</h3>
            <time class="mt-1 block mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">Sardar Patel Institute of Technology</time>
            <p class="text-base font-normal  text-gray-500 dark:text-gray-500">Pursuing my B.Tech from SPIT with expected grauation in 2023.</p>
        </div>
    </li>
</ol>

        </p>
        <div>
        <p className="mt-8 text-xl text-gray-400">
          More of Me:
        </p>
        </div>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="w-50 grid grid-cols-1 sm:grid-cols-3 gap-20 text-center py-8 px-8 sm:px-0">
          {hobby.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-95 duration-100 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>

          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
