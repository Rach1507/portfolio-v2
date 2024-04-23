import portfolioImage from "../../assests/portfolio.png";
import uxImage from "../../assests/ux-sm.png"
export function RightProjectCard() {
  const techStack = [
    "ReactJS",
    "NextJS",
    "Tailwind",
    "GraphQL",
    "Contentful CMS",
  ];
  return (
    <div className="w-full grid grid-cols-3">
      <div className="col-start-1 col-span-2  justify-center items-start">
        <img
          data-aos="fade-right"
          src={uxImage}
          className="opacity-50 w-full h-ful"
          alt=""
        />
      </div>
      <div className="flex flex-col z-20 items-end gap-10 ">
        <div className="font-bold text-lg">UX Designer Portfolio - UpWork</div>
        <div className=" backdrop-contrast-75 text-slate-50 text-sm font-normal tracking-wide text-right leading-6 p-5 ">
          <ul className="flex flex-col gap-5">
            <li>
              UX Designer's Portfolio built with
              <span className="text-sky-500">ReactJS , Next js , GraphQL </span>
              which updates the content from{" "}
              <span className="text-sky-500">Contentful CMS</span> commisioned
              from UpWork , deployed in{" "}
              <span className="text-sky-500">AWS S3/Vercel</span>
            </li>
          </ul>
        </div>
        <div className="text-slate-50 text-sm font-semibold flex gap-10">
          {techStack.slice(0, 3).map((tech) => (
            <span>{tech}</span>
          ))}
        </div>
        <div className="text-slate-50 text-sm font-semibold flex gap-10">
          {techStack.slice(3).map((tech) => (
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
        <div className="font-bold text-lg">Personal Portfolio v2</div>
        <div className=" backdrop-contrast-75 z-20 text-slate-50 text-sm font-normal tracking-wide text-left leading-6 p-5 break-words">
          Second iteration of my personal portfolio , Designed and developed by
          me , built using{" "}
          <span className="text-sky-500">ReactJS , Tailwind </span> deployed in
          Github pages
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
        <img
          data-aos="fade-left"
          src={portfolioImage}
          className="opacity-50"
          alt=""
        />
      </div>
    </div>
  );
}

// export function RightProjectCardOld() {
//   const techStack = [
//     "ReactJS",
//     "NextJS",
//     "scss",
//     "Radix",
//     "Headless Architecture",
//   ];
//   return (
//     <div className="w-full grid grid-cols-3">
//       <div className="col-start-1 col-span-1  justify-center items-start">
//         {/* {rounded-full image } */}
//         <img src={portfolioImage} className="opacity-50 w-full h-ful" alt="" />
//       </div>
//       <div className="flex flex-col col-start-2 col-span-2 ml-36 items-end gap-10 z-20">
//         <div className="font-bold text-lg">Header</div>
//         <div className=" backdrop-contrast-75 text-slate-50 text-sm font-normal tracking-wide text-right leading-6 p-5 ">
//           <ul className="flex flex-col gap-5">
//             <li>
//               Developemnt of new features along with required analysis and
//               discussion of Figma (IRIS )product using{" "}
//               <span className="text-sky-500">ReactJS , Next js , Scss</span>
//               and automated testing for robustness using Cypress .
//             </li>
//             <li>
//               SSAI Analytics Dashboard , which was , Targeting of Key Value ,
//               Assest , Agency{" "}
//             </li>
//             <li>
//               Developement of
//               <span className="text-sky-500"> Headless UI Library</span>{" "}
//               components using Radix , storybook , Style dictionary , jest that
//               is to be used by all products,by all product teams of Synamedia
//               such as <span className="text-sky-500">Toggle</span> ,{" "}
//               <span className="text-sky-500">Table</span>,{" "}
//               <span className="text-sky-500">Date Picker</span> .
//             </li>
//             <li>
//               Considered robustness , rondsaonokdfns while building the library,
//               all the features
//             </li>
//             <li>
//               Actively represented team and demonstrated the product and library
//               in all demos during Open Days , CTO visits , CFO visits , and
//               other End of sprint and AC demos
//             </li>
//             <li></li>
//           </ul>
//         </div>
//         <div className="text-slate-50 text-sm font-semibold flex gap-10">
//           {techStack.slice(0, 3).map((tech) => (
//             <span>{tech}</span>
//           ))}
//         </div>
//         <div className="text-slate-50 text-sm font-semibold flex gap-10">
//           {techStack.slice(3).map((tech) => (
//             <span>{tech}</span>
//           ))}
//         </div>

//         <div className="flex gap-10">
//           <a
//             href="https://github.com/Rach1507/portfolio-v2"
//             aria-label="External Link"
//             class="external"
//             className="text-sky-300 w-6 h-6"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               role="img"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="feather feather-external-link"
//             >
//               <title>External Link</title>
//               <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//               <polyline points="15 3 21 3 21 9"></polyline>
//               <line x1="10" y1="14" x2="21" y2="3"></line>
//             </svg>
//           </a>

//           <a
//             href="https://github.com/Rach1507/portfolio-v2"
//             className="text-sky-300 w-6 h-6 hover:text-slate-50"
//             aria-label="GitHub"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               role="img"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="feather feather-github"
//             >
//               <title>GitHub</title>
//               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function LeftProjectCardOld() {
//   const techStack = ["ReactJS", "Tailwind", "NextJS", "Vercel"];

//   return (
//     <div className="w-full grid grid-cols-3">
//       <div className="flex flex-col items-start gap-10">
//         <div className="font-bold text-lg">Header</div>
//         <div className=" backdrop-contrast-75 z-20 text-slate-50 text-sm font-normal tracking-wide text-left leading-6 p-5 break-words">
//           Worked on many Continuous Daily monitoring of Sanity test ,
//           investigating , fixing of failures if any . Worked on increasing unit
//           test coverage and the achieved increase percentage by 15%
//         </div>
//         <div className="text-slate-50 text-sm font-semibold flex gap-10">
//           {techStack.map((tech) => (
//             <span>{tech}</span>
//           ))}
//         </div>

//         <div className="flex gap-10">
//           <a
//             href="https://github.com/Rach1507/portfolio-v2"
//             aria-label="External Link"
//             class="external"
//             className="text-sky-300 w-6 h-6"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               role="img"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="feather feather-external-link"
//             >
//               <title>External Link</title>
//               <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//               <polyline points="15 3 21 3 21 9"></polyline>
//               <line x1="10" y1="14" x2="21" y2="3"></line>
//             </svg>
//           </a>

//           <a
//             href="https://github.com/Rach1507/portfolio-v2"
//             className="text-sky-300 w-6 h-6 hover:text-slate-50"
//             aria-label="GitHub"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               role="img"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="feather feather-github"
//             >
//               <title>GitHub</title>
//               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//       <div className="col-span-2 justify-center items-end ">
//         <img src={portfolioImage} className="opacity-50" alt="" />
//       </div>
//     </div>
//   );
// }
