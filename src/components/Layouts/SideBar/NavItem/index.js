import Image from "next/image";

import Presales from "@/assets/icons/presales.svg";
import Right from "@/assets/icons/small-right.svg";

const NavItem = ({
  text = "Presales",
  img = Presales,
  right = false,
  BgClass = "bg-[#1B1B1B]",
  TxClass = "text-[#86888c]",
}) => {
  return (
    <div
      className={`flex items-center gap-x-4 py-3 pl-10 pr-2.5 cursor-pointer ${BgClass}`}
    >
      <Image src={img} alt="image" />
      <p className={`${TxClass} text-[16px] font-semibold capitalize`}>
        {text}
      </p>
      {right && <Image src={Right} alt="right" />}
    </div>
  );
};

export default NavItem;
