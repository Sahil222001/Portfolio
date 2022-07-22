import React from 'react'
import HeroImage from '../assets/heroImage.png';
import {BiRightArrow} from "react-icons/bi"
import {Link} from "react-scroll";
const Home = () => {

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-slate-900 to-slate-800">
     
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-7 md:flex-row">
          <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-7xl font-bold text-white" >I am a Computer Engineering Student</h2>
              <p className="text-gray-400 py-4 max-w-md ">
                  Lorem, ipsum dolor sit
                   amet consectetur adipisicing elit. Aut doloribus eaque vitae magni aspernatur reiciend
                   is, nesciunt veniam mollitia, repellat cum consequ
                   atur ut. Molestias ut laboriosam a
                   lias nulla molestiae aspernatur temporibus!
              </p>
          <div>
                  <Link to="projects" smooth duration={500} className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-600 to to-blue-400 shadow-white">
                      My Projects
                      <span className="group-hover:rotate-90 duartion-300 ">
                          <BiRightArrow size={15} className="ml-2"/>
                      </span>
                  </Link>
              </div>
          </div>
          <div>
        <img 
        src={HeroImage} 
        alt="my profile" 
        className=" shadow-white rounded-2xl mx-auto w-2/3 md:w-full"/>
    </div>
    </div>
    </div>

    
  )
}

export default Home