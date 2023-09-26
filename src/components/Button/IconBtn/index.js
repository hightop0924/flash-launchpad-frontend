"use client";

import Image from "next/image";

import Home from "@/assets/icons/home.svg";

const IconBtn = ({
  text = "Home",
  icon = Home,
  rightIcon = "",
  heigh = "h-[38px]",
  BgClass = "bg-[#282828]",
  TxClass = "text-[#fff]",
  TxSize = "text-[14px]",
  px = "px-[16px]",
  py = "py-[8px]",
  rounded = "rounded-[20px]",
  borderColor = "border-[#282828]",
  onClick = "",
  capitalize = true,
  iconHeight,
}) => {
  return (
    <button
      className={`${px} ${py} flex flex-row justify-center items-center gap-2 ${rounded} ${heigh} ${BgClass} border ${borderColor}`}
      onClick={(e) => onClick()}
    >
      <Image src={icon} height={iconHeight ? iconHeight : ""} alt="image" />
      <p
        className={`${TxClass} ${TxSize} font-semibold ${
          capitalize ? "capitalize" : ""
        }`}
      >
        {text}
      </p>
      {rightIcon && <Image src={rightIcon} alt="image" />}
    </button>
  );
};

export default IconBtn;
