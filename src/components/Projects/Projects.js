import { RightProjectCard, LeftProjectCard } from "./ProjectCard";
export default function Projects() {
  return (
    <div
      id="projects"
      className="pt-36 pb-36 w-full bg-gradient-to-b from-slate-950 to-black font-sans overflow-hidden "
    >
      <div className="grid grid-cols-8 ">
        <div className="col-span-6 flex flex-col gap-36 col-start-2 ">
          <div className="col-span-6 text-2xl font-sans font-bold bg-clip-text text-underline tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
            Some personal projects that I've been working on recently
          </div>
          <RightProjectCard />
          <LeftProjectCard />
        </div>
      </div>
    </div>
  );
}
