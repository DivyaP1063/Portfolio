import React from 'react'
import profile from '../img/profilepic1.png'
const About = () => {
  return (
    <section id="about" className="about-mf py-16 route">

      <div className="flex justify-center ">
        <div className="md:w-[71%]  max-md:w-full">
          <div className="bg-white shadow-lg shad shadow-gray-400 p-5">
            <div className="flex flex-wrap">
              <div className="w-1/2 max-md:w-full ">
                <div className="flex md:flex-wrap max-lg:flex-col gap-4">
                  <div className="w-[40%] max-md:w-full">
                      <img src={profile} className="rounded-lg  shadow" alt=""/>
                  </div>
                  <div className=" max-md:w-full">
                    <div className="about-info  mt-7 max-md:mt-0 space-y-4 ">
                      <p><span className="font-semibold">Name: </span> <span className='text-sm'>Divya Prakash</span></p>
                      <p><span className="font-semibold">Profile: </span> <span className='text-sm'>Front End Developer</span></p>
                      <p><span className="font-semibold">Email: </span> <span className='text-sm'>divyaprakash1063@gmail.com</span></p>
                      <p><span className="font-semibold">Phone: </span> <span className='text-sm'>(+91)7500719430</span></p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full uppercase ">
                  <p className="font-bold mb-1 text-center text-lg">Skills</p>
                  <p className='font-semibold mb-1'>FrontEnd Tech Stack</p>
                  <div>
                    <span>REACT</span> 
                    <div className="w-[90%] bg-gray-200 h-3 mb-3 ">
                      <div className="bg-blue-500 h-3 w-[85%] mt-2"></div>
                    </div>
                  </div>
                  <div>
                    <span>CSS3</span> 
                    <div className="w-[90%] bg-gray-200 h-3 mb-3  ">
                      <div className="bg-blue-500 h-3 w-[70%] mt-2" ></div>
                    </div>
                  </div>
                  <div>
                    <span>JAVASCRIPT</span> 
                    <div className="w-[90%] bg-gray-200 h-3 mb-3  ">
                      <div className="bg-blue-500 h-3  w-[70%] mt-2"></div>
                    </div>
                  </div>
                  <div>
                    <span>HTML</span>
                    <div className="w-[90%] bg-gray-200 h-3 mb-3  ">
                      <div className="bg-blue-500 h-3 w-[60%] mt-2"></div>
                    </div>
                  </div>
                  <div>
                    <span>Redux</span>
                    <div className="w-[90%] bg-gray-200 h-3 mb-3  ">
                      <div className="bg-blue-500 h-3  w-[50%] mt-2"></div>
                    </div>
                  </div>
                  <p className='font-semibold mb-1 uppercase'>BackEnd Tech Stack</p>
                  <div>
                    <span>NodeJS</span> 
                    <div className="w-[90%] bg-gray-200 h-3 mb-3 ">
                      <div className="bg-blue-500 h-3  w-[25%] mt-2"></div>
                    </div>
                  </div>
                  <div>
                    <span>ExpressJS</span> 
                    <div className="w-[90%] bg-gray-200 h-3 mb-3 ">
                      <div className="bg-blue-500 h-3  w-[20%] mt-2" ></div>
                    </div>
                  </div>
                  <div>
                    <span>MongoDB</span> 
                    <div className="w-[90%] bg-gray-200 h-3 mb-3  ">
                      <div className="bg-blue-500 h-3  w-[20%] mt-2"></div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="about-me">
                  <h5 className="text-3xl font-bold">
                    About me
                  </h5>
                  <p className="mt-4 text-xl  text-gray-700">
                  Hi, I'm Divya Prakash, a passionate web front-end developer with expertise in React, Redux, Tailwind CSS, and JavaScript.
                  </p>
                  <p className="mt-4 text-xl text-gray-700">
                  I specialize in building intuitive and responsive web applications that deliver exceptional user experiences.With a deep understanding of modern front-end technologies, I enjoy turning complex ideas into sleek, high-performance websites. 
                  </p>
                  <p className="mt-4 text-xl text-gray-700">
                  My focus is on writing clean, efficient code and creating user interfaces that are both beautiful and functional.
                  </p>
                  <p className="mt-4 text-xl text-gray-700">
                  Whether it's crafting custom components with React, managing state with Redux, or styling with Tailwind CSS
                  </p>
                  <p className="mt-4 text-xl text-gray-700">
                  I'm always ready to tackle new challenges and push the boundaries of web development.Let's create something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default About;
