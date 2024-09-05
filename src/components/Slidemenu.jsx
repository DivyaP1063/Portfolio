import React from 'react'

function Slidemenu(){
  return (
    <div className="flex transition-all duration-300 flex-col py-2 w-[70%] mx-auto items-start gap-4  text-black  md:hidden ">

      <div >
        <a  href="index.html">Home</a>
      </div>
      <div >
        <a  href="#about">About</a>
      </div>
      <div >
        <a  href="#service">Services</a>
      </div>
      <div >
        <a  href="#work">Work</a>
      </div>
      <div >
        <a  href="#contact">Contact</a>
      </div>

  </div>
  )
}

export default Slidemenu;
