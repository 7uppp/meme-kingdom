"use client";

import FooterButton from "@/components/buttons/footerButton";
import { footerArray } from "@/constants";

export default function MobileFooter() {
  const handleClick = (icon: string) => {
    console.log(icon);
  };

  return (
    <div className="footer-wrapper grid grid-rows-1 grid-cols-4 gap-x-4 fixed w-full">
      {footerArray.map((item, index) => {
        return (
          <FooterButton
            key={index}
            icon={item.icon}
            onClick={() => handleClick(item.icon)}
          />
        );
      })}
    </div>
  );
}
