import Image from "next/image";

import Telegram from "@/assets/icons/telegram.svg";
import ExportedImage from "next-image-export-optimizer";

const SmallIconOnlyBtn = ({ icon = Telegram, shadow = true }) => {
  return (
    <div
      className={`w-[90px] h-[40px] flex px-[33px] py-2 items-center justify-center bg-[#202125] rounded-lg cursor-pointer ${
        shadow && "shadow-xl"
      }`}
    >
      <ExportedImage src={icon} alt="icon" />
    </div>
  );
};

export default SmallIconOnlyBtn;
