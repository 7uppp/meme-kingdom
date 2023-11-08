"use client";

import { ToolListArrary } from "@/constants";
import SideBarButton from "@/components/buttons/sideBarButton";

export default function SideBar() {
  const handleClick = (title: string) => {
    console.log(title);
  };
  return (
    <section className="sideBar w-full mt-20">
      <div className="sideBar-wrapper ">
        <div className="toolList-pc hidden md:flex flex-col justify-center gap-10  ">
          {ToolListArrary.map((tool, index) => {
            return (
              <SideBarButton
                key={index}
                title={tool.title}
                icon={tool.icon}
                onClick={() => handleClick(tool.title)}
              />
            );
          })}
        </div>

        <div className="toolList-mobile md:hidden "></div>
      </div>
    </section>
  );
}
