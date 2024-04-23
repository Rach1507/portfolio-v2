import ExperienceCardView from "./ExperienceCardView";
import Work from "../Work";

export default function Experience() {
     // from-blue-950 to-black
  return (

      <div
        className="grid grid-cols-8 grid-rows-1 w-full bg-gradient-to-b  from-slate-950 to-black
     font-sans"
      >
        <div className="col-span-6 flex flex-col col-start-2 ">
          <ExperienceCardView />
        </div>
      </div>

  );
}
