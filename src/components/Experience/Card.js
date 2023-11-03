export default function Card({ role, actions, techStack, productUrl }) {
  return (
    <div className="col-span-4 col-start-2 ml-16">
      <div className="grid grid-rows-1 grid-cols-3">
        <div className="border-t-4  border-double "></div>
        <div className="grid-start-1 col-span-3 text-xl z-20 border-l-4 text-slate-50 border-double pt-10 pl-10 h-24 font-bold items-center flex ">
          {role}
          
            <a
              href={productUrl}
              aria-label="External Link"
              class="external"
              className="text-sky-300 w-5 h-5 ml-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
     
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
            return (
              <button className="rounded-xl backdrop-contrast-75 p-4 text-xs font-medium leading-3 tracking-wide text-sky-300">
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
