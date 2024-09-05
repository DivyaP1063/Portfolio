import React from 'react';
import overlayBg from "../img/aaron-gc.png"
import { useState,useEffect } from 'react';

const Intro = () => {
  const info =["Front End Developer", "Web Designer","Traveller"];
  const [word, setWord] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(70);

  useEffect(() => {
    if (index === info.length) {
      setIndex(0);
    }

    if (subIndex === info[index]?.length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 500);
      setDelay(40);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex(prev => prev + 1);
      setDelay(70);
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (isDeleting ? -1 : 1));
      setWord(info[index]?.substring(0, subIndex));
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, delay]);
  return (
    <div
      id="home"
      className=" relative intro w-full route bg-fixed bg-cover bg-center bg-no-repeat h-screen  "
      style={{ backgroundImage: `url(${overlayBg})` }}
    >
    <div className=' absolute w-full h-full bg-black bg-opacity-40 z-10'></div>
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="relative z-[20] text-[60px] font-bold mb-4">I am Divya Prakash</h1>
          <p className="text-xl">
            <span className="text-slider-items relative z-[20]  min-h-[3rem] text-4xl">{word.length === 0 ? '|' : `${word}|`}</span>
            <strong className="text-slider"></strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

