import React from 'react'
import { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'



const Navbar = () => {
  const mylinks=[
    {
        id:1,
        child:(
            <>
            LinkedIn<FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/sahil-chorghe2210/',
        style:'bg-sky-700'
            
     },
     {
        id:2,
        child:(
            <>
            Github<FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/Sahil222001',
        style:'bg-stone-700'
        
            
     },
     {
        id:3,
        child:(
            <>
            Resume<BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'https://drive.google.com/file/d/1VSyb4a5tSZepmy0o37VRaqMdUXYVkO5S/view?usp=sharing',
        style:'bg-slate-500'
        
     },
     {
        id:4,
        child:(
            <>
            Mail<HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:chorghesahil16@gmai.com',
        style:"bg-red-400"
     }
]



    const [nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:'home',
        },
        {
            id:2,
            link:'about',
        },
        {
            id:3,
            link:'projects',
        },
        {
            id:4,
            link:'experience',
        },
        {
            id:5,
            link:'contact',
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-amber-100 bg-black opacity-95 fixed">
     <div>
        <h1 className="text-5xl cursor-pointer font-signature ml-2 hover:scale-95 duration-100"> Sahil</h1>
     </div>
   
      <ul className="hidden md:flex">
          {
          links.map(({id,link})=>(
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-zinc-400 hover:scale-105 duration-200">
            
            <Link to={link} smooth duration={500}>
            {link}
            </Link>
            
            
            </li>
          ))
          
          }
      </ul>
   
   <div onClick={()=>setNav(!nav)}className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
       {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
   </div>
   
    {nav &&(
    
   <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
   {links.map(({id,link})=>(
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link
            onClick={() => setNav(!nav)}
            to={link}
            smooth
            duration={500}
          >
            {link}
          </Link>
          </li>
          ))
   }
   
   <div className="lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
          {mylinks.map(({id,child,href,style})=>
          (
          <li key={id} 
          className={"flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500 "+style}
          >
             <a
              href={href} 
              className="flex justify-between items-center w-full text-white"
              >
                    {child}
              </a>
          </li>
      
         ))}
      </ul>        
    </div>
   </ul>  
     
    )     
    }
















   
   
   
   
   
    </div>

  )
}

export default Navbar