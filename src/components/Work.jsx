import React from 'react';
import apple from '../img/iphone thumbnail.png'
import shop from '../img/ShopAppThumbnail.png'
import Player from '../img/beatrex thumbnail.png'
import StudyNotion from "../img/StudyNotion.png"
const Work = () => {
  return (
    <section id="work" className="portfolio-mf py-20 route bg-gray-100 flex flex-col items-center">
      <div className="container px-10 flex flex-col items-center">
        <div className="text-center">
          <h3 className="text-3xl font-bold">
            Work
          </h3>
          <p className="subtitle-a">
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
        </div>
        <div className="flex flex-row max-md:flex-col gap-3 -mx-4">
            {/* Project 1 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 ">
            <div className="work-box p-4 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-200">
              <div className="work-img mb-4">
                <a href="assets/img/work-1.jpg" className="venobox" data-gall="work-gallery">
                  <img src={StudyNotion} className="object-scaledown rounded-lg" alt=""/>
                </a>
              </div>
              <div className="work-content">
                <h2 className="w-title font-bold text-xl text-center">StudyNotion</h2>
                <div className="flex flex-row justify-between items-center">
                  <a href="https://github.com/DivyaP1063/StudyNotion" className="text-blue-600 hover:scale-110 transition-all duration-200" target="_blank" rel="noopener noreferrer">GitHub Code</a>
                  <a href="https://studynotionfrontend-mn8v.onrender.com/" className="text-blue-600 hover:scale-110 transition-all duration-200" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 ">
            <div className="work-box p-4 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-200">
              <div className="work-img mb-4">
                <a href="assets/img/work-1.jpg" className="venobox" data-gall="work-gallery">
                  <img src={apple} className="object-scaledown rounded-lg" alt=""/>
                </a>
              </div>
              <div className="work-content">
                <h2 className="w-title font-bold text-xl text-center">Apple Iphone 15</h2>
                <div className="flex flex-row justify-between items-center">
                  <a href="https://github.com/DivyaP1063/Apple-Iphone-15" className="text-blue-600 hover:scale-110 transition-all duration-200" target="_blank" rel="noopener noreferrer">GitHub Code</a>

                </div>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3  ">
            <div className="work-box p-4 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-200">
              <div className="work-img mb-4">
                  <img src={shop} className=" object-scaledown rounded-lg" alt=""/>
              </div>
              <div className="work-content">
              <h2 className="w-title font-bold text-xl text-center">Shop App</h2>
                <div className="flex flex-row justify-between items-center">
                  <a href="https://github.com/DivyaP1063/Shop_App" className="text-blue-600 hover:scale-110 transition-all duration-200" target="_blank" rel="noopener noreferrer">GitHub Code</a>
                  
                  <a href="https://divyap1063.github.io/Shop_App/" className="text-blue-600 hover:scale-110 transition-all duration-200" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="w-full md:w-1/2 lg:w-1/3  ">
            <div className="work-box p-4 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform duration-200">
              <div className="work-img mb-4">
                  <img src={Player} className=" object-scaledown rounded-lg" alt=""/>
              </div>
              <div className="work-content">
              <h2 className="w-title font-bold text-xl text-center">Beatrexz Music Player</h2>
                <div className="flex flex-row justify-between items-center">
                  <a href="https://github.com/DivyaP1063/Beatrexz---Audioplayer" className="text-blue-600 hover:scale-110 transition-all duration-200" target="_blank" rel="noopener noreferrer">GitHub Code</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-blue-600 hover:scale-125 transition-all duration-200 text-center mt-10 text-xl'>Check Out More Projects</p>
      </div>
    </section>
  );
};

export default Work;
