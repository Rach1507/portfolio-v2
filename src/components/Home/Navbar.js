export default function Navbar() {
  return (
    <div className="p-8 flex flex-row  justify-end items-center gap-5 font-medium  fixed right-0">
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
