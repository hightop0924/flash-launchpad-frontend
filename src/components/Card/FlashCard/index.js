import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

const FlashCard = ({
  title = "Flash Transfer",
  text = "The best launchpad for professional teams",
}) => {
  return (
    <div className="py-[40px] px-[36px] rounded-xl bg-[#202125] w-[259px] h-[273px] flex flex-col items-center">
      <Image src={Logo} alt="Logo" width={"84px"} height={"79px"} />
      <div className="mt-6">
        <p className="text-white text-[27px] text-center capitalize">{title}</p>
        <p className="text-white text-[14px] text-center">{text}</p>
      </div>
    </div>
  );
};

export default FlashCard;
