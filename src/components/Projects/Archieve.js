import { useState } from "react";

export default function Archieve({ list }) {
  const [page, setPage] = useState(0);

  return (
    <div className="grid grid-cols-6 grid-rows-1 w-full h-screen bg-gradient-to-br to-blue-950 from-black font-sans items-center justify-center overflow-hidden ">
      <div className="flex flex-col items-center ml-14 ">
        <button
          disabled={page === 0}
          onClick={() => page > 0 && setPage(page - 3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className={page === 0 ? "fill-slate-500 w-7" : "fill-sky-300 w-7"}
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
      </div>
      <div className="col-span-4 col-start-2 flex flex-col gap-10">
        <div>
          <div className="text-center text-2xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-50">
            Few Other Projects
          </div>
          <div className="text-sm text-center">
            All Things Built while in college
          </div>
        </div>

        {/* // Use that grid option to fit as many as grids possible in that width and give the whole list  */}

        <div className="flex gap-10 ">
          {list.slice(page, page + 4).map((project) => {
            return (
              <div className="flex flex-col gap-4 backdrop-contrast-75 p-5 h-72 w-80">
                <div className="flex content-end flex-row-reverse">
                  <a
                    href={project.link}
                    aria-label="External Link"
                    class="external"
                    className="text-sky-300 w-6 h-6"
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
                <div className="font-bold">{project.name}</div>
                <div className="font-sm ">{project.info}</div>
                <div className="font-thin text-sm text-sky-300 flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span>{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 text-medium font-bold text-center hover:underline hover:decoration-sky-500">
          <span className="text-xl">
            ({page + 3 > list.length ? list.length : page + 3} / {list.length})
          </span>
          <a href="https://github.com/Rach1507?tab=repositories">
            View Full Archieve
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <button
          disabled={page + 3 >= list.length}
          onClick={() => setPage(page + 3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className={
              page + 3 < list.length ? "fill-sky-300 w-7" : "fill-slate-500 w-7"
            }
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
