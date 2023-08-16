import Image from "next/image";
import Binance from "@/assets/icons/binance-logo.svg";

const PartnerCard = ({ icon = Binance }) => {
  return (
    <div className="w-[234px] h-[99px] rounded-[10px] border border-[#2C2C2C] bg-[#1B1B1B] flex justify-center items-center">
      <Image src={icon} alt="image" />
    </div>
  );
};

export default PartnerCard;
