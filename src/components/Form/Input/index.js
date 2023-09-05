//! import icon
import LogoURLIcon from "@/assets/icons/logoURL-input.svg";

import Image from "next/image";

const Input = ({
  label = "",
  value = "",
  onChange = "",
  placeholder = "",
  required = false,
  icon = "",
}) => {
  return (
    <div className="flex flex-col gap-2 w-[100%] relative">
      {label && (
        <p className="text-white text-[14px]">
          {label}
          {required && <span className="text-[#FCBF07]">*</span>}
        </p>
      )}
      {icon && (
        <Image
          src={LogoURLIcon}
          alt="icon"
          className="absolute bottom-[22px] left-4"
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-[100%] h-[59px] outline-none border border-[#2C2C2C] bg-[#141414] p-5 ${
          icon && "pl-11"
        }  rounded-lg text-[#86888C] text-sm`}
      />
    </div>
  );
};

export default Input;
