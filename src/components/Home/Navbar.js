export default function Navbar() {
  return (
    <div className="p-8 flex flex-row justify-end items-center gap-5">
      <a>About</a>
      <a>Experience</a>
      <a>Projects</a>
      <a>Contact</a>
      <button className=" p-2 rounded-md border-dotted border-2 border-sky-500 bg-transparent">
        Resume
      </button>
    </div>
  );
}
