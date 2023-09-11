"use client";

import { useState } from "react";

import Image from "next/image";

//! import Icon
import SearchIcon from "@/assets/icons/search.svg";
import EtherIcon from "@/assets/icons/eth.svg";

//! import Image
import LumiImage from "@/assets/image/lumi.png";

//! import Components
import DefaultCard from "@/components/Card/DefaultCard";

const TokenLock = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  const tableList = [
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
    { key: 7 },
    { key: 8 },
    { key: 9 },
    { key: 10 },
    { key: 11 },
    { key: 12 },
    { key: 13 },
    { key: 14 },
    { key: 15 },
    { key: 16 },
  ];

  const details = [
    {
      name: "Total Amount Locked",
      value: "3,300,000 (3.3%)",
    },
    {
      name: "Total Values Locked",
      value: "0$",
    },
    {
      name: "Token Address",
      value: "0x5098C87cF030c97D8Ce9F98F7E5Ac77960cdeE3d",
    },
    {
      name: "Token Name",
      value: "Guessing Game",
    },
    {
      name: "Token Symbol",
      value: "GG",
    },
    {
      name: "Token Decimals",
      value: "9",
    },
    {
      name: "Owner",
      value: "0xd38...719",
    },
  ];
  return (
    <div className="min-h-[1500px]">
      {page === 1 ? (
        <div className="bg-[#1B1B1B] rounded-2xl w-full h-auto p-8">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-[#141414] border outline-none border-[#2C2C2C] rounded-lg p-5 text-base text-[#86888C] pl-14"
              placeholder="Search by Token address..."
            />
            <Image
              src={SearchIcon}
              alt="image"
              className="absolute top-5 left-5 w-6 h-6"
            />
          </div>
          <div className="text-[14px] text-[#86888C] flex flex-row justify-end gap-5 mt-16">
            <div
              className="relative px-2 cursor-pointer"
              onClick={() => setActiveTab(1)}
            >
              {activeTab === 1 ? (
                <>
                  <p className="text-[#FCBF07]">All</p>
                  <div className="h-[4px] w-[100%] absolute left-0 -bottom-[4px] bg-[#FCBF07] rounded-t-2xl"></div>
                </>
              ) : (
                <p>All</p>
              )}
            </div>
            <div
              className="relative px-2 cursor-pointer"
              onClick={() => setActiveTab(2)}
            >
              {activeTab === 2 ? (
                <>
                  <p className="text-[#FCBF07]">My Locks</p>
                  <div className="h-[4px] w-[100%] absolute left-0 -bottom-[4px] bg-[#FCBF07] rounded-t-2xl"></div>
                </>
              ) : (
                <p>My Locks</p>
              )}
            </div>
          </div>
          <table className="text-white w-[100%] mt-14">
            <thead>
              <tr className="text-base">
                <td>Token</td>
                <td>Amount</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                if (loadMore) {
                  return (
                    <tr className="w-[100%]" key={index}>
                      <td className="w-[46%] py-5 border-b border-[#2C2C2C]">
                        <div className="flex flex-row gap-4">
                          <Image src={LumiImage} alt="image" />
                          <div className="flex flex-col">
                            <p className="text-[18px]">Lumi Foundation</p>
                            <p className="text-[16px] text-[#86888C]">LFD</p>
                          </div>
                        </div>
                      </td>
                      <td className="w-[40%] py-5 border-b border-[#2C2C2C]">
                        500,000
                      </td>
                      <td
                        className="py-5 border-b border-[#2C2C2C] w-[10%] text-[16px] text-[#FCBF07] cursor-pointer"
                        onClick={() => setPage(2)}
                      >
                        View
                      </td>
                    </tr>
                  );
                } else if (loadMore === false && index < 10) {
                  return (
                    <tr className="w-[100%]" key={index}>
                      <td className="w-[46%] py-5 border-b border-[#2C2C2C]">
                        <div className="flex flex-row gap-4">
                          <Image src={LumiImage} alt="image" />
                          <div className="flex flex-col">
                            <p className="text-[18px]">Lumi Foundation</p>
                            <p className="text-[16px] text-[#86888C]">LFD</p>
                          </div>
                        </div>
                      </td>
                      <td className="w-[40%] py-5 border-b border-[#2C2C2C]">
                        500,000
                      </td>
                      <td
                        className="py-5 border-b border-[#2C2C2C] w-[10%] text-[16px] text-[#FCBF07] cursor-pointer"
                        onClick={() => setPage(2)}
                      >
                        View
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <div
            className="text-base text-[#FCBF07] mt-8 cursor-pointer"
            onClick={() => setLoadMore(!loadMore)}
          >
            {loadMore === true ? "Load Less" : "Load More"}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="w-[100%] bg-[#1B1B1B] py-4 px-3 flex flex-row justify-center text-white text-[14px] gap-3 items-center rounded-[37px]">
            <p>Connect Network To</p>
            <div className="flex flex-row justify-center items-center bg-[#282828] rounded-full p-2">
              <Image src={EtherIcon} alt="icon" />
            </div>
            <p>Ethereum</p>
          </div>
          <DefaultCard header="Lock info">
            <div className="flex flex-col text-white text-base">
              {details.map((item, index) => (
                <div
                  className="flex flex-row justify-between items-center py-5 border-b border-b-[#2C2C2C]"
                  key={index}
                >
                  <p> {item.name} </p>
                  <p> {item.value} </p>
                </div>
              ))}
            </div>
          </DefaultCard>
          <DefaultCard header="Lock Records">
            <table className="text-white text-base w-[100%]">
              <thead>
                <tr>
                  <td className="p-1 font-bold">Amount</td>
                  <td className="p-1 font-bold">Lock time</td>
                  <td className="p-1 font-bold">Unlock time</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-[10%] p-1">3,300,000</td>
                  <td className="w-[10%] p-1">2023-08-21 21:09</td>
                  <td className="w-[10%] p-1">2023-09-20 21:07</td>
                </tr>
              </tbody>
            </table>
          </DefaultCard>
        </div>
      )}
    </div>
  );
};

export default TokenLock;
