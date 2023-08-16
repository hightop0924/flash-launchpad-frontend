import Image from "next/image";

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
  onClick = "",
  index = "",
}) => {
  return (
    <div
      className={`flex items-center gap-x-4 py-3 pl-10 pr-2.5 relative cursor-pointer ${BgClass}`}
      style={{
        background: `${
          active
            ? "linear-gradient(270deg, rgba(252, 191, 7, 0.10) 0%, rgba(252, 191, 7, 0.05) 49.08%, rgba(252, 191, 7, 0.00) 100%)"
            : ""
        }`,
      }}
      onClick={() => onClick(index)}
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
  );
};

export default NavItem;
