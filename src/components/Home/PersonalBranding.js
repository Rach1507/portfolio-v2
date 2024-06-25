import LinkFooter from "../Footer";
import { Fade } from "react-awesome-reveal";
import Navbar from "./Navbar";
import Intro from "./Intro";
import MailFooter from "../MailFooter";
import About from "./About";
import {AuroraBackground} from "../ui/aurora-background.tsx"

const PersonalBranding = () => {
    return (
        <AuroraBackground>
            <div
                className="flex flex-row-reverse grid-rows-1 w-full h-screen bg-gradient-to-b
        to-blue-950
       "
            >
                <div className="mt-[25%] md:lg:mt-[8%]">
                    <div className="h-4/5 w-4/5 flex flex-col items-start justify-center text-intro-desc">
                        <Fade
                            triggerOnce
                            cascade
                            className=" text-right w-full mt-8"
                        >
                            <span
                                className="text-8xl
          font-sans font-semibold tracking-wide
               bg-clip-text  text-transparent
             overflow-hidden whitespace-nowrap  bg-gradient-to-l from-slate-400 to-slate-50 
             text-slate-300 mr-32"
                            >
                                Rachitha B R
                            </span>
                            <div>
                            <span className="text-2xl  tracking-wide text-slate-300 font-semibold"> <span className="text-sky-300"> www.rachithabr.dev </span>  
                            </span>
                            <span className="text-2xl   text-slate-300 tracking-wide font-semibold"> | <span className="text-sky-300">brrachitha027@gmail.com  </span>  </span>
                            </div>

                

                        </Fade>
                    </div>
                </div>
                {/* <div className=" flex flex-col gap-0 ">
      <span
        className="text-intro-header 
        font-sans font-semibold tracking-wide
        bg-clip-text  text-transparent
        overflow-hidden whitespace-nowrap bg-gradient-to-l from-slate-400 to-slate-50 
        text-slate-300" >
            Hi , Im Rachitha B R 
      </span>
     <div className="text-xl text-intro-desc tracking-wide text-slate-300 font-semibold flex justify-end"><span>www.rachithabr.dev</span> | <span>brrachitha027@gmail.com</span></div> 
      </div> */}

            </div>
        </AuroraBackground>
    );
};

export default PersonalBranding;