"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import BackImage from "@/assets/image/presales/back.png";
import AvatarImage from "@/assets/image/presales/avatar.png";

import PoocoinIcon from "@/assets/icons/poocoin.svg";
import CopyIcon from "@/assets/icons/copy.svg";
import EtherIcon from "@/assets/icons/eth.svg";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.6,
  is3D: false,
  backgroundColor: "#1B1B1B",
  legend: "none",
};

import Map from "@/components/Map";
/**
 *
 *
 */

const StakingPoolDetails = () => {
  const tokenDetails = [
    {
      name: "Stake Address",
      value: "0x43024ad83760a9779236b409F8dC1FEbA172F840",
    },
    {
      name: "Reward Type",
      value: "No Reward",
    },
    {
      name: "Min Amount to Stake",
      value: "1",
    },
    {
      name: "Hard Cap",
      value: "50,000",
    },
    {
      name: "Total Staked",
      value: "1",
    },
    {
      name: "Total Stakers",
      value: "1",
    },
    {
      name: "Staked Token transferrable",
      value: "Yes",
    },
    {
      name: "Stake Start Time (UTC)",
      value: "2023-08-27 22:17",
    },
    {
      name: "Stake End Time (UTC)",
      value: "2023-10-27 22:17",
    },
    {
      name: "Total Rewards Distributed",
      value: "0",
    },
    {
      name: "Last Distribute Time",
      value: "2023-09-01 21:09",
    },
  ];
  return (
    <div className="min-h-[1340px] flex flex-row gap-[30px]">
      <div className="flex-auto w-[892px] flex flex-col gap-8">
        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="relative">
            <Image src={BackImage} alt="back" />
            <Image
              src={AvatarImage}
              alt="avatar"
              className="absolute top-[147px] left-[60px] w-auto h-auto"
            />

            <div className="flex flex-col ml-[199px] mt-2">
              <p className="text-white text-[32px] font-semibold">Venom</p>
              <p className="text-sm text-[#FFFFFF]/[.85]">
                Stake <span className="text-[#FCBF07]">XUSD</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-[#FFFFFF]/[.85] px-10 py-6">
            XUSD Protocol is the world`s first Tax DEX, moving the functions of
            Tax Tokens onto a decentralized exchange.
          </p>
          <div className="flex flex-col px-7 pt-6">
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="text-white text-base">Presales Address</div>
              <div className="flex flex-col items-end">
                <p className="text-base text-[#FCBF07]">
                  0x43024ad83760a9779236b409F8dC1FEbA172F840
                </p>
              </div>
            </div>

            {tokenDetails.map((item, index) => {
              if (index > 0) {
                return (
                  <div
                    className="flex flex-row justify-between items-center py-4 border-t border-[#2C2C2C]"
                    key={index}
                  >
                    <div className="text-white text-base">{item.name}</div>
                    <div className="text-base text-white">{item.value}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="flex-auto w-[631px] flex flex-col gap-8">
        <div className="w-[100%] bg-[#1B1B1B] py-4 px-3 flex flex-row justify-center text-white text-[14px] gap-3 items-center rounded-[37px]">
          <p>Connect Network To</p>
          <div className="flex flex-row justify-center items-center bg-[#282828] rounded-full p-2">
            <Image src={EtherIcon} alt="icon" />
          </div>
          <p>Ethereum</p>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px] p-7">
          <div className="flex flex-col items-center justify-center text-white text-base pb-2">
            <p>Stake Ends In:</p>
            <p>55 days</p>
          </div>

          <div className="flex flex-row justify-between items-center py-4 border-t border-[#2C2C2C] text-white text-base">
            <p>My Staked Amount</p>
            <p>0 XUSD</p>
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px] p-7">
          <div className="flex flex-col">
            <div className="flex flex-row py-4 border-b border-[#2C2C2C] gap-16">
              <div className="w-[140px] text-base text-white">
                Token Address
              </div>
              <div className="flex flex-row gap-1 items-center">
                <p className="text-sm text-[#FCBF07]">
                  0x626b596dd10467EA969179235123F884e133074a
                </p>
                <Image src={CopyIcon} alt="icon" />
              </div>
            </div>

            <div className="flex flex-row py-4 border-b border-[#2C2C2C] gap-16">
              <div className="w-[140px] text-base text-white">Chart</div>
              <div className="flex flex-row gap-1 items-center">
                <Image src={PoocoinIcon} alt="icon" />
                <p className="text-sm text-[#FCBF07]">Poocoin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingPoolDetails;
