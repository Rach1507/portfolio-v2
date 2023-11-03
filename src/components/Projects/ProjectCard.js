import portfolioImage from "../../assests/portfolio.png";
export function RightProjectCard() {
  const techStack = ["ReactJS", "Tailwind", "NextJS", "Vercel"];
  return (
    <div className="w-full grid grid-cols-3">
      <div className="col-start-1 col-span-2 justify-center items-start">
        <img src={portfolioImage} className="opacity-50" alt="" />
      </div>
      <div className="flex flex-col items-end gap-10">
        <div className="font-bold text-lg">Header</div>
        <div className=" backdrop-contrast-75 z-20 text-slate-50 text-sm font-normal tracking-wide text-right leading-6 p-5 break-words">
          this prokect
          jhioadhnfejsdbjbewjssajnsadsjkbjkdsbjkbjsdkbjkfbdjksfbthis prokect
          jhioadhnfejsdbjbewjssajnsadsjkbjkdsbjkbjsdkbjkfbdjksfb this prokect
        </div>
        <div className="text-slate-50 text-sm font-semibold flex gap-10">
          {techStack.map((tech) => (
            <span>{tech}</span>
          ))}
        </div>

        <div className="flex gap-10">
          <a
            href="https://github.com/Rach1507/portfolio-v2"
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

          <a
            href="https://github.com/Rach1507/portfolio-v2"
            className="text-sky-300 w-6 h-6 hover:text-slate-50"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
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
              class="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export function LeftProjectCard() {
  const techStack = ["ReactJS", "Tailwind", "NextJS", "Vercel"];

  return (
    <div className="w-full grid grid-cols-3">
      <div className="flex flex-col items-start gap-10">
        <div className="font-bold text-lg">Header</div>
        <div className=" backdrop-contrast-75 z-20 text-slate-50 text-sm font-normal tracking-wide text-left leading-6 p-5 break-words">
          this prokect
          jhioadhnfejsdbjbewjssajnsadsjkbjkdsbjkbjsdkbjkfbdjksfbthis prokect
          jhioadhnfejsdbjbewjssajnsadsjkbjkdsbjkbjsdkbjkfbdjksfb this prokect
        </div>
        <div className="text-slate-50 text-sm font-semibold flex gap-10">
          {techStack.map((tech) => (
            <span>{tech}</span>
          ))}
        </div>

        <div className="flex gap-10">
          <a
            href="https://github.com/Rach1507/portfolio-v2"
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

          <a
            href="https://github.com/Rach1507/portfolio-v2"
            className="text-sky-300 w-6 h-6 hover:text-slate-50"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
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
              class="feather feather-github"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="col-span-2 justify-center items-end ">
        <img src={portfolioImage} className="opacity-50" alt="" />
      </div>
    </div>
  );
}
