"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

//! import image
import EtherCircle from "@/assets/icons/ether-circle.svg";
import Leaderboard1 from "@/assets/image/leaderboard/1.png";

const Leaderboard = () => {
  const [week, setWeek] = useState(0);
  return (
    <div className="min-h-[1500px]">
      <div className="flex flex-row max-sm:flex-col h-[145px] max-sm:h-auto gap-[30px]">
        <div className="w-[100%] bg-[#1B1B1B] rounded-[16px] max-sm:p-[25px] flex flex-col justify-center items-center gap-[10px] text-white">
          <p className="text-sm">Total success this week</p>
          <p className="text-[36px]">10</p>
        </div>

        <div className="w-[100%] bg-[#1B1B1B] rounded-[16px] max-sm:p-[25px] flex flex-col justify-center items-center gap-[10px] text-white">
          <p className="text-sm">Total raised this week</p>
          <p className="text-[36px]">$226.5K</p>
        </div>
      </div>

      <div className="max-sm:overflow-x-scroll">
        <div className="mt-6 p-7 bg-[#1B1B1B] rounded-2xl max-sm:w-[1600px]">
          <div className="flex flex-row pb-4 border-b border-b-[#2C2C2C] items-center">
            <div className="flex flex-row gap-[52px]">
              {Array.from({ length: 8 }).map((item, index) => (
                <div
                  className="relative cursor-pointer"
                  key={index}
                  onClick={() => setWeek(index)}
                >
                  <p
                    className={`text-base ${
                      week === index ? "text-[#FCBF07]" : "text-white"
                    }`}
                  >
                    Week 34/2023
                  </p>
                  {week === index && (
                    <hr className="h-0.5 border-0 bg-[#FCBF07] w-[100%] absolute -bottom-[26px] left-0"></hr>
                  )}
                </div>
              ))}
            </div>
            <div className="w-[40px] h-[40px] ml-[47px] border border-[#2C2C2C] flex flex-col gap-[3px] rounded-lg justify-center items-center">
              <div className="w-[4.5px] h-[4.5px] rounded-full bg-white"></div>
              <div className="w-[4.5px] h-[4.5px] rounded-full bg-white"></div>
              <div className="w-[4.5px] h-[4.5px] rounded-full bg-white"></div>
            </div>
            <div className="ml-3 rounded-lg border border-[#2C2C2C] py-2 px-5">
              <select
                className="bg-[#1B1B1B] outline-none text-white"
                name=""
                id=""
              >
                <option value="0">All Chain</option>
                <option value="1">Ethereum</option>
                <option value="2">BNB</option>
              </select>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-row justify-between items-center border-b border-[#2C2C2C] pb-5">
              <div className="flex flex-row items-center">
                <p className="w-7 text-2xl font-semibold text-white">1</p>
                <div className="relative ml-4">
                  <Image src={Leaderboard1} alt="leader" />
                  <Image
                    src={EtherCircle}
                    className="absolute bottom-0 -right-2"
                    alt="leader"
                  />
                </div>
                <div className="flex flex-col ml-6">
                  <div className="flex flex-row text-white items-center gap-3">
                    <p className="text-base">BabyShia</p>
                    <p className="text-xs">BABYSHIA</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#FCBF07]">
                      192.62164141558847 ETH
                      <span className="text-[#86888C]"> - Listing time: </span>
                      2023.08.28 19:04
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-[22px]">
                <div className="flex flex-row items-center justify-center border-[5px] border-[#52BC1F] w-[54px] h-[54px] rounded-full text-[10px] text-white">
                  100.0%
                </div>
                <button className="py-[10px] px-[20px] bg-[#FCBF07] rounded-lg outline-none text-[13px] font-semibold">
                  View Pool
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
