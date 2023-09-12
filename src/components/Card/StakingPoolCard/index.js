import PresalesCardImage from "@/assets/icons/presales-card.svg";

import Image from "next/image";

import BackImage from "@/assets/image/staking-pool/back.png";
import CardOneLogo from "@/assets/image/presales-card-1-logo.png";
import AvatarImage from "@/assets/image/staking-pool/avatar.png";
import Select from "@/components/Form/RoundedSelect";

import RightIcon from "@/assets/icons/right.svg";

import Ethereum from "@/assets/icons/ethereum.svg";
import PresalesAlarm from "@/assets/icons/presales-alarm.svg";
import PresalesFavorites from "@/assets/icons/presales-favorites.svg";

const PresalesCard = ({
  title = "Woygate",
  text = "Fair Launch - Max Spots : 250",
  BKImage = BackImage,
  IogoImage = CardOneLogo,
}) => {
  return (
    <div className="w-[366px] h-[470px]">
      <div className="w-[366px] h-[470px] rounded-2xl bg-[#1B1B1B] overflow-hidden relative border border-[#2C2C2C]">
        <Image src={BackImage} alt="background" />
        <div className="pt-2 px-5 pb-5">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3">
              <Image src={AvatarImage} alt="image" />
              <Image src={RightIcon} alt="image" />
              <Image src={AvatarImage} alt="image" />
            </div>
            <div className="flex flex-row py-1 px-2 items-center gap-1 bg-[#D1FAE5] rounded-[50px] w-[50px] h-[26px]">
              <div className="w-[8px] h-[8px] bg-[#10B981] rounded-full"></div>
              <p className="text-xs text-[#10B981]">Live</p>
            </div>
          </div>
          <div className="flex justify-between mt-5 items-center">
            <div className="flex flex-col gap-[9px]">
              <p className="text-white text-[22px] font-semibold">Woygate</p>
              <p className="text-[#D1D2D2] text-[14px] font-semibold">
                Fair Launch - Max Spots : 250
              </p>
            </div>
            <Image src={Ethereum} alt="Image" />
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Reward Type :</p>
              <div className="flex flex-col w-[30%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">Percent Reward</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Reward Ratio (year): </p>
              <div className="flex flex-col w-[40%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">100%</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Hard Cap :</p>
              <div className="flex flex-col w-[60%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">500K</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Total Staked :</p>
              <div className="flex flex-col w-[20%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">126K (16 stakers) </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Start Time :</p>
              <div className="flex flex-col w-[30%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">2023-08-17 13:20</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">End Time :</p>
              <div className="flex flex-col w-[30%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">2024-08-17 13:20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresalesCard;
