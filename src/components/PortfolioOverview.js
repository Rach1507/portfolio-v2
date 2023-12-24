import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Archieve from "./Projects/Archieve";
import { oldProjectsData } from "../data/Projects";
import Work from "./Work";
import Contact from "./Contact";

export default function PortfolioOverview() {


  return (
    <div className="flex flex-col gap-0 antialiased font-light min-h-screen w-screen bg-gradient-to-bl from-blue-950 to-black leading-relaxed text-slate-300 select-none">
      <Home />
      <Experience />
      <Work />
      <Projects />
      <Archieve list={oldProjectsData} />
      <Contact />
    </div>
  );
}
