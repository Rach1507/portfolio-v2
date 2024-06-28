import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Archieve from "./Projects/Archieve";
import { oldProjectsData } from "../data/Projects";
import Work from "./Work";
import Contact from "./Contact";
import About from "./Home/About";
import { useState, useEffect, useRef } from "react";
// import PersonalBranding from "./Home/PersonalBranding";

export default function PortfolioOverview() {

  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial calculation
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-0 antialiased font-light min-h-screen w-screen bg-gradient-to-bl
     from-blue-950 to-black
     
     leading-relaxed text-slate-300 select-none">
      <Home />
      <About/>
      <Experience />
            { width >= 568 ? <Work /> : <></>}
            {/* <PersonalBranding/> */}
      <Projects />
      <Archieve list={oldProjectsData} />
      <Contact />
          </div>
        );
      }
