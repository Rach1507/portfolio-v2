import LinkFooter from "../Footer";
import Navbar from "./Navbar";
import Intro from "./Intro";
import MailFooter from "../MailFooter";

const Home = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 w-full h-full bg-gradient-to-br from-black to-blue-950">
      <LinkFooter />
      <div className="col-span-5 flex flex-col col-start-2">
        <Navbar />
        <Intro />
        <MailFooter />
      </div>
    </div>
  );
};

export default Home;
