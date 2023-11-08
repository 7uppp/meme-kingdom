import Image from "next/image";

interface SideBarButtonProps {
  icon: string;
  onClick: () => void;
}

export default function footerButton({ icon, onClick }: SideBarButtonProps) {
  return (
    <button
      className="footerButton  flex justify-center items-center  "
      onClick={onClick}
    >
      <Image width={20} height={20} alt={`${icon}`} src={icon} />
    </button>
  );
}
