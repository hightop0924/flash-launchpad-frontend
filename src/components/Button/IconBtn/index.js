"use client";

import Image from "next/image";

import Home from "@/assets/icons/home.svg";
import ExportedImage from "next-image-export-optimizer";

const IconBtn = ({
  text = "Home",
  className = "",
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
  onClick = () => {},
  capitalize = true,
  iconHeight,
}) => {
  return (
    <button
      className={`${className} ${px} ${py} flex flex-row justify-center items-center gap-2 ${rounded} ${heigh} ${BgClass} border ${borderColor}`}
      onClick={(e) => onClick()}
    >
      {icon && (
        <ExportedImage
          src={icon}
          height={iconHeight ? iconHeight : ""}
          alt="image"
          style={{ maxWidth: "none" }}
        />
      )}
      {text && (
        <p
          className={`${TxClass} ${TxSize} font-semibold ${
            capitalize ? "capitalize" : ""
          }`}
        >
          {text}
        </p>
      )}
      {rightIcon && <ExportedImage src={rightIcon} alt="image" />}
    </button>
  );
};

export default IconBtn;
