"use client";

import Image from "next/image";

import NavItem from "./NavItem";
import SmallIconOnlyBtn from "./SmallIconOnlyBtn";

//! import the Image
import logo from "@/assets/image/logo.svg";
import Presales from "@/assets/icons/presales.svg";
import Sales from "@/assets/icons/sales.svg";
import Pools from "@/assets/icons/pools.svg";
import Locks from "@/assets/icons/locks.svg";
import Liquidity from "@/assets/icons/liquidity.svg";
import Launch from "@/assets/icons/launch.svg";
import Tools from "@/assets/icons/tools.svg";
import Audit from "@/assets/icons/audit.svg";
import Sponsored from "@/assets/icons/sponsored.svg";

import Telegram from "@/assets/icons/telegram.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Dark from "@/assets/icons/dark.svg";
import Light from "@/assets/icons/light.svg";

import FlokiBinance from "@/assets/image/floki-binance.png";

const SideBar = () => {
  return (
    <div className="bg-[#1B1B1B] w-[286px] h-[100%] pb-10">
      <div className="flex items-center gap-x-2 pl-10 pt-[24.96px]">
        <Image src={logo} alt="logo" />
        <p className="text-[#fff] text-[19.067px] font-bold">Flashpad</p>
      </div>

      <div className="mt-[148.76px]">
        <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          EXPLORE
        </p>
        <div className="mt-5 gap-y-2">
          <NavItem text="Presales" img={Presales} />
          <NavItem text="Special Sales" img={Sales} />
          <NavItem text="Staking Pools" img={Pools} />
          <NavItem text="Token Locks" img={Locks} />
          <NavItem text="Liquidity Locks" img={Liquidity} />
        </div>
        <hr className="h-px w-[206px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[102.77px]">
        <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          DEVELOPERS
        </p>
        <div className="mt-5 gap-y-2">
          <NavItem text="Create & Launch" img={Launch} right={true} />
          <NavItem text="Utility & Tools" img={Tools} right={true} />
          <NavItem text="Flash Audit" img={Audit} />
        </div>
      </div>

      <NavItem
        text="Sponsorised by Floki"
        img={Sponsored}
        BgColor="#f79422"
        TxColor="#fff"
      />

      <div className="mt-40">
        <Image src={FlokiBinance} alt="image" />
        <div className="mt-[113.5px] pl-10 pr-10 grid grid-cols-2 gap-x-5 gap-y-[26.55px]">
          <SmallIconOnlyBtn icon={Telegram} />
          <SmallIconOnlyBtn icon={Twitter} />
          <SmallIconOnlyBtn icon={Light} shadow={false} />
          <SmallIconOnlyBtn icon={Dark} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
