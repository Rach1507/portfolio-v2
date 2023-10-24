import Footer from "../Footer";

const Home = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-1 w-full h-screen">

      
    <Footer/>

      <div className="col-span-4 flex flex-col col-start-2">
        <div className="p-8 flex flex-row justify-end items-center gap-5">
          <a>About</a>
          <a>Experience</a>
          <a>Projects</a>
          <a>Contact</a>
          <button className=" p-2 rounded-md border-dotted border-2 border-sky-500 bg-transparent">
            Resume
          </button>
        </div>
        {/* <div className="w-full h-screen"> */}
        <div className="basis-4/5">
          <div className="p-52 pl-0 flex-auto flex-row items-start ">
            Hi , My name is <br />
            <span className="text-7xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
              Rachitha B R
            </span>
            <br />
            <p className="indent-8 break-all w-2/3 ">
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
              Sotware Engineer at Synamedia Sotware Engineer at Synamedia
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="fixed ml-24 flex w-9 flex-col justify-end items-center gap-5 bottom-0 right-8">
            <p className="grid grid-row-1 writing-mode">rachitha715@gmail.com</p>
            <div className="border border-solid border-sky-500 h-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
