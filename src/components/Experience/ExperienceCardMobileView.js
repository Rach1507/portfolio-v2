
import { Tabs } from "../ui/tabs.tsx";
import Card  from "./Card";
import { synamediaRoleInfo, otRoleInfo } from "./ExperienceData";

const tabs = [
    {
        title: "Synamedia",
        value: "Synamedia",
        content:  <Card
                role={synamediaRoleInfo.roleName}
                year={synamediaRoleInfo.year}
                actions={synamediaRoleInfo.actions}
                techStack={synamediaRoleInfo.techStack}
                productUrl={synamediaRoleInfo.productUrl}
            >
            </Card>
    },
    {
        title: "OneTrust",
        value: "OneTrust",
        content:  <Card
                role={otRoleInfo.roleName}
                year={otRoleInfo.year}
                actions={otRoleInfo.actions}
                techStack={otRoleInfo.techStack}
                productUrl={otRoleInfo.productUrl}
            ></Card>
    }
]

const ExperienceCardMobileView = () => {
    return (
        <div className="h-screen">
            <span
                // ref={experienceRef}
                className="text-section-headers text-4xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200"
            >
                Experience
            </span>
            <div className=" flex flex-col max-w-5xl mx-auto w-full h-full items-start justify-start mt-6 mb-40">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
};

export default ExperienceCardMobileView;



// ,
//     {
//       title: "Playground",
//       value: "playground",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Playground tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Content",
//       value: "content",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Content tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Random",
//       value: "random",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Random tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//   ];
