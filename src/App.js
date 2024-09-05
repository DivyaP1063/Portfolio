import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/Work";
import ImgSection from "./components/ImgSection"

function App() {
  return (
    <div className="App max-w-[100vw] overflow-hidden font-pop">
        <Navbar/>
        <Intro/>
        <About/>
        <Service/>
        <ImgSection/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
