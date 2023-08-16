"use client";

import IconBtn from "../../Button/IconBtn";

import Home from "@/assets/icons/home.svg";
import Docs from "@/assets/icons/docs.svg";
import Alert from "@/assets/icons/alerts.svg";
import AlphaClub from "@/assets/icons/alpha-club.svg";
import Floki from "@/assets/icons/floki.svg";
import Wallet from "@/assets/icons/wallet.svg";
import Add from "@/assets/icons/add.svg";

const Header = () => {
  return (
    <div className="w-[calc(100vw-286px)] h-20 px-10 bg-[#1b1b1b]/[.99] ml-[-1px] flex items-center justify-between">
      <div className="flex gap-2">
        <IconBtn text="Home" icon={Home} />
        <IconBtn text="Docs" icon={Docs} />
        <IconBtn text="presale alerts" icon={Alert} />
        <IconBtn text="join alpha club" icon={AlphaClub} />
        <div className="ml-[33px]">
          <IconBtn
            text="Burn Floki For get Whitelist"
            icon={Floki}
            BgClass="bg-[#f9a225]/[.9]"
            heigh="h-[43px]"
          />
        </div>
      </div>

      <div className="flex gap-x-[15.05px]">
        <IconBtn
          text="Create"
          icon={Add}
          BgClass="bg-[#1b1b1b]"
          TxClass="text-[#FCBF07]"
          TxSize="text-[14px]"
          rounded="rounded-[30px]"
          heigh="h-[49px]"
          px="px-[18px]"
          py="py-[12px]"
          borderColor="border-[#FCBF07]"
        />
        <IconBtn
          text="Connect Wallet"
          icon={Wallet}
          BgClass="bg-[#FCBF07]"
          TxClass="text-[#16171B]"
          TxSize="text-[16px]"
          rounded="rounded-[30px]"
          heigh="h-[49px]"
          px="px-[18px]"
          py="py-[12px]"
        />
      </div>
    </div>
  );
};

export default Header;
