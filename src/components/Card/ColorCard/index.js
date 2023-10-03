"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const ColorCard = ({
  title = "Presales",
  text = "Explores presales of any size and king",
  link = "/presales",
  BgColor = "linear-gradient(137deg, #FCBF07 0%, #695416 65.10%, #676252 100%)",
}) => {
  const router = useRouter();

  if (link.includes("https")) {
    return (
      <Link
        className="flex flex-col gap-y-[14px] rounded-[10px] min-w-[335px] h-[143px] px-7 py-[30px] cursor-pointer"
        style={{
          background: `${BgColor}`,
        }}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="text-white text-[22px]">{title}</p>
        <p className="text-white text-[14px]">{text}</p>
      </Link>
    );
  }
  return (
    <div
      className="flex flex-col gap-y-[14px] rounded-[10px] min-w-[335px] h-[143px] px-7 py-[30px] cursor-pointer"
      style={{
        background: `${BgColor}`,
      }}
      onClick={() => {
        router.push(link);
      }}
    >
      <p className="text-white text-[22px]">{title}</p>
      <p className="text-white text-[14px]">{text}</p>
    </div>
  );
};

export default ColorCard;
