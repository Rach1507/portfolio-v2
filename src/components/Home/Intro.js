import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import ReactTyped from "react-typed";
import {Spotlight} from "../ui/Spotlight.tsx";

export default function Intro() {

  return (
    <div className="mt-[25%] md:lg:mt-[8%]">
      <div className="h-4/5 w-4/5 flex flex-col items-start justify-center text-intro-desc">
        {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
        {/* Hi ! 👋
        <span>I am</span>
        <span
          className={`text-8xl font-bold bg-clip-text tracking-wide text-transparent
          ${inView} 
            ?  overflow-hidden whitespace-nowrap  bg-gradient-to-l from-slate-400 to-slate-50
            : text-slate-300
          `}
        >
          Rachitha B R
        </span> */}
        <Fade
          triggerOnce
          cascade
          className=" text-center w-full mt-8"
        >
          {/* <span className="text-3xl font-semibold"> Hi !👋 , I'm </span> */}
          {/*
          <span className="text-3xl font-semibold ">I'm</span> */}
          <span
            className="text-intro-header 
          font-sans font-semibold tracking-wide
               bg-clip-text  text-transparent
             overflow-hidden whitespace-nowrap  bg-gradient-to-l from-slate-400 to-slate-50 
             text-slate-300"

          //  animate-typing
          >
            {/* <span
          className={`text-8xl font-bold bg-clip-text tracking-wide text-transparent
          ${inView} 
            ? animate-typing overflow-hidden whitespace-nowrap  bg-gradient-to-l from-slate-400 to-slate-50
            : text-slate-300
          `}
      */
            }
            Rachitha B R
          </span>
          <span className="text-xl text-intro-desc tracking-wide text-slate-300 font-semibold">Hi , Im a <span className="text-sky-300"> Software Developer </span>  , based out of Bangalore with 2+ years of
            Engineering Experience . </span>
          <span className="text-xl text-intro-desc  text-slate-300 tracking-wide font-semibold"> Currently working as a <span className="text-sky-300"> Front End Engineer </span>  @ Synamedia </span>

        </Fade>
      </div>
      <Fade delay={2000} className="mt-32 w-4/5 h-1/5 grid md:grid-cols-7 grid-cols-3 ">
        <button
          className="flex justify-center col-start-2 md:col-start-4"
          onClick={() => {
            const element = document.getElementById("about")
            console.log(element);
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce mt-10"
          >
            <rect
              style={{
                stroke: "#fff",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
              x="32.146"
              y="19.115"
              width="35.708"
              height="61.769"
              rx="17.854"
              ry="17.854"
            />
            <line
              style={{
                stroke: "#fff",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
              x1="50.073"
              y1="32.979"
              x2="50.073"
              y2="66.94"
            />
            <polyline
              style={{
                stroke: "#fff",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
              points="58.205 58.815 50 67.021 41.795 58.815"
            />
          </svg>
        </button>
      </Fade>
    </div>
  );
}
