import Image from "next/image";

import Presales from "@/assets/icons/presales.svg";
import Right from "@/assets/icons/small-right.svg";

const NavItem = ({
  text = "Presales",
  img = Presales,
  right = false,
  BgColor = "#1B1B1B",
  TxColor = "#86888c",
}) => {
  return (
    <div
      className={`flex items-center gap-x-4 py-3 pl-10 pr-2.5 bg-[${BgColor}]`}
    >
      <Image src={img} alt="image" />
      <p className={`text-[${TxColor}] text-[16px] font-semibold capitalize`}>
        {text}
      </p>
      {right && <Image src={Right} alt="right" />}
    </div>
  );
};

export default NavItem;
