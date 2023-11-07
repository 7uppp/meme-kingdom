"use client";
import Image from "next/image";
import searchIcon from "@/public/icon/search.png";
import twitterIcon from "@/public/icon/twitter.svg";
import discordIcon from "@/public/icon/discord.svg";

export default function NavBar() {
  return (
    <header className="navbar w-full container ">
      <div className="navbar-wrapper flex justify-between items-center ">
        <div className="logo">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>

        <div className="search-form-wrapper flex w-[700px]">
          <form
            action=""
            className="search-bar w-full relative flex justify-center items-center "
          >
            <input
              type="search"
              placeholder="Search memes..."
              className="search-input flex-1 w-full border rounded-lg bg-gray-100 h-12 px-4 outline-none"
            />
            <div className="search-button absolute flex justify-center items-center right-1  cursor-pointer">
              <Image
                src={searchIcon.src}
                alt="search-Icon"
                width={40}
                height={40}
              />
            </div>
          </form>
        </div>

        <div className="social-media-icon flex justify-center items-center gap-4 ml-[15px]">
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
