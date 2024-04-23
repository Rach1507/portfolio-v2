import LinkFooter from "../Footer";
import Navbar from "./Navbar";
import Intro from "./Intro";
import MailFooter from "../MailFooter";
import About from "./About";
import {AuroraBackground} from "../ui/aurora-background.tsx"

const Home = () => {
  return (
    <AuroraBackground>
    <div
      id="home"
      className="grid grid-cols-6 grid-rows-1 w-full h-screen bg-gradient-to-b
     
        to-blue-950
       
       "
       //  from-black via-[#0f0230] to-black
      //  from-black via-[#0f0230] to-slate-950
      // to-blue-950 from-slate-950
    >

      <LinkFooter />
      <div className="col-span-5 flex flex-col gap-0 col-start-2">
        <Navbar />
        <Intro />
        <MailFooter />
      </div>
   
    </div>
    </AuroraBackground>
  );
};

export default Home;
