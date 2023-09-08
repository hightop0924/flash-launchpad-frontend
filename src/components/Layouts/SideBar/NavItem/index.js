"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Presales from "@/assets/icons/presales.svg";
import Right from "@/assets/icons/small-right.svg";

const NavItem = ({
  text = "Presales",
  img = Presales,
  active_img = Presales,
  right = false,
  BgClass = "bg-[#1B1B1B]",
  TxClass = "text-[#86888c]",
  active = false,
  childItems = "",
  path = "",
  index = "",
  onClick = "",
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (childItems) {
      onClick(index);
    } else {
      router.push(path);
    }
  };

  const handleItemClick = (url) => {
    router.push(url);
  };

  return (
    <div>
      <div
        className={`flex items-center gap-x-4 py-3 pl-10 pr-2.5 relative cursor-pointer ${BgClass}`}
        style={{
          background: `${
            active
              ? "linear-gradient(270deg, rgba(252, 191, 7, 0.10) 0%, rgba(252, 191, 7, 0.05) 49.08%, rgba(252, 191, 7, 0.00) 100%)"
              : ""
          }`,
        }}
        onClick={() => handleClick()}
      >
        <Image src={active ? active_img : img} alt="image" />
        <p className={`${TxClass} text-[16px] font-semibold capitalize`}>
          {text}
        </p>
        {right && <Image src={Right} alt="right" />}
        {active && (
          <div className="h-[54px] w-[6px] absolute right-0 top-0 bg-[#FCBF07] rounded-l-2xl"></div>
        )}
      </div>
      {childItems && active && (
        <div className="flex flex-col gap-3 mt-3">
          {childItems.map((item, index) => (
            <div
              className="py-[10px] pl-[52px] flex flex-row gap-6 items-center cursor-pointer"
              key={index}
              onClick={() => handleItemClick(item.path)}
            >
              <div
                className={`w-[8px] h-[8px] ${
                  item.active ? "bg-[#FCBF07]" : "bg-[#282828]"
                }  rounded-full`}
              ></div>
              <p
                className={`text-sm ${
                  item.active ? "text-[#FCBF07]" : "text-[#86888C]"
                } `}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
