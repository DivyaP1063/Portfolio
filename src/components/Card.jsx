import React from 'react';
import { LuMonitor } from "react-icons/lu";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { ImMobile2 } from "react-icons/im";
import { useState } from 'react';

function Card({ icon, skill, desc }) {
  const iconMap = {
    LuMonitor: LuMonitor,
    PiBracketsCurlyBold: PiBracketsCurlyBold,
    ImMobile2: ImMobile2,
  };
  const IconComponent = iconMap[icon];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  }
  return (
    <div className=' flex flex-col group transition-colors duration-200 ease-in md:w-[31%] max-md:w-full items-center text-center rounded-xl shadow-lg px-4 py-8 gap-2 shadow-gray-200'             onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
      <div className='bg-blue-500 group-hover:bg-slate-200 transition-colors duration-200 ease-in  w-[8rem] h-[8rem] rounded-full flex flex-col items-center justify-center'             onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} >
      <div className='bg-white group-hover:bg-blue-500 transition-colors duration-200 ease-in  w-[6.5rem] h-[6.5rem] rounded-full flex flex-col items-center justify-center'>
      {
              isHovered?(<IconComponent color='white' fontSize='4rem' />):
              (<IconComponent fontSize='4rem' />)
      }
      </div>
      </div>
      <div className='text-2xl font-semibold uppercase'>{skill}</div>
      <div className='text-[16px]'>{desc}</div>
    </div>
  );
}

export default Card;