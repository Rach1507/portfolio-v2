import myImage from "../../assests/me-sm.jpg"



export default function About() {
    return (
        <div
            className="pt-36 pb-36 grid grid-cols-7 w-screen h-[100vh] bg-gradient-to-b  from-black to-slate-950
   font-sans overflow-hidden"
        >
            <div className="col-span-6 flex flex-col col-start-2">
                <div
                    id="about"
                    className=" flex flex-col gap-36 w-full h-full  font-sans overflow-hidden "
                >
                    <div className="grid grid-cols-10">
                        <div className="col-span-7 flex flex-col gap-16 col-start-2 ">
                            <div className="text-4xl font-sans font-semibold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200 col-span-6 ">A little about me ..
                            </div>
                            <div className="w-full grid grid-cols-5 gap-8">
                                <div className="col-span-3 flex flex-col font-normal text-lg items-start gap-8  text-wrap">
                                    <ul className="list-outside list-image-university"><li className=""> I graduated from National Institute of
                                        Engineering , Mysore in July 2022.</li></ul>
                                    <ul className="list-inside list-image-frontend"> <li>I am currently working at
                                        Synamedia as Associate Software Engineer as part of the Core Common
                                        UI Team working on building product UIs.</li>
                                    </ul>
                                    <ul className="list-outside list-image-code"><li>Before graduation , I
                                        worked at OneTrust Privacy as a Full Stack Developer Intern for 4
                                        months.</li>
                                        
                                    </ul>
                                    <ul className="list-inside list-image-learning"><li>Currently diving into the dynamic world of the Front End
                                        ecosystem, seeking more exposure , concurrently I'm immersing myself
                                        in reading and understanding, aiming to strengthen the fundamentals
                                        for a overall solid foundation.</li>
                                        
                                    </ul>
                                    <ul className="list-outside list-image-hobbies"> <li>I really really enjoy singing my heart out , my cult workouts , mid day reads / 20 min anime/tv breaks , chess games with my niece , playing silly with my  3 yo nephew , friday evening swims and the dopamine boost of crossing
                                        off mundane tasks from my todo :)))</li>
                                        
                                    </ul>
                                </div>
                                <div className="col-span-2 justify-center items-end ">
                                    <img
                                        data-aos="fade-left"
                                        src={myImage}
                                        className="opacity-50 bg-center bg-clip-border rounded-full w-96 h-96 "
                                        alt="me"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
