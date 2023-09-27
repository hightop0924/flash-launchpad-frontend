"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import NavItem from "./NavItem";
import SmallIconOnlyBtn from "../../Button/SmallIconOnlyBtn";

//! import the Image
import logo from "@/assets/image/logo.svg";

import Presales from "@/assets/icons/presales.svg";
import TokenList from "@/assets/icons/token-list.svg";
import Pools from "@/assets/icons/pools.svg";
import Locks from "@/assets/icons/locks.svg";
import Liquidity from "@/assets/icons/liquidity.svg";
import Launch from "@/assets/icons/launch.svg";
import Tools from "@/assets/icons/tools.svg";
import Audit from "@/assets/icons/audit.svg";
import LeaderBoard from "@/assets/icons/leaderboard.svg";

import ActivePresales from "@/assets/icons/active_presales.svg";
import TokenListActive from "@/assets/icons/token-list-active.svg";
import ActivePools from "@/assets/icons/active_pools.svg";
import ActiveLocks from "@/assets/icons/active_locks.svg";
import ActiveLiquidity from "@/assets/icons/active_liquidity.svg";
import ActiveLaunch from "@/assets/icons/active_launch.svg";
import ActiveTools from "@/assets/icons/active_tools.svg";
import ActiveAudit from "@/assets/icons/active_audit.svg";
import LeaderBoardActive from "@/assets/icons/leaderboard-active.svg";

import Sponsored from "@/assets/icons/sponsored.svg";

import Telegram from "@/assets/icons/telegram.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Dark from "@/assets/icons/dark.svg";
import Light from "@/assets/icons/light.svg";

