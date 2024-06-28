import { RightProjectCard, LeftProjectCard , LeftMobileProjectCard } from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
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
    <div
      id="projects"
      ref={containerRef}
      className=" z-[100] md:z-10 pt-36 w-full h-[200vh] bg-gradient-to-b from-slate-950 to-black font-sans overflow-hidden "
    >
      <div className="grid grid-cols-8 ">
        <div className="col-span-6 flex flex-col gap-36 col-start-2 ">
          <div className="col-span-6 text-2xl font-sans font-bold bg-clip-text text-underline tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
            Some personal projects that I've been working on recently
          </div>
          {width >= 568 
            ?<><RightProjectCard /><LeftProjectCard /></>
            :<><RightProjectCard /><LeftMobileProjectCard /></>}

        </div>
      </div>
    </div>
  );
}
