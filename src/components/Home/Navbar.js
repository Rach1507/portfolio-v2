import { useRef, useState } from "react";
import { Button } from "../ui/moving-border.tsx";


export default function Navbar() {
 
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`p-6 flex flex-row overflow-hidden justify-end items-center gap-12  z-[90] fixed right-0 text-navbar ${
        colorChange
          ? "bg-gradient-to-l from-gray-950  via-slate-900  to-gray-950 w-full opacity-100"
          : ""
      }`}
    >
     
      <a href="#about" className="font-light hover:font-bold text-slate-50">
        About
      </a>

      <a
        href="#experience"
        // onClick={experienceRef.current.scrollIntoView()}
        className="font-light hover:font-bold text-slate-50"
      >
        Experience
      </a>
      <a href="#projects" className="font-light hover:font-bold text-slate-50">
        Projects
      </a>
      <a href="#contact" className="font-light hover:font-bold text-slate-50">
       Contact
        </a>
      <div className="hover:font-bold">
        <Button 
          borderRadius="2.5rem"
          className ="font-semibold dark:bg-transparent dark:text-white dark:border-slate-800"
        // className="p-2 rounded-md border-dotted border-2 border-sky-500 bg-transparent"
        >
          <a
            href="https://drive.google.com/file/d/1TcwlKix6q79MaX9yVeZPwjspjPzZ9w1Q/view?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
}
