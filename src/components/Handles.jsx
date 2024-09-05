import React from 'react'
import { useState } from 'react';

export const Handles = ({id,icon}) => {

      const IconComponent = icon;
      const [isHovered, setIsHovered] = useState(false);
    
      const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      const handleMouseOut = () => {
        setIsHovered(false);
      }

      const iconlink = {
        0: 'https://www.facebook.com/profile.php?id=100012192015443&mibextid=ZbWKwL',
        1: 'https://www.instagram.com/divya_prakash.__/',
        2: 'https://github.com/DivyaP1063',
        3: 'https://www.linkedin.com/in/divya-prakash1063/'
      };
  return (
    <a href={iconlink[id]} target='_blank'>
    <div className='group' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    <div className='bg-blue-500 group-hover:bg-slate-200 transition-colors duration-200 ease-in  w-[3rem] h-[3rem] rounded-full flex flex-col items-center justify-center' >
    <div className='bg-white group-hover:bg-blue-500 transition-colors duration-200 ease-in  w-[2.6rem] h-[2.6rem] rounded-full flex flex-col items-center justify-center'>{
            isHovered?(<IconComponent color='white' fontSize='1.2rem' />):
            (<IconComponent fontSize='1.2rem' />)}</div>
    </div>
    </div>
     </a>


  )
}
