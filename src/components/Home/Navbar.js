import { useState } from "react";

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
      className={`p-8 flex flex-row  justify-end items-center gap-5 font-medium z-100 fixed right-0 ${
        colorChange
          ? "bg-gradient-to-l from-black to-blue-950 w-full "
          : ""
      }`}
    >
      <a href="#home">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button className=" p-2 rounded-md border-dotted border-2 border-sky-500 bg-transparent">
        Resume
      </button>
    </div>
  );
}
