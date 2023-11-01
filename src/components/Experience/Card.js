export default function Card({ role, actions, techStack }) {
  return (
    <div className="col-span-4 col-start-2 ml-16">
      <div className="grid grid-rows-1 grid-cols-3">
        <div className="border-t-4  border-double "></div>
        <div className="grid-start-1 col-span-3 text-xl z-20 border-l-4 text-slate-50 border-double pt-10 pl-10 h-24 font-bold">
          {role}
        </div>
      </div>

      <div className=" ml-24 z-10 mr-9">
        <ul className="list-disc">
          {actions.map((action) => (
            <li className="p-3" key="">
              {action}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-row-2 grid-cols-3">
        <div className="p-4 col-start-1 ml-14 flex flex-row gap-4 grid-start-1 col-span-3 text-xl z-20 border-r-4  border-double pt-10 pl-10">
          {techStack.map((tech) => {
            console.log(tech);
            return (
              <button className="rounded-full bg-slate-400 p-4 text-xs text-black">
                {/* {tech.icon} */}
                {tech.name}
              </button>
            );
          })}
        </div>
        <div className="border-b-4 col-start-3 border-r-4  border-double h-9"></div>
      </div>
    </div>
  );
}
