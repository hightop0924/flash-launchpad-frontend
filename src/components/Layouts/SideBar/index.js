"use client";

import React, { useState } from "react";

import Image from "next/image";

import NavItem from "./NavItem";
import SmallIconOnlyBtn from "../../Button/SmallIconOnlyBtn";

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

import ActivePresales from "@/assets/icons/active_presales.svg";
import ActiveSales from "@/assets/icons/active_sales.svg";
import ActivePools from "@/assets/icons/active_pools.svg";
import ActiveLocks from "@/assets/icons/active_locks.svg";
import ActiveLiquidity from "@/assets/icons/active_liquidity.svg";
import ActiveLaunch from "@/assets/icons/active_launch.svg";
import ActiveTools from "@/assets/icons/active_tools.svg";
import ActiveAudit from "@/assets/icons/active_audit.svg";

import Sponsored from "@/assets/icons/sponsored.svg";

import Telegram from "@/assets/icons/telegram.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Dark from "@/assets/icons/dark.svg";
import Light from "@/assets/icons/light.svg";

import FlokiBinance from "@/assets/image/floki-binance.png";

const SideBar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#1B1B1B] w-[286px] h-auto pb-10 shadow-[4px_0_10px_0_rgba(14,15,20,0.31)] z-10 relative">
      <div className="flex items-center gap-x-2 pl-10 pt-[24.96px]">
        <Image src={logo} alt="logo" />
        <p className="text-[#fff] text-[19.067px] font-bold">Flashpad</p>
      </div>

      <div className="mt-[148.76px]">
        <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          EXPLORE
        </p>
        <div className="flex flex-col mt-5 gap-y-2">
          <NavItem
            text="Presales"
            img={Presales}
            active_img={ActivePresales}
            active={active === 1 && true}
            index={1}
            onClick={(index) => setActive(index)}
          />
          <NavItem
            text="Special Sales"
            img={Sales}
            active_img={ActiveSales}
            active={active === 2 && true}
            index={2}
            onClick={(index) => setActive(index)}
          />
          <NavItem
            text="Staking Pools"
            img={Pools}
            active_img={ActivePools}
            active={active === 3 && true}
            index={3}
            onClick={(index) => setActive(index)}
          />
          <NavItem
            text="Token Locks"
            img={Locks}
            active_img={ActiveLocks}
            active={active === 4 && true}
            index={4}
            onClick={(index) => setActive(index)}
          />
          <NavItem
            text="Liquidity Locks"
            img={Liquidity}
            active_img={ActiveLiquidity}
            active={active === 5 && true}
            index={5}
            onClick={(index) => setActive(index)}
          />
        </div>
        <hr className="h-px w-[206px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          DEVELOPERS
        </p>
        <div className="flex flex-col mt-5 gap-y-2">
          <NavItem
            text="Create & Launch"
            img={Launch}
            active_img={ActiveLaunch}
            right={true}
            active={active === 6 && true}
            index={6}
            onClick={(index) => setActive(index)}
          />
          <NavItem
            text="Utility & Tools"
            img={Tools}
            active_img={ActiveTools}
            right={true}
            active={active === 7 && true}
            index={7}
            onClick={(index) => setActive(index)}
          />
          <NavItem
            text="Flash Audit"
            img={Audit}
            active_img={ActiveAudit}
            active={active === 8 && true}
            index={8}
            onClick={(index) => setActive(index)}
          />
        </div>
      </div>

      <div className="mt-6">
        <NavItem
          text="Sponsorised by Floki"
          img={Sponsored}
          BgClass="bg-[#f79422]"
          TxClass="text-[#fff]"
        />
      </div>

      <div className="mt-40 absolute bottom-32">
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
