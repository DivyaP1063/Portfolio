import React, { useState } from 'react'
import { useEffect } from 'react';
function Menu(){
  const[navanimation,setNavanimation]= useState({
    Home: false,
    About: false,
    Services: false,
    Work: false,
    Contact: false
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        Home: document.getElementById('home'),
        About: document.getElementById('about'),
        Services: document.getElementById('service'),
        Work: document.getElementById('work'),
        Contact: document.getElementById('contact'),
      };

      let activeSection = '';

      for (const [key, section] of Object.entries(sections)) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeSection = key;
          }
        }
      }

      setNavanimation({
        Home: activeSection === 'Home',
        About: activeSection === 'About',
        Services: activeSection === 'Services',
        Work: activeSection === 'Work',
        Contact: activeSection === 'Contact'
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set the initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
  return (
    <div className=" flex flex-row items-center  gap-6 text-xl max-md:hidden  ">

    <div >
      <a  href="#home">Home</a>
    </div>
    <div >
      <a  href="#about">About</a>
      <div className={`h-[2px] bg-blue-500 ${navanimation['About']?'w-full':'w-0'} transition-all ease-in duration-300`}></div>
    </div>
    <div >
      <a  href="#service">Services</a>
      <div className={`h-[2px] bg-blue-500 ${navanimation['Services']?'w-full':'w-0'} transition-all ease-in duration-300`}></div>
    </div>
    <div >
      <a  href="#work">Work</a>
      <div className={`h-[2px] bg-blue-500 ${navanimation['Work']?'w-full':'w-0'} transition-all ease-in duration-300`}></div>
    </div>
    <div >
      <a  href="#contact">Contact</a>
      <div className={`h-[2px] bg-blue-500 ${navanimation['Contact']?'w-full':'w-0'} transition-all ease-in duration-300`}></div>
    </div>

</div>
  )
}

export default Menu;
