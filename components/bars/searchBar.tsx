import { Button, FormControl } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/icon/search.png";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const disableSearchButton = input.length === 0;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={submitSearch}>
      <FormControl>
        <input
          type="search"
          value={input}
          onChange={handleInputChange}
          placeholder="Search memes..."
          className="search-input input flex-1 w-full border rounded-lg bg-gray-100 h-12 px-4 outline-none"
        />
        <Button
          type="submit"
          className="search-button absolute flex justify-center items-center top-1 right-1 cursor-pointer"
          isDisabled={disableSearchButton}
        >
          <Image
            src={searchIcon.src}
            alt="search-Icon"
            width={40}
            height={40}
          />
        </Button>
      </FormControl>
    </form>
  );
}
