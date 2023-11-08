"use client";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import SearchBar from "@/components/bars/searchBar";
import twitterIcon from "@/public/icon/twitter.svg";
import discordIcon from "@/public/icon/discord.svg";
import menu from "@/public/icon/menu.svg";

export default function NavBar() {
  return (
    <header className="navbar w-full container ">
      <div className="navbar-wrapper flex justify-between items-center">
        <div className="pc-nav w-full flex justify-between items-center">
          <div className="logo">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </div>

          <div className="search-form-wrapper hidden md:flex relative ml-[1.25rem] sm:ml-0 md:w-[43.75rem] ">
            <SearchBar />
          </div>

          <div className="social-media-icon hidden md:flex justify-center items-center gap-4 ml-[0.9375rem]">
            <Image
              src={twitterIcon}
              width={40}
              height={40}
              alt="twitter-icon"
            />
            <Image
              src={discordIcon}
              width={30}
              height={30}
              alt="discord-icon"
            />
          </div>
        </div>

        <div className="mobile-nav md:hidden w-[40px]">
          <Menu direction="ltr" isLazy={true}>
            <MenuButton>
              <Image src={menu} alt="drop-menu" />
            </MenuButton>
            <MenuList>
              <MenuItem>Explore</MenuItem>
              <MenuItem>Post</MenuItem>
              <MenuItem>Notification</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
}
