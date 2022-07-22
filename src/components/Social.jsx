import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Social = () => {
    const links=[
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
    
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
          {links.map(({id,child,href,style})=>
          (
          <li key={id} 
          className={"flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-500"+" "+style}
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
  )
}

export default Social