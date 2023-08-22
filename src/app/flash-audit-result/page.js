"use client";

import React, { useState } from "react";

import Image from "next/image";

//! import image
import FlashAudit from "@/assets/image/flash-audit.png";
import EthereumLogoSmall from "@/assets/icons/ethereum-logo-small.svg";
import DextoolsLogoSmall from "@/assets/icons/dextools-logo-small.svg";
import Risky from "@/assets/icons/risky.svg";
import Attention from "@/assets/icons/attention.svg";
import SearchBlack from "@/assets/icons/search-black.svg";
import LogoBig from "@/assets/image/logo-big.png";
import PDFIcon from "@/assets/icons/pdf.svg";
import CheckIcon from "@/assets/icons/check.svg";

import SearchToken from "@/components/Form/SearchToken";
import HeaderNav from "@/components/HeaderNav";
import IconBtn from "@/components/Button/IconBtn";
import DefaultCard from "@/components/Card/DefaultCard";
import AddressInput from "@/components/Form/AddressInput";

//! import API
import { GoPlus, ErrorCode } from "@goplus/sdk-node";
let chainId = "1";

const FlashAuditResult = () => {
  const [result, setResult] = useState("");
  const [address, setAddress] = useState("");

  const detectionList = [
    {
      title: "Contract source code verified",
      text: "This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.",
    },
    {
      title: "No proxy",
      text: "There is no proxy in the contract. The proxy contract means contract owner can modifiy the function of the token and possibly effect the price.",
    },
    {
      title: "No function found that retrieves ownership",
      text: "If this function exists, it is possible for the project owner to regain ownership even after relinquishing it",
    },
    {
      title: "Owner can't change balance",
      text: "The contract owner is not found to have the authority to modify the balance of tokens at other addresses.",
    },
    {
      title: "No hidden owner",
      text: "No hidden owner address was found for the token. For contract with a hidden owner, developer can still manipulate the contract even if the ownership has been abandoned.",
    },
    {
      title: "This token can not self destruct",
      text: "No self-destruct function found. If this function exists and is triggered, the contract will be destroyed, all functions will be unavailable, and all related assets will be erased.",
    },
    {
      title: "No external call risk found",
      text: "External calls would cause this token contract to be highly dependent on other contracts, which may be a potential risk.",
    },
    {
      title: "This token is not a gas abuser",
      text: "No gas abuse activity has been found.",
    },
  ];

  const riskList = [
    {
      title: "This does not appear to be a honeypot.",
      text: "We are not aware of any malicious code.",
    },
    {
      title: "No codes found to suspend trading.",
      text: "If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk).",
    },
    {
      title: "Holders can sell all of the token",
      text: "Holders can sell all of the token. Some token contracts will have a maximum sell ratio.",
    },
    {
      title: "The token can be bought",
      text: "Generally, these unbuyable tokens would be found in Reward Tokens. Such Tokens are issued as rewards for some on-chain applications and cannot be bought directly by users.",
    },
    {
      title: "No trading cooldown function",
      text: "The token contract has no trading cooldown function. If there is a trading cooldown function, the user will not be able to sell the token within a certain time or block after buying.",
    },
    {
      title: "No anti_whale(Unlimited number of transactions)",
      text: "The maximum trading amount or maximum position can not be modified.",
    },
    {
      title: "Anti whale can not be modified",
      text: "The maximum trading amount or maximum position can not be modified.",
    },
    {
      title: "Tax cannot be modified",
      text: "The contract owner may not contain the authority to modify the transaction tax. If the transaction tax is increased to more than 49%, the tokens will not be able to be traded (honeypot risk).",
    },
    {
      title: "No blacklist",
      text: "The blacklist function is not included. If there is a blacklist, some addresses may not be able to trade normally (honeypot risk).",
    },
    {
      title: "No whitelist",
      text: "The whitelist function is not included. If there is a whitelist, some addresses may not be able to trade normally (honeypot risk).",
    },
    {
      title: "No tax changes found for personal addresses",
      text: "No tax changes were found for every assigned address. If it exists, the contract owner may set a very outrageous tax rate for assigned address to block it from trading.",
    },
  ];

  const baseinfoList = [
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "PinkLock02",
      left: "18M (18.00%)",
    },
    {
      right: "0x28...8e9d",
      left: "18M (18.00%)",
    },
  ];

  const resultClick = async () => {
    let res = await GoPlus.tokenSecurity(chainId, address, 30);
    if (res.code != ErrorCode.SUCCESS) {
      console.error(res.message);
    } else {
      // console.log(res.result["0x408e41876cccdc0f92210600ef50372656052a38"]);
      setResult(res.result[`${address.toLowerCase()}`]);
      console.log(result.lp_total_supply);
    }
  };

  const AddressShow = ({ address, len }) => {
    return (
      <>
        {address.substring(0, len) +
          "..." +
          address.substring(address.length - len)}
      </>
    );
  };

  const BalanceSum = (array) => {
    const res = array.reduce((a, b) => {
      return Number(a.balance) + Number(b.balance);
    });
    return Number(res);
  };
  const topBalance = (array) => {
    const res =
      Number(array[0].balance) +
      Number(array[1].balance) +
      Number(array[2].balance) +
      Number(array[3].balance) +
      Number(array[4].balance) +
      Number(array[5].balance) +
      Number(array[6].balance) +
      Number(array[7].balance) +
      Number(array[8].balance) +
      Number(array[9].balance);

    return res;
  };

  return (
    <div className="mt-14 min-h-[1300px]">
      {result === "" ? (
        <div>
          <HeaderNav />
          <div className="flex flex-row justify-center">
            <div className="mt-[105px] w-[760px] bg-[#1B1B1B] border border-[#2C2C2C] rounded-[16px] px-8 py-9">
              <div className="flex flex-col items-center gap-14">
                <Image src={FlashAudit} alt="image" />
                <Image src={LogoBig} alt="image" />
              </div>
              <div className="flex flex-col mt-11">
                <SearchToken
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-[99px]">
                <IconBtn
                  text="Check"
                  TxSize="text-[20px]"
                  BgClass="bg-[#FCBF07]"
                  rounded="rounded-[8px]"
                  TxClass="text-[#16171B]"
                  icon={SearchBlack}
                  py="py-[16px]"
                  heigh="h-[60px]"
                  onClick={() => resultClick()}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between">
            <Image
              src={FlashAudit}
              alt="image"
              className="w-[241px] h-[40px]"
            />

            <div className="w-[561px]">
              <SearchToken check={true} />
            </div>
          </div>
          <div className="flex flex-row bg-[#1B1B1B] items-center justify-between w-[1554px] h-[84px] mt-[29px] pl-8 pr-3 rounded-[38px]">
            <div className="flex flex-row justify-between items-center w-[851px]">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col mr-2">
                  <p className="text-white text-[18.88px] font-bold">
                    {result.token_symbol && result.token_symbol}
                  </p>
                  <p className="text-white text-[14px]">
                    {result.token_name && result.token_name}
                  </p>
                </div>
                <Image src={EthereumLogoSmall} alt="etherem" />
                <Image src={DextoolsLogoSmall} alt="etherem" />
              </div>

              <p className="text-white text-[23.04px] font-bold">
                Security Detection
              </p>

              <div className="flex flex-row gap-2">
                <Image src={Risky} alt="risky" />
                <div className="flex flex-col text-white">
                  <p className="text-base">Risky item</p>
                  <p className="text-base font-bold">0</p>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <Image src={Attention} alt="attention" />
                <div className="flex flex-col text-white">
                  <p className="text-base">Attention item</p>
                  <p className="text-base font-bold">0</p>
                </div>
              </div>
            </div>
            <IconBtn
              icon={PDFIcon}
              text="Generate a Flash Audit ($200)"
              BgClass="bg-[#FCBF07]"
              TxClass="text-[#16171B]"
              px="px-[16px]"
              py="py-[16px]"
              heigh="h-[56px]"
              rounded="rounded-[36px]"
              TxSize="text-[16px]"
            />
          </div>

          <div className="flex flex-row gap-7 mt-[80px]">
            <div className="flex-auto flex flex-col w-[892px] gap-10">
              <DefaultCard header="Security Detection">
                <div className="flex flex-col gap-5">
                  {detectionList.map((item, index) => (
                    <div
                      className="border-b border-b-[#2C2C2C] pb-5"
                      key={index}
                    >
                      <div className="max-w-[690px] flex flex-row items-start gap-3">
                        <Image src={CheckIcon} alt="Check" />
                        <div className="mt-[6px] flex flex-col gap-[18px]">
                          <p className="text-[16px] text-[#FCBF07] font-bold">
                            {item.title}
                          </p>
                          <p className="text-[14px] text-[#86888C]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DefaultCard>
              <DefaultCard header="Honeypot Risk">
                <div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex flex-row gap-6">
                      <p className="text-white text-[16px] font-normal">
                        Buy Tax: <span className="text-[#FCBF07]">0.00%</span>
                      </p>
                      <p className="text-white text-[16px] font-normal">
                        Sell Tax: <span className="text-[#FCBF07]">0.00%</span>
                      </p>
                    </div>
                    <p className="text-[#86888C] text-[12px]">
                      Above 10% may be considered a high tax rate. More than 50%
                      tax rate means may not be tradable.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 mt-[25px]">
                    {riskList.map((item, index) => (
                      <div
                        className="border-b border-b-[#2C2C2C] pb-5"
                        key={index}
                      >
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          <Image src={CheckIcon} alt="Check" />
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {item.title}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DefaultCard>
            </div>
            <div className="flex-auto w-[630px] flex flex-col gap-10">
              <DefaultCard header="Basic Info">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-sm text-[#86888C]">Token Symbol</p>
                      <p className="text-sm font-bold text-[#FCBF07]">
                        {result.token_symbol && result.token_symbol}
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-sm text-[#86888C]">Token Name</p>
                      <p className="text-sm font-bold text-[#FCBF07]">
                        {result && result.token_name}
                      </p>
                    </div>
                  </div>
                  <div className="mt-[20px] flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-[#86888C]">
                        Token Contract Address
                      </p>
                      <AddressInput value={address} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-[#86888C]">Contract Owner</p>
                      <AddressInput value={result && result.owner_address} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-[#86888C]">Contract Creator</p>
                      <AddressInput value={result && result.creator_address} />
                    </div>
                  </div>
                </div>
              </DefaultCard>
              <DefaultCard header="Basic Info">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-[#86888C]">Token Holders</p>
                    <p className="text-sm text-[#FCBF07]">
                      {result && result.holder_count}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-[#86888C]">Total Supply</p>
                    <p className="text-sm text-[#FCBF07]">
                      {result && result.total_supply}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-b-[#2C2C2C] pb-6">
                    <p className="text-sm text-[#86888C]">
                      Top10 Holders Ratio
                    </p>
                    <div className="relative flex flex-row">
                      <div className="bg-[#16171B] h-[31px] w-[100%] rounded-[4px]"></div>
                      <div
                        className="absolute top-0 left-0 h-[31px] w-[265px] rounded-[4px] flex flex-row justify-end items-center pr-2"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(252, 191, 7, 0.20) 0%, #FCBF07 100%)",
                        }}
                      >
                        <p className="text-sm text-[#16171B]">
                          {result.holders &&
                            (
                              (topBalance(result.holders) /
                                Number(result.total_supply)) *
                              100
                            ).toFixed(2)}
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[14px] mt-8">
                    {result &&
                      result.holders.map((item, index) => (
                        <div
                          className="flex flex-row items-center justify-between"
                          key={index}
                        >
                          <p className="text-sm text-[#86888C]">
                            {item.tag ? (
                              item.tag
                            ) : (
                              <AddressShow address={item.address} len={4} />
                            )}
                          </p>
                          <p className="text-sm text-[#FCBF07]">
                            {(Number(item.balance) / 1000000).toFixed(3)}M (
                            {Number(
                              (item.balance / result.total_supply) * 100
                            ).toFixed(2)}
                            %)
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-row text-[12px] text-white gap-5 mt-5 border-b border-b-[#2C2C2C] pb-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">
                        Owner`s Holdings:
                        <span className="font-light">
                          {" "}
                          {result.owner_balance && result.owner_balance}
                        </span>
                      </p>
                      <p className="font-bold">
                        Creator`s Holdings:
                        <span className="font-light">
                          {" "}
                          {result.creator_balance && result.creator_balance}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>
                        Percent:{" "}
                        {result.owner_percent && result.owner_percent * 100}%
                      </p>
                      <p>
                        Percent:
                        {result.creator_percent && result.creator_percent * 100}
                        %
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-white gap-4">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row w-[220px] justify-between">
                        <p>Creator</p>
                        <p className="text-[#FCBF07]">
                          {result.creator_address && (
                            <AddressShow
                              address={result.creator_address}
                              len={6}
                            />
                          )}
                        </p>
                      </div>
                      <p>
                        {result && result.creator_balance} (
                        {result && result.creator_percent * 100}%)
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row w-[220px] justify-between">
                        <p>Owner</p>
                        <p className="text-[#FCBF07]">
                          {result.owner_address && (
                            <AddressShow
                              address={result.owner_address}
                              len={6}
                            />
                          )}
                        </p>
                      </div>
                      <p>
                        {result && result.owner_balance / 1000}k (
                        {result && result.owner_percent * 100}%)
                      </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row w-[220px] justify-between">
                        <p>DEX</p>
                        <p className="text-[#FCBF07]">
                          {result.dex && (
                            <AddressShow address={result.dex[0].pair} len={6} />
                          )}
                        </p>
                      </div>
                      <p>UniswapV2</p>
                      <p>
                        {result.dex &&
                          (result.dex[0].liquidity / 1000).toFixed(3)}
                        k
                      </p>
                    </div>
                  </div>
                </div>
              </DefaultCard>
              <DefaultCard header="Top 10 LP Holders">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-[#86888C]">LP Holders</p>
                    <p className="text-sm text-[#FCBF07]">
                      {result.lp_holders && result.lp_holders.length}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-[#86888C]">Total Supply</p>
                    <p className="text-sm text-[#FCBF07]">
                      {result.lp_holders &&
                        BalanceSum(result.lp_holders).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-b-[#2C2C2C] pb-6">
                    <p className="text-sm text-[#86888C]">Total Supply</p>
                    <div className="relative flex flex-row">
                      <div className="bg-[#16171B] h-[31px] w-[100%] rounded-[4px]"></div>
                      <div
                        className="absolute top-0 left-0 h-[31px] w-[100%] rounded-[4px] flex flex-row justify-end items-center pr-2"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(252, 191, 7, 0.20) 0%, #FCBF07 100%)",
                        }}
                      >
                        <p className="text-sm text-[#16171B]">100%</p>
                      </div>
                    </div>
                  </div>
                  {result.lp_holders &&
                    result.lp_holders.map((item, index) => (
                      <div
                        className="flex flex-row items-center justify-between"
                        key={index}
                      >
                        <p className="text-sm text-[#86888C]">{item.tag}</p>
                        <p className="text-sm text-[#FCBF07]">
                          {Number(item.balance).toFixed(2)} (
                          {(
                            (Number(item.balance) /
                              BalanceSum(result.lp_holders)) *
                            100
                          ).toFixed(2)}
                          % )
                        </p>
                      </div>
                    ))}
                </div>
              </DefaultCard>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashAuditResult;
