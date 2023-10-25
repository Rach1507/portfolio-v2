import LinkFooter from "../Footer";
import Navbar from "../Home/Navbar";
import Intro from "../Home/Intro";
import MailFooter from "../MailFooter";


export default function Experience(){
    return (
      <div className="grid grid-cols-6 grid-rows-1 w-full h-screen">
        <LinkFooter />
        <div className="col-span-5 flex flex-col col-start-2">

          {/* Would like to have a navbar but i need position to be fixed 
          <Navbar /> */}
          <Intro />
          <MailFooter />
        </div>
      </div>
    );
}