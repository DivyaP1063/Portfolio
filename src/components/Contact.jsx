import React from 'react'
import overlaybg from "../img/Tetons.jpg"
import { FaGithub } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Handles } from './Handles';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
const Contact = () => {
  const iconMap = {
    RiFacebookFill: RiFacebookFill,
    AiFillInstagram: AiFillInstagram,
    FaGithub: FaGithub,
    IoLogoLinkedin: IoLogoLinkedin
  };

  return (
    <section id="contact" className=" w-full  bg-fixed bg-cover bg-center bg-no-repeat py-20 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${overlaybg})` }}>
       <div className=" w-[71%] px-4 py-8 bg-white">
       <div className='w-[70%] mx-auto flex flex-col justify-center items-center gap-5'>
       <h1 className="text-3xl font-semibold text-center mb-4">Let's Get In Touch!</h1>
       <div className='h-[1px] bg-gray-300 w-full'></div>
        <p className="text-lg text-center mb-8">Ready to start your next project with me? Give me a call or send me an email and I will get back to you as soon as possible!</p>

        <div className="flex flex-row max-md:flex-col w-full justify-between">
            <div className='flex flex-col items-center gap-3 '>
                <HiMiniDevicePhoneMobile fontSize='4rem'/>
                <p className="text-center">(+91) 7500719430</p>
            </div>
            <div className='flex flex-col items-center justify-between '>
                <IoIosMail fontSize='4rem' />
                <p><a href="mailto:divyaprakash1063@gmail.com">Divya Prakash</a></p>
            </div>
        </div>

        <div className=' flex flex-row transition-colors duration-200 ease-in  items-center justify-center gap-2 shadow-gray-200'>
        { 
          Object.values(iconMap).map((handle,index)=>(
            <Handles key={index} id={index} icon={handle} />
          ))
        }
      </div>
       </div>

    </div>
    </section>
  )
}

export default Contact;
