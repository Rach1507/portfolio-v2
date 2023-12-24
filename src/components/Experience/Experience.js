import ExperienceCardView from "./ExperienceCardView";
import Work from "../Work";

export default function Experience() {
  return (
    <>
      <div
        id="experience"
        className="grid grid-cols-8 grid-rows-1 w-full h-screen bg-gradient-to-bl from-blue-950 to-black
     font-sans pb-72 overflow-hidden"
      >
        <div className="col-span-6 flex flex-col col-start-2">
          <ExperienceCardView />
        </div>
      </div>
    </>
  );
}
