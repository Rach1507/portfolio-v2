import LinkFooter from "../Footer";
import Navbar from "../Home/Navbar";
import Intro from "../Home/Intro";
import MailFooter from "../MailFooter";
import ExperienceCardView from "./ExperienceCardView";


export default function Experience(){
    return (
      <div className="grid grid-cols-6 grid-rows-1 w-full h-screen">
        <LinkFooter />
        <div className="col-span-5 flex flex-col col-start-2">
          {/* <Navbar /> */}
          <ExperienceCardView />
          <MailFooter />
        </div>
      </div>
    );
}

    //   <div className="grid grid-cols-6 grid-rows-1 w-full h-screen p-52 ml-0"></div>;

        // {/* <LinkFooter />
        // <div className="col-span-4 col-start-2 ">
        //   <p className="text-xl text-center row-start-2 font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
        //     Experience
        //   </p>
        //   <ExperienceCardView />

        //   {/* Would like to have a navbar but i need position to be fixed 
        //   <Navbar /> */}x
        //   <Intro />
        //   <MailFooter /> */}