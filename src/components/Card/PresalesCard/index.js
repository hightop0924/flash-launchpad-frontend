import PresalesCardImage from "@/assets/icons/presales-card.svg";

import Image from "next/image";

import CardOneBack from "@/assets/image/presales-card-1-back.png";
import CardOneLogo from "@/assets/image/presales-card-1-logo.png";

import Ethereum from "@/assets/icons/ethereum.svg";
import PresalesAlarm from "@/assets/icons/presales-alarm.svg";
import PresalesFavorites from "@/assets/icons/presales-favorites.svg";

import Badge from "./Badge";

const PresalesCard = ({
  title = "Woygate",
  text = "Fair Launch - Max Spots : 250",
  BKImage = CardOneBack,
  IogoImage = CardOneLogo,
}) => {
  return (
    <div
      className="w-[366px] h-[599px]"
      style={{
        background: `url('${PresalesCardImage.src}')`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <p className="text-[#FCBF07] text-[14px] text-center pt-[6px]">
        AffILIATE
      </p>
      <div className="w-[366px] h-[572px] rounded-2xl bg-[#1B1B1B] overflow-hidden relative border border-[#2C2C2C]">
        <Image src={CardOneBack} alt="background" />
        <Image
          src={CardOneLogo}
          alt="logo"
          className="absolute top-[76px] left-5 border-[1px] border-[#202125] rounded-full"
        />
        <div className="pt-4 px-5 pb-5">
          <div className="flex justify-end gap-[8px]">
            <Badge />
            <Badge
              text="KYC"
              BgClass="bg-[#FCBF0729]/[.16]"
              TxColor="text-[#FCBF07]"
            />
            <Badge
              text="KYB"
              BgClass="bg-[#51C40A29]/[.16]"
              TxColor="text-[#51C40A]"
            />
          </div>

          <div className="flex justify-between mt-5 items-center">
            <div className="flex flex-col gap-[9px]">
              <p className="text-white text-[22px] font-semibold">Woygate</p>
              <p className="text-white text-[14px] font-semibold">
                Fair Launch - Max Spots : 250
              </p>
            </div>
            <Image src={Ethereum} alt="Image" />
          </div>

          <div className="flex flex-col mt-6 gap-2">
            <p className="text-[#86888C] text-[16px]">Progress 602.26%</p>

            <div className="bg-[#2C2C2C] rounded-[150px] w-[326px] h-[12px] relative">
              <div className="absolute bg-[#FCBF07] rounded-[150px] h-[12px] w-[173px]"></div>
            </div>

            <div className="flex justify-between">
              <p className="text-[#86888c] text-[14px]">90.339ETH</p>
              <p className="text-[#FCBF07] text-[14px]">0.5ETH</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Softcap</p>
              <div className="flex flex-col w-[60%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">15 ETH</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Hardcap</p>
              <div className="flex flex-col w-[70%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">&</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Liquidity</p>
              <div className="flex flex-col w-[60%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">60%</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-white text-[14px]">Locked</p>
              <div className="flex flex-col w-[60%] h-[1px] border border-dashed border-[#2C2C2C]"></div>
              <p className="text-[#FCBF07] text-[14px]">365 Days</p>
            </div>
          </div>
          <hr className="h-px w-[366px] mt-6 -ml-5 bg-[#2C2C2C] border-0"></hr>

          <div className="flex justify-between mt-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#86888C] text-[12px]">Listing Time</p>
              <p className="text-[#86888C] text-[16px]">2023-04-16</p>
            </div>
            <div className="flex gap-2">
              <Image src={PresalesAlarm} alt="image" />
              <Image src={PresalesFavorites} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresalesCard;