import FlokiBinance from "@/assets/image/floki-flash-audit.gif";
import IconBtn from "@/components/Button/IconBtn";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const SideBar = ({ show, mobileView, setShow }) => {
  const [active, setActive] = useState(0);

  const routerList = [
    {
      text: "Presales",
      img: Presales,
      active_img: ActivePresales,
      path: "/presales",
      active: 1,
    },
    {
      text: "Staking Pools",
      img: Pools,
      active_img: ActivePools,
      path: "/staking-pool",
      active: 2,
    },
    {
      text: "Token Locks List",
      img: TokenList,
      active_img: TokenListActive,
      path: "/token-lock",
      active: 3,
    },
    {
      text: "Liquidity Locks List",
      img: TokenList,
      active_img: TokenListActive,
      path: "/liquidity-lock",
      active: 4,
    },
    {
      text: "Leaderboard",
      img: LeaderBoard,
      active_img: LeaderBoardActive,
      path: "/leaderboard",
      active: 5,
    },
    {
      path: "/launch/launchpad",
      active: 7,
    },
    {
      path: "/launch/fair-launch",
      active: 8,
    },
    {
      path: "/launch/create-token",
      active: 9,
    },
    {
      path: "/launch/create-staking",
      active: 10,
    },
    {
      path: "/launch/create-lock",
      active: 11,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const onNavItemClick = (index) => {
    setActive(index);
    if (index === 1) {
      router.push("/about");
    }
  };

  useEffect(() => {
    var temp;
    if (pathname[pathname.length - 1] === "/") {
      temp = pathname.slice(0, pathname.length - 1);
    }
    routerList.forEach((item) => {
      if (item.path == temp) {
        setActive(item.active);
      }
      // if (pathname.indexOf("launch") > 0) {
      //   setActive(6);
      // }
      // if (pathname.indexOf("tool") > 0) {
      //   setActive(12);
      // }
    });
  }, [pathname]);
  return (
    <>
      {mobileView && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen z-40 ${
            show ? "block" : "hidden"
          }`}
          onClick={() => {
            setShow(false);
          }}
        ></div>
      )}
      <div
        className={`bg-[#1B1B1B] w-[286px] h-auto pb-10 shadow-[4px_0_10px_0_rgba(14,15,20,0.31)] z-10 ${
          mobileView
            ? "fixed h-screen overflow-scroll z-50 transition-opacity duration-1000"
            : "relative"
        } ${show ? "block" : "hidden"}`}
      >
        <div className="flex items-center gap-x-2 pl-10 pt-[24.96px]">
          <ExportedImage src={logo} alt="logo" />
          <p className="text-[#fff] text-[19.067px] font-bold">Flashlaunch</p>
        </div>

        <Link
          href={
            "https://app.uniswap.org/swap?outputCurrency=0xBb19DA2482308ec02a242ACED4Fe0f09D06b12A7&inputCurrency=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
          }
          target="_blank"
          rel="noreferrer"
        >
          <button
            className={`ml-10 mt-[34px] px-6 py-3 flex justify-center items-center gap-2 rounded-[39px] h-[43px] bg-[#FCBF07]`}
          >
            <p className={`text-[#16171B] text-base font-semibold capitalize`}>
              Buy $Flash
            </p>
          </button>
        </Link>

        <div className="mt-[26px]">
          <p className="text-[#86888c] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
            EXPLORE
          </p>
          <div className="flex flex-col mt-5 gap-y-2">
            {routerList.map((item, index) => {
              if (index < 5) {
                return (
                  <NavItem
                    key={index}
                    text={item.text}
                    img={item.img}
                    active_img={item.active_img}
                    active={active === item.active && true}
                    path={item.path}
                  />
                );
              }
            })}
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
              active={active > 5 && active < 12 && true}
              index="6"
              onClick={() => setActive(6)}
              childItems={[
                {
                  label: "Launchpad",
                  path: "/launch/launchpad",
                  active: active === 7 && true,
                },
                {
                  label: "Fair Launch",
                  path: "/launch/fair-launch",
                  active: active === 8 && true,
                },
                {
                  label: "Token",
                  path: "/launch/create-token",
                  active: active === 9 && true,
                },
                {
                  label: "Staking Pool",
                  path: "/launch/create-staking",
                  active: active === 10 && true,
                },
                {
                  label: "Create Lock",
                  path: "/launch/create-lock",
                  active: active === 11 && true,
                },
              ]}
            />

            <NavItem
              text="Utility & Tools"
              img={Tools}
              active_img={ActiveTools}
              right={true}
              index="12"
              onClick={() => setActive(12)}
              active={active > 11 && active < 15 && true}
              childItems={[
                {
                  label: "Airdrop",
                  path: "/airdrop",
                  active: active === 12 && true,
                },
                {
                  label: "Create Token",
                  path: "/launch/create-token",
                  active: active === 13 && true,
                },
                {
                  label: "Swap & Bridge",
                  path: "https://flash-dex.com",
                  active: active === 14 && true,
                },
              ]}
            />
            <NavItem
              text="Flash Audit"
              img={Audit}
              active_img={ActiveAudit}
              index="15"
              active={active === 15 && true}
              path={"/flash-audit-result"}
            />
          </div>
        </div>

        <div className="mt-6">
          <NavItem
            text="Sponsorised by Floki"
            img={Sponsored}
            BgClass="bg-[#FCBF07]"
            TxClass="text-[#16171B]"
          />
        </div>

        <div className="mt-10">
          <ExportedImage src={FlokiBinance} alt="image" />
          <div className="mt-[113.5px] pl-10 pr-10 grid grid-cols-2 gap-x-5 gap-y-[26.55px]">
            <Link
              href={"https://t.me/flashtokenenglish"}
              target="_blank"
              rel="noreferrer"
            >
              <SmallIconOnlyBtn icon={Telegram} />
            </Link>
            <Link
              href={"https://twitter.com/Flash_Techno_Of"}
              target="_blank"
              rel="noreferrer"
            >
              <SmallIconOnlyBtn icon={Twitter} />
            </Link>
            <SmallIconOnlyBtn icon={Light} shadow={false} />
            <SmallIconOnlyBtn icon={Dark} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
