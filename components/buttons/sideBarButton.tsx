import Image from "next/image";

interface SideBarButtonProps {
  title: string;
  icon: string;
  onClick: () => void;
}

export default function SideBarButton({
  title,
  icon,
  onClick,
}: SideBarButtonProps) {
  return (
    <button onClick={onClick} className="sideBarButton ">
      <div className="sideBarButton-wrapper w-[12rem] flex justify-start items-center rounded-2xl hover:bg-gray-200 hover:border hover:scale-110  ">
        <div className="sideBarButton-icon">
          <Image width={40} height={40} alt={`${title}-icon`} src={icon} />
        </div>
        <div className="sideBarButton-title ml-[1.875rem] md:text-xl font-bold">
          {title}
        </div>
      </div>
    </button>
  );
}
