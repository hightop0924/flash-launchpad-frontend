import PresalesCardImage from "@/assets/icons/presales-card.svg";

import Image from "next/image";

const PresalesCard = () => {
  return (
    <div
      className="w-[366px] h-[556px]"
      style={{
        background: `url('${PresalesCardImage.src}') center center`,
      }}
    >
      <p className="text-[#FCBF07] text-[14px] text-center pt-[6px]">
        AffILIATE
      </p>
      <div className="w-[366px] h-[527px] rounded-2xl bg-white"></div>
    </div>
  );
};

export default PresalesCard;
