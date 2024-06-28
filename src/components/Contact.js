export default function Contact() {
  return (
    <div
      id="contact"
      className=" w-full bg-gradient-to-b to-black from-blue-950 font-sans"
    >
      <div className="z-[80] md:z-0 m-20 w-4/5 mx-auto grid grid-rows-5 gap-5 items-center text-center justify-center ">
        <div>
          And yeah , thats it for now :/ , A bunch of exciting projects in the
          pipeline/brain oven :D{" "}
        </div>
        <div> Thanks for checking out my portfolio! </div>
        <div>
          {" "}
          I'm super eager to connect and always on the lookout for diverse
          experiences and opportunities. Let's connect !{" "}
        </div>

        <div className="row-span-3 flex flex-row gap-12 justify-center">
          <a
            href="https://www.linkedin.com/in/rachitha-br/"
            aria-label="Linkedin"
            target="_blank"
            className="text-slate-50 w-10 h-10 m:w-14 m:h-14  animate-pulse"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rachitha715@gmail.com"
            aria-label="Gmail"
            target="_blank"
            className="text-slate-50 w-10 h-10 m:w-14 m:h-14  animate-pulse"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Gmail"
            >
              <path
                stroke="rgb(148 163 184)"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.111 18.994H4.788C4.192 19.047 3 18.753 3 17.15V7.741c0-2.225 2.3-1.982 3.46-1.116l5.528 4.032 5.644-4.169C18.98 5.418 21 6.169 21 8.448v8.314c0 .888-.237 2.232-2.02 2.232h-2.091v-6.788l-4.9 3.645-4.878-3.645v4.513"
                class="colorStroke000000 svgStroke"
              ></path>
            </svg>
          </a>
          <a
            href="mailto:rachitha715@gmail.com"
            aria-label="mail"
            target="_blank"
            className="text-slate-50 w-10 h-10 m:w-14 m:h-14 animate-pulse"
            rel="noreferrer"
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
              className="fill-slate-50"
            >
              <title>email-round</title>
              <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM32.22,79.39,52.1,59.46,32.22,43.25V79.39ZM54.29,61.24,33.79,81.79H88.91L69.33,61.24l-6.46,5.51h0a1.42,1.42,0,0,1-1.8,0l-6.78-5.53Zm17.18-1.82L90.66,79.55V43.07L71.47,59.42ZM34,41.09l27.9,22.76L88.65,41.09Zm65.4-17.64a53.72,53.72,0,1,0,15.74,38,53.56,53.56,0,0,0-15.74-38Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mb-0">
        <div className="flex bg-opacity-10 justify-center mb-0 text-sm font-light backdrop-contrast-150 p-10 w-screen">
          Designed and Built by Rachitha B R 2023
        </div>
      </div>
    </div>
  );
}
