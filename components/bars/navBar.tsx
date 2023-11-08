"use client";
import Image from "next/image";
import SearchBar from "@/components/bars/searchBar";
import twitterIcon from "@/public/icon/twitter.svg";
import discordIcon from "@/public/icon/discord.svg";

export default function NavBar() {
  return (
    <header className="navbar w-full container ">
      <div className="navbar-wrapper flex justify-between items-center ">
        <div className="logo">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>

        <div className="search-form-wrapper relative flex ml-[1.25rem] sm:ml-0 sm:w-[43.75rem] w-[25rem]">
          <SearchBar />
        </div>

        <div className="social-media-icon hidden sm:flex justify-center items-center gap-4 ml-[0.9375rem]">
          <Image
            src={twitterIcon.src}
            width={40}
            height={40}
            alt="twitter-icon"
          />
          <Image
            src={discordIcon.src}
            width={30}
            height={30}
            alt="discord-icon"
          />
        </div>
      </div>
    </header>
  );
}
