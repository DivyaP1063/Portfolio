import React from 'react';
import bgimg from "../img/Yosemite.jpeg"

const Intro = () => {
  return (
    <div
      id="home"
      className=" relative intro route bg-fixed bg-cover bg-center bg-no-repeat h-[20rem] "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
    <div className='relative bg-blue-600 bg-opacity-40 w-full h-full'>
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold ">"Creativity is intelligence having fun." - Albert Einstein</h1>
    </div>

          
    </div>
  );
};

export default Intro;
