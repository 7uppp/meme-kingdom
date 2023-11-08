"use client";
import Image from "next/image";
import { sideBarArrary } from "@/constants";
import SideBarButton from "@/components/buttons/sideBarButton";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import menu from "@/public/icon/menu.svg";

export default function SideBar() {
  const handleClick = (title: string) => {
    console.log(title);
  };

  const handleLogin = () => {
    console.log("login");
  };
  return (
    <section className="sideBar w-full mt-20 ">
      <div className="sideBar-wrapper flex flex-col h-[90vh] justify-between">
        <div>
          <div className="sideBar-pc hidden md:flex flex-col justify-center gap-10 md:relative  ">
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

        <div className="other-menu md:flex  hidden ">
          <Menu>
            <MenuButton as={Button}>
              <Image src={menu} alt="menu" width={40} height={40} />
            </MenuButton>
            <MenuList>
              <MenuItem>Log Out</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </section>
  );
}
