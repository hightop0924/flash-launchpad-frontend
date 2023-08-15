import Image from "next/image";

import Home from "@/assets/icons/home.svg";

const IconBtn = ({
  text = "Home",
  icon = Home,
  heigh = "h-[38px]",
  BgClass = "bg-[#282828]",
  TxClass = "text-[#fff]",
  TxSize = "text-[14px]",
  px = "px-[16px]",
  py = "py-[8px]",
  rounded = "rounded-[20px]",
  borderColor = "border-[#282828]",
}) => {
  return (
    <button
      className={`${px} ${py} flex justify-center items-center gap-2 ${rounded} ${heigh} ${BgClass} border ${borderColor}`}
    >
      <Image src={icon} alt="image" />
      <p className={`${TxClass} text-[14px] font-semibold capitalize`}>
        {text}
      </p>
    </button>
  );
};

export default IconBtn;
