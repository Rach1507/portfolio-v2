import { useState } from "react";
import Card from "./Card";
import {
frontEnd,
  backEndActions,
  backendEndRoleName,
  backEndTechStack,
  otActions,
  otRoleName,
  otTechStack,
} from "./ExperienceData";

export default function ExperienceCardView() {
  const [selected, setSelected] = useState("FE");
  return (
    <div className="">
      <div className="pt-24 pl-0 ">
        <span className="text-4xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200">
          Experience
        </span>
        <div className="grid grid-cols-5 mt-24">
          <div className="grid col-start-1 grid-rows-5 ">
            <button
              className={
                selected === "FE"
                  ? "p-5 border-l  backdrop-contrast-75 "
                  : "p-5 hover:border-l  hover:backdrop-contrast-75 "
              }
              onClick={() => {
                setSelected("FE");
              }}
            >
              Jan 2023 - Present
            </button>
            <button
              className={
                selected === "BE"
                  ? "p-5 border-l  backdrop-contrast-75 "
                  : "p-5 hover:border-l  hover:backdrop-contrast-75 "
              }
              onClick={() => {
                setSelected("BE");
              }}
            >
              June 2022 - Dec 2022
            </button>
            <button
              className={
                selected === "OT"
                  ? "p-5 border-l  backdrop-contrast-75 "
                  : "p-5 hover:border-l  hover:backdrop-contrast-75 "
              }
              onClick={() => {
                setSelected("OT");
              }}
            >
              Mar 2022 - June 2022
            </button>
          </div>
          {selected === "FE" && (
            <Card
              role={frontEnd.roleName}
              actions={frontEnd.actions}
              techStack={frontEnd.techStack}
              productUrl = {frontEnd.productUrl}
            ></Card>
          )}

          {selected === "BE" && (
            <Card
              role={backendEndRoleName}
              actions={backEndActions}
              techStack={backEndTechStack}
            ></Card>
          )}

          {selected === "OT" && (
            <Card
              role={otRoleName}
              actions={otActions}
              techStack={otTechStack}
            ></Card>
          )}
        </div>
      </div>
    </div>
  );
}
