"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import BackImage from "@/assets/image/presales/back.png";
import AvatarImage from "@/assets/image/presales/avatar.png";
import YoutubeImage from "@/assets/image/presales/youtube.png";
import AffiliateImage from "@/assets/image/presales/affiliate.png";

import WebsiteIcon from "@/assets/icons/website-input.svg";
import TwitterIcon from "@/assets/icons/twitter-input.svg";
import TelegramIcon from "@/assets/icons/telegram-input.svg";
import CopyIcon from "@/assets/icons/copy-yello.svg";
import SearchIcon from "@/assets/icons/search.svg";
import DownYello from "@/assets/icons/down-yello.svg";
import PancakeswapIcon from "@/assets/icons/pancakeswap.svg";
import BubblemapsIcon from "@/assets/icons/bubblemaps.svg";
import GeckoterminalIcon from "@/assets/icons/geckoterminal.svg";
import CopyWhiteIcon from "@/assets/icons/copy.svg";
import FlashIcon from "@/assets/icons/flash.svg";
import { Chart } from "react-google-charts";

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
import ExportedImage from "next-image-export-optimizer";
/**
 *
 *
 */

const PresalesDetails = () => {
  const tokenDetails = [
    {
      name: "Presale Address",
      value: "0x430....840",
    },
    {
      name: "Sale Type",
      value: "Fair Launch",
    },
    {
      name: "Token Name",
      value: "Tectum Emission Token",
    },
    {
      name: "Token Symbol",
      value: "TET",
    },
    {
      name: "Total Supply",
      value: "10,000,000",
    },
    {
      name: "Tokens For Presale",
      value: "112,500",
    },
    {
      name: "Tokens For Liquidity",
      value: "67,500",
    },
    {
      name: "Initial Market Cap (estimate)",
      value: "$181,266",
    },
    {
      name: "Soft Cap",
      value: "10 ETH",
    },
    {
      name: "Presale Start Time (UTC)",
      value: "2023-06-27 17:00",
    },
    {
      name: "Presale End Time (UTC)",
      value: "2023-06-30 17:00",
    },
    {
      name: "Liquidity Percent",
      value: "60 %",
    },
    {
      name: "Liquidity Unlock Time (UTC)",
      value: "2024-07-02 17:00",
    },
    {
      name: "First Vesting Release",
      value: "10 %",
    },
    {
      name: "Vesting Delay (Cliff)",
      value: "0 days",
    },
    {
      name: "Vesting Time Period",
      value: "30 days",
    },
    {
      name: "Vesting Release per Time Period",
      value: "10 %",
    },
  ];
  return (
    <div className="min-h-[1340px] flex flex-row gap-[30px] max-sm:flex-col">
      <div className="flex-auto w-[892px] max-sm:w-[100%] flex flex-col gap-8">
        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="relative">
            <ExportedImage src={BackImage} alt="back" />
            <ExportedImage
              src={AvatarImage}
              alt="avatar"
              className="ml-[60px] -mt-[53px]  w-auto h-auto max-w-full"
            />

            {/* <div className="flex flex-row ml-[199px] items-center mt-2">
              <p className="text-white text-[32px] font-semibold">Venom</p>
              <ExportedImage
                src={WebsiteIcon}
                alt="website"
                className="w-[22.5px] h-[22.5px] ml-[20px]"
              />
              <ExportedImage
                src={TwitterIcon}
                alt="website"
                className="w-[22.5px] h-[22.5px] ml-[9.5px]"
              />
              <ExportedImage
                src={TelegramIcon}
                alt="website"
                className="w-[22.5px] h-[22.5px] ml-[9.5px]"
              />
              <div className="py-2 px-3 rounded-[40px] bg-[#5abaff]/[0.1] text-xs text-[#5ABAFF] ml-5 max-sm:hidden">
                Audit
              </div>
              <div className="py-2 px-3 rounded-[40px] bg-[#FCBF07]/[0.1] text-xs text-[#FCBF07] ml-2 max-sm:hidden">
                Flash Transfer
              </div>
            </div> */}
          </div>

          <div className="flex flex-col mt-8 px-7 pb-7">
            <p className="text-white/[.8] text-sm px-3">
              BlazeX is launching on ETH, and a crosschain bridge connecting BNB
              and ETH with BlazeX will be available this week. Additionally, the
              BlazeX token Deployer Bot is now active. Deploy on various chains
              using our Telegram bot at t.me/BlazeXDeployerBot. We`re also
              introducing the Marketing Feature soon. When you stake your tokens
              on ETH, you can earn ETH as rewards. Plus, we`re sharing 50% of
              the revenue with our token holders!
            </p>
            <ExportedImage src={YoutubeImage} alt="image" className="mt-9" />
          </div>
          <div className="flex flex-col px-7 pt-6">
            <div className="flex flex-row justify-between items-center pb-4">
              <div className="text-white text-base">Presales Address</div>
              <div className="flex flex-col items-end max-sm:w-[142px]">
                <p className="text-base text-[#FCBF07]">0x430....840</p>
                <p className="text-xs text-white">
                  Do not send ETH directly to the presale address!
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
                    <div className="text-white text-base max-sm:max-w-[150px]">
                      {item.name}
                    </div>
                    <div className="text-base text-white">{item.value}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="px-[26px] py-6 text-white text-2xl font-semibold border-b border-[#2C2C2C]">
            Affiliate Program
          </div>
          <div className="py-6 px-7">
            <div className="flex flex-row h-[41px] w-[100%]">
              <div className="py-3 px-5 justify-center w-[140px] items-center text-sm text-white bg-[#282828] rounded-l-lg">
                Affiliate link
              </div>
              <input
                type="text"
                className="bg-[#141414] border border-[#282828] pl-5 py-3 outline-none w-[77.2%] text-sm text-[#86888C]"
              />

              <div className="flex flex-col items-center justify-center w-[40px] h-[100%] bg-[#141414] border-t border-[#2C2C2C] border-b border-r rounded-r-lg">
                <ExportedImage src={CopyIcon} alt="icon" />
              </div>
            </div>
            <div className="flex flex-col mt-4 text-white/[.8] text-base">
              <div className="flex flex-row border-b border-[#2C2C2C] py-4 justify-between">
                <div>Your Rewards</div>
                <div>0 BNB</div>
              </div>
              <div className="flex flex-row border-b border-[#2C2C2C] py-4 justify-between">
                <div>Pool Referrer Count</div>
                <div className="text-[#FF2727]">33</div>
              </div>
              <div className="flex flex-row border-b border-[#2C2C2C] py-4 justify-between">
                <div>Realtime Reward Percentage</div>
                <div className="text-[#03AE00]">4%</div>
              </div>
              <div className="flex flex-row border-b border-[#2C2C2C] py-4 justify-between">
                <div>Current Rewards</div>
                <div>6.122090635680085 BB</div>
              </div>
              <div className="flex flex-row border-b border-[#2C2C2C] py-4 justify-between">
                <div>Total Ref Amount</div>
                <div>163.8652817491644 BNB</div>
              </div>
            </div>
            <p className="text-white text-base mt-3">Top Rewards</p>
            <div className="flex flex-col mt-2 text-white text-base">
              <div className="flex flex-row gap-8 font-semibold py-3 border-b border-[#2C2C2C]">
                <div className="flex-auto w-[258px]">User</div>
                <div className="flex-auto w-[258px]">Amount (BNB)</div>
                <div className="flex-auto w-[258px]">Rewards (BNB)</div>
              </div>
              {Array.from({ length: 5 }).map((item, index) => (
                <div
                  className="flex flex-row gap-8 font-light py-3 border-b border-[#2C2C2C]"
                  key={index}
                >
                  <div className="flex-auto w-[258px] flex flex-row items-center gap-[10px]">
                    <div className="min-w-[123px]">0xEc21...2018</div>
                    <ExportedImage
                      src={CopyIcon}
                      alt="copy"
                      className="w-[10px] h-[10px] cursor-pointer"
                    />
                  </div>
                  <div className="flex-auto w-[258px]">50 (30,51%)</div>
                  <div className="flex-auto w-[258px]">1.868026</div>
                </div>
              ))}
            </div>
            <div className="text-base text-[#FCBF07] underline text-center mt-3 cursor-pointer">
              View all
            </div>
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="px-[26px] py-6 text-white text-2xl font-semibold border-b border-[#2C2C2C]">
            Team Token Vesting Schedule:
          </div>
          <div className="p-7 flex flex-col text-white text-base">
            <div className="flex flex-row justify-between items-end py-4 font-semibold border-b border-[#2C2C2C]">
              <div>Release Date</div>
              <div>Amount</div>
            </div>
            {Array.from({ length: 10 }).map((item, index) => (
              <div
                className="flex flex-row justify-between items-end py-4 border-b border-[#2C2C2C]"
                key={index}
              >
                <div>2233-05-28 04:36 (UTC)</div>
                <div>100,000 $coin</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="px-[26px] py-6 text-white text-2xl font-semibold border-b border-[#2C2C2C]">
            Flash Transfer - Find location
          </div>
          <div className="p-7">
            <div className="relative">
              <input
                type="text"
                className="w-[100%] h-[52px] py-4 px-5 rounded-[26px] border border-[#2C2C2C] bg-[#141414] outline-none text-base text-[#86888C]"
              />
              <ExportedImage
                src={SearchIcon}
                alt="search"
                className="top-4 right-5 absolute"
              />
            </div>
            <div className="mt-[26px] rounded-lg">
              <Map address="France" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-auto w-[631px] max-sm:w-[100%] flex flex-col gap-8">
        <div>
          <ExportedImage
            src={AffiliateImage}
            alt="image"
            className="ml-[236px]"
          />
          <div className="bg-[#1B1B1B] rounded-[16px] p-7 flex flex-col gap-6">
            <div className="py-[10px] px-[17px] border border-[#B78103] bg-[#7A4F01]/[.06] text-[#FFF7CD] text-sm rounded-lg">
              Make sure the website is flashlaunch!
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-white text-base">Presales Ends In</p>
              <div className="flex flex-row gap-2">
                <div className="w-[36px] h-[36px] bg-[#FCBF07] flex-col flex justify-center items-center text-[#16171B] text-base rounded-[4px] font-bold">
                  01
                </div>
                <div className="w-[36px] h-[36px] bg-[#FCBF07] flex-col flex justify-center items-center text-[#16171B] text-base rounded-[4px] font-bold">
                  23
                </div>
                <div className="w-[36px] h-[36px] bg-[#FCBF07] flex-col flex justify-center items-center text-[#16171B] text-base rounded-[4px] font-bold">
                  40
                </div>
                <div className="w-[36px] h-[36px] bg-[#FCBF07] flex-col flex justify-center items-center text-[#16171B] text-base rounded-[4px] font-bold">
                  50
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="h-[16px] w-[100%] bg-[#A0F477] rounded-[40px]">
                <div className="h-[16px] w-[137px] bg-[#52BC1F] rounded-[40px]"></div>
              </div>
              <div className="flex flex-row justify-between items-center text-white text-sm">
                <p>190 ETH</p>
                <p>40.323 ETH</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-white text-base">Amount</div>
              <div className="relative">
                <input
                  type="text"
                  className="py-3 px-4 rounded-lg border border-[#2C2C2C] bg-[#1B1B1B] outline-none w-[100%] text-sm text-[#86888C]"
                />
                <div className="text-base text-[#FCBF07] font-bold absolute top-3 right-3 cursor-pointer">
                  MAX
                </div>
              </div>
              <button className="w-[150px] h-[43px] flex flex-col items-center justify-center bg-[#FBBF04] outline-none rounded-[10px] text-sm text-[#151103]">
                Next
              </button>
            </div>

            <div className="text-[#FCBF07] text-base underline cursor-pointer">
              Affiliate detail
            </div>
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px] p-7">
          <div className="h-[16px] w-[100%] bg-[#282828] rounded-[40px]">
            <div className="h-[16px] w-[137px] bg-[#FCBF07] rounded-[40px]"></div>
          </div>
          <div className="flex flex-row justify-center mt-1">
            <div className="w-[32px] h-[32px] flex flex-col justify-center items-center">
              <ExportedImage src={DownYello} alt="down" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row text-base text-white py-4 justify-between border-b border-[#2C2C2C]">
              <p>Status</p>
              <p className="text-[#FCBF07]">Inprogress</p>
            </div>
            <div className="flex flex-row text-base text-white py-4 justify-between border-b border-[#2C2C2C]">
              <p>Sale Type</p>
              <p className="text-[#FCBF07]">Public</p>
            </div>
            <div className="flex flex-row text-base text-white py-4 justify-between border-b border-[#2C2C2C]">
              <p>Minimum Buy</p>
              <p>0.4 BNB</p>
            </div>
            <div className="flex flex-row text-base text-white py-4 justify-between border-b border-[#2C2C2C]">
              <p>Maximum Buy</p>
              <p>6 BNB</p>
            </div>
            <div className="flex flex-row text-base text-white py-4 justify-between border-b border-[#2C2C2C]">
              <p>You purchased</p>
              <p>0 BNB</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px] p-7">
          <p className="text-white text-2xl text-center">Listed on DEX</p>
          <div className="mt-3 flex flex-col text-white text-base">
            <div className="flex flex-row items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[204px]">Token Address</div>
              <div className="flex flex-row gap-1">
                <div className=" text-sm">
                  0x626b596dd10467EA969179235123F884e133074a
                </div>
                <ExportedImage src={CopyWhiteIcon} alt="image" />
              </div>
            </div>
            <div className="flex flex-row items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[204px]">Listed On</div>
              <div className="flex flex-row gap-2">
                <ExportedImage src={PancakeswapIcon} alt="icon" />
                <div className="text-[#FCBF07] text-base">PancakeSwap</div>
              </div>
            </div>
            <div className="flex flex-row items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[204px]">Listed On</div>
              <div className="flex flex-row gap-2">
                <ExportedImage src={BubblemapsIcon} alt="icon" />
                <div className="text-[#FCBF07] text-base">Bubblemaps</div>
              </div>
            </div>
            <div className="flex flex-row items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[204px]">Chart</div>
              <div className="flex flex-row gap-2">
                <ExportedImage src={GeckoterminalIcon} alt="icon" />
                <div className="text-[#FCBF07] text-base">GeckoTerminal</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-2 items-center mt-14">
            <ExportedImage src={FlashIcon} alt="icon" />
            <p className="text-white text-2xl font-semibold">
              Flash Audit security
            </p>
          </div>

          <div className="flex flex-col mt-3">
            <div className="flex flex-row gap-[60px] items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[145px] text-white text-base">
                Contract Verfied
              </div>
              <div className="text-base text-[#FCBF07]">true</div>
            </div>
            <div className="flex flex-row gap-[60px] items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[145px] text-white text-base">Buy Tax</div>
              <div className="text-base text-[#FCBF07]">5%</div>
            </div>
            <div className="flex flex-row gap-[60px] items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[145px] text-white text-base">Sell Tax</div>
              <div className="text-base text-[#FCBF07]">10%</div>
            </div>
            <div className="flex flex-row gap-[60px] items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[145px] text-white text-base">Mintable</div>
              <div className="text-base text-[#FCBF07]">false</div>
            </div>
            <div className="flex flex-row gap-[60px] items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[145px] text-white text-base">
                Transfer Pausable
              </div>
              <div className="text-base text-[#FCBF07]">false</div>
            </div>
            <div className="flex flex-row gap-[60px] items-center py-4 border-b border-[#2C2C2C]">
              <div className="w-[145px] text-white text-base">Blacklist</div>
              <div className="text-base text-[#FCBF07]">false</div>
            </div>
          </div>

          <div className="text-[#FCBF07] text-base mt-4 cursor-pointer">
            More info
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="pt-6 pb-4 text-center text-white text-2xl border-b border-[#2C2C2C]">
            Owner Zone
          </div>
          <div className="p-7 flex flex-col gap-4">
            <div className="rounded-[8px] border border-[#B78103] bg-[#7A4F01]/[.06] py-[10px] px-[17px] text-[#FFF7CD] text-sm">
              To make sure there will be no issues during the presale time,
              please do not send tokens to wallets before you finalize the
              presale pool.
            </div>

            <div className="rounded-[8px] bg-[#0B5E0A]/[0.4] text-white text-sm py-[10px] px-[17px]">
              Pool Fee: 2% ETH raised + 2% token sold
            </div>

            <div className="flex flex-col gap-3 border-b border-[#2C2C2C] pb-4">
              <div className="text-white text-base">Sale Type</div>
              <div className="flex flex-row gap-[150px]">
                <div className="flex flex-row gap-[7px] items-center">
                  <input type="radio" name="type" />
                  <p className="text-sm text-[#BCBBB9]">Public</p>
                </div>

                <div className="flex flex-row gap-[7px] items-center">
                  <input type="radio" name="type" />
                  <p className="text-sm text-[#BCBBB9]">Public</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-base">Pool Action</p>
              <div className="flex flex-col gap-2">
                <button className="flex flex-col justify-center items-center text-base text-[#86888C] p-3 w-[100%] rounded-[8px] bg-[#282828]">
                  Update Affiliate Program
                </button>
                <p className="text-sm text-[#FCBF07]">
                  Pool Fee: 2% ETH raised + 2% token sold
                </p>
              </div>
              <button className="flex flex-col justify-center items-center text-base text-white p-3 w-[100%] rounded-[8px] bg-[#1B1B1B] border border-[#2C2C2C]">
                List of Contributors
              </button>
              <button className="flex flex-col justify-center items-center text-base text-[#86888C] p-3 w-[100%] rounded-[8px] bg-[#282828]">
                Pool Start/End Time Settings
              </button>
              <button className="flex flex-col justify-center items-center text-base text-[#86888C] p-3 w-[100%] rounded-[8px] bg-[#282828]">
                Set End Time
              </button>
              <button className="flex flex-col justify-center items-center text-base text-[#86888C] p-3 w-[100%] rounded-[8px] bg-[#282828]">
                Finalize
              </button>
            </div>

            <p className="text-sm text-[#3298DC]">
              To Finalize presale, you have to exclude token <br /> transfer fee
              for presale contract.
            </p>
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="pt-6 pb-4 text-center text-white text-2xl border-b border-[#2C2C2C]">
            Tokenomics - Supply Distribution
          </div>
          <div className="flex flex-col p-7">
            <div className="flex flex-col items-center gap-1 text-white text-base">
              <div>Diluted Market Cap: 419,921 $</div>
              <div>Circulating Market Cap: 310,742 $</div>
            </div>
            <div className="flex flex-col items-center text-white text-sm mt-6 gap-2">
              <div className="flex flex-row items-center justify-center gap-6">
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#FCBF07] rounded-full"></div>
                  <p>Presale</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#E65959] rounded-full"></div>
                  <p>Liquidity</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#52BC1F] rounded-full"></div>
                  <p>Team Vesting</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#F67228] rounded-full"></div>
                  <p>Locked</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center gap-6">
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#474DE6] rounded-full"></div>
                  <p>Unlocked</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[12px] h-[12px] bg-[#6F6B5F] rounded-full"></div>
                  <p>Burnt</p>
                </div>
              </div>

              <div className="relative">
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />

                <div className="flex flex-col justify-center items-center absolute top-[175px] left-[170px]">
                  <p className="text-sm text-[#86888C]">Total</p>
                  <p className="text-2xl text-white">400M</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row justify-between py-4 border-b border-[#2C2C2C] text-white text-base">
                <p>Lock Addresses:</p>
                <p className="text-[#FCBF07]">0x1aE...482E3</p>
              </div>
              <div className="flex flex-row justify-between py-4 border-b border-[#2C2C2C] text-white text-base">
                <p>100,000,000</p>
                <p>2023-08-25 21:00</p>
              </div>
              <div className="flex flex-row justify-between py-4 border-b border-[#2C2C2C] text-white text-base">
                <p>100,000,000</p>
                <p>2023-08-28 21:01</p>
              </div>
              <div className="flex flex-row justify-between py-4 border-b border-[#2C2C2C] text-white text-base">
                <p>60,000,000</p>
                <p>2023-09-25 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1B1B1B] rounded-[16px]">
          <div className="pt-6 pb-4 text-center text-white text-2xl border-b border-[#2C2C2C]">
            Buyback Info
          </div>

          <div className="flex flex-col p-7">
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Total Buyback Amount</p>
              <p>16.940540824948794 ETH</p>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Boughtback Amount</p>
              <p>16.940540824948794 ETH</p>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Amount Per Buyback</p>
              <p>0.2 ETH</p>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Min Buyback Delay</p>
              <p>5 minutes</p>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Max Buyback Delay</p>
              <p>2 days</p>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Next Buyback</p>
              <p>-</p>
            </div>
            <div className="flex flex-row justify-between p-4 border-b border-[#2C2C2C] text-white text-base">
              <p>Last Buyback Time</p>
              <p>2023.08.02 14:09 (UTC)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresalesDetails;
