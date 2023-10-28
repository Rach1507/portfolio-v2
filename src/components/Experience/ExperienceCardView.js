import { useState } from "react";

export default function ExperienceCardView() {
  const [selected, setSelected] = useState("FE");
  return (
    <div className="basis-4/5">
      <div className="p-36 pl-0 flex-auto flex-row items-start ">
        <span className="text-4xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
          Experience
        </span>
        <div className="grid grid-cols-6 mt-24">
          <div class="grid col-start-1 grid-rows-5 ">
            <button
              className=" p-5 hover:border-l  hover:backdrop-contrast-75"
              onClick={() => {
                setSelected("FE");
              }}
            >
              Jan 2023 - Present
            </button>
            <button
              className=" p-5 hover:border-l  hover:backdrop-contrast-75 "
              onClick={() => {
                setSelected("BE");
              }}
            >
              June 2022 - Dec 2022
            </button>
            <button
              className=" p-5 hover:border-l  hover:backdrop-contrast-75"
              onClick={() => {
                setSelected("OT");
              }}
            >
              Mar 2022 - June 2022
            </button>
          </div>
          {selected === "FE" && (
            <div className="col-span-5 col-start-2 ml-36">
              <div className="grid grid-rows-1 grid-cols-3">
                <div className="border-t-4  border-double "></div>
                <div className="grid-start-1 col-span-3 text-xl z-20 border-l-4  border-double pt-10 pl-10 h-24">
                  Associate Software Engineer (Front End) - Synamedia
                </div>
              </div>

              <div className=" ml-24 p-5 z-10 mr-24">
                <ul class="list-disc">
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside downNow this is a story all about how,
                    my life got flipped-turned upside down
                  </li>
                  <li className="p-3 flex flex-row gap-4">
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      ReactJS
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      NextJS
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Sass
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Headless
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Cypress
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Style Dictionary
                    </button>
                  </li>
                </ul>
              </div>

              <div className="grid grid-row-1 grid-cols-3">
                <div className="grid-start-1 col-span-3 text-xl z-20 border-r-4  border-double pt-10 pl-10 h-24" />
                <div className="border-b-4 col-start-3 border-double "></div>
              </div>
            </div>
          )}

          {selected === "BE" && (
            <div className="col-span-4 col-start-2 ml-36">
              <div className="grid grid-rows-1 grid-cols-3">
                <div className="border-t-4  border-double "></div>
                <div className="grid-start-1 col-span-3 text-xl z-20 border-l-4  border-double pt-10 pl-10 h-24">
                  Associate Software Engineer (Back End) - Synamedia
                </div>
              </div>

              <div className=" p-24 z-10">
                <ul class="list-disc">
                  <li className="">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside downNow this is a story all about how,
                    my life got flipped-turned upside down
                  </li>
                  <li className="p-3 flex flex-row gap-4">
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      ReactJS
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      NextJS
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Sass
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Headless
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Cypress
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Style Dictionary
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {selected === "OT" && (
            <div className="col-span-4 col-start-2 ml-36">
              <div className="grid grid-rows-1 grid-cols-3">
                <div className="border-t-4  border-double "></div>
                <div className="grid-start-1 col-span-3 text-xl z-20 border-l-4  border-double pt-10 pl-10 h-24">
                  Full Stack Developer Intern - OneTrust
                </div>
              </div>

              <div className=" ml-24 p-5 z-10">
                <ul class="list-disc">
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside down.Now this is a story all about
                    how, my life got flipped-turned upside down
                  </li>
                  <li className="p-3">
                    Now this is a story all about how, my life got
                    flipped-turned upside downNow this is a story all about how,
                    my life got flipped-turned upside down
                  </li>
                  <li className="p-3 flex flex-row gap-4">
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      ReactJS
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      NextJS
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Sass
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Headless
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Cypress
                    </button>
                    <button className="rounded-full bg-sky-200 p-2 text-xs text-black">
                      Style Dictionary
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}
