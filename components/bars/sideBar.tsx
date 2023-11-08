"use client";

import { sideBarArrary } from "@/constants";
import SideBarButton from "@/components/buttons/sideBarButton";

export default function SideBar() {
  const handleClick = (title: string) => {
    console.log(title);
  };

  const handleLogin = () => {
    console.log("login");
  };
  return (
    <section className="sideBar w-full mt-20">
      <div className="sideBar-wrapper flex flex-col">
        <div className="sideBar-pc hidden md:flex flex-col justify-center gap-10  ">
          {sideBarArrary.map((item, index) => {
            return (
              <SideBarButton
                key={index}
                title={item.title}
                icon={item.icon}
                onClick={() => handleClick(item.title)}
              />
            );
          })}
        </div>
        <div
          className="loginButton hidden md:flex justify-center items-center w-[15.625rem] rounded-full box-border p-4 text-2xl font-bold mt-8 cursor-pointer bg-[#ff2e4d] text-white "
          onClick={handleLogin}
        >
          <button>log in</button>
        </div>
      </div>
    </section>
  );
}
