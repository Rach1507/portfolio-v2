export default function ExperienceCardView() {
  return (
    <div className="basis-4/5">
      {/* just align-items to center x instead of padding - check  */}
      <div className="p-36 pl-0  flex-auto flex-row items-start ">
        <span className="text-4xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
          Experience
        </span>
        <br />
        <div className="grid grid-cols-3 mt-36">
          <div class="grid col-start-1 grid-rows-3">
            <button className=" p-5 hover:border-l hover:accent-transparent">
              Jan 2023 - Present
            </button>
            <button className=" p-5 hover:border-l">
              June 2022 - Dec 2022
            </button>
            <button className=" p-5 hover:border-l">
              Mar 2022 - June 2022
            </button>
          </div>
          <div className="col-span-2 "></div>
        </div>
      </div>
    </div>
  );
  //     <div className="grid grid-cols-3">
  //       <div class="grid grid-rows-3 divide-y hover:divide-sky-500">
  //         <div className="text-center p-5">01</div>
  //         <div>02</div>
  //         <div>03</div>
  //       </div>
  //       <div ></div>
  //     </div>
  //   );
}
