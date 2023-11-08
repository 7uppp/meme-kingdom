"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import SearchBar from "@/components/bars/searchBar";
import twitterIcon from "@/public/icon/twitter.svg";
import discordIcon from "@/public/icon/discord.svg";
import menu from "@/public/icon/menu.svg";
import searchIcon from "@/public/icon/search.png";

export default function NavBar() {
  const [searchIconClicked, setSearchIconClicked] = useState(false);

  return (
    <header className="navbar w-full container ">
      <div className="navbar-wrapper flex justify-between items-center">
        <div className="pc-nav hidden md:flex w-full justify-between items-center">
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

        <div className="mobile-navbar md:hidden w-full flex justify-between items-center">
          {searchIconClicked ? (
            <div className=" flex justify-between items-center w-full">
              <div className="search-form-wrapper flex relative ml-[1.25rem] sm:ml-0 w-[500px]">
                <SearchBar />
              </div>
              <div
                className="back flex justify-center items-center w-[100px] border-solid border-2 border-gray-400 box-border p-2 rounded-full cursor-pointer "
                onClick={() => {
                  setSearchIconClicked(false);
                }}
              >
                <button>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div className="logo">
                <Image src="/logo.svg" width={100} height={100} alt="logo" />
              </div>

              <div className="toolbar flex justify-between items-center">
                <div
                  className="searchIcon"
                  onClick={() => setSearchIconClicked(true)}
                >
                  <Image
                    src={searchIcon}
                    alt="search-icon"
                    className="cursor-pointer"
                  />
                </div>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
}
