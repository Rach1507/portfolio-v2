import { useEffect, useState, useRef } from "react";

export default function Intro() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="basis-4/5 overflow-hidden " ref={ref}>
      <div className="h-screen flex flex-col items-start justify-center font-sans">
        <span className="text-l font-medium ">
          Hi !<br /> <span>My name is</span>{" "}
        </span>

        <span
          className={`text-8xl font-bold bg-clip-text tracking-wide text-transparent  
         ${
           inView
             ? `transition-colors delay-300 ease-in-out bg-gradient-to-l from-slate-400 to-slate-50`
             : `text-slate-300`
         }`}
        >
          Rachitha B R
        </span>
        <br />
        <p className="indent-8 break-words w-3/4 tracking-wide text-sm leading-9">
          Software Developer with 1.5+ years of Engineering Experience . I
          graduated from National Institute of Technology , Mysore in the year
          2022. I am currently working at Synamedia as Associate Sotware
          Engineer as part of the Core Common UI Team working on Front End
          tasks. Before graduation , I worked at OneTrust Privacy as a Full
          Stack Developer Intern for 4 months .Currently diving into the dynamic
          world of the Front End ecosystem, seeking more exposure and
          concurrently, I'm immersing myself in reading and understanding,
          aiming to strengthen the fundamentals for a solid foundation. I really
          really enjoy singing my heart out , my cult workouts , mid day Harry
          potter reads / 20 min anime breaks , playing silly with my 3 yo niece
          , friday evening swims and the dopamine of crossing off mundane tasks
          from my todo :)))
        </p>
      </div>
    </div>
  );
}
