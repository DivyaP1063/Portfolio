import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect,useState } from 'react';
import Slidemenu from './Slidemenu';
import Menu from './Menu';
import { LuPanelTopClose } from "react-icons/lu";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menushow, setMenuShow] = useState(false);

  const handleResize = () => {
    if(window.innerWidth <=768){
      if(menushow===true){
        setMenuShow(false);
      }
    } 
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }


  };

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
    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function showSliding(){
    setMenuShow(!menushow);
  }

  return (
    <nav className={` fixed z-30 w-full  transition-all md:h-[4rem] md: duration-700 overflow-hidden 
    ${scrolled || menushow ? 'bg-white text-black shadow-md shadow-gray-400' : 'bg-transparent text-white'} 
    ${menushow ? 'h-[16rem]' : 'h-[4rem]'}`} >
    <div className="container w-[70%] mx-auto flex items-center justify-between py-2 mt-2 ">
      <a className="text-2xl font-bold " href="#home">PORTFOLIO</a>
      <button onClick={showSliding} className="hidden max-md:block" type="button" >
      {menushow?(<LuPanelTopClose fontSize='1.5rem' />):(<RxHamburgerMenu fontSize='1.5rem' />)}
      </button>
       <Menu/>
    </div>
      <Slidemenu/>
    
  </nav>
  )
}

export default Navbar;
