"use client";

import React, { useState, useEffect } from "react";

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
import HeaderSection from "@/components/HeaderSection";

//! import API
import { GoPlus, ErrorCode } from "@goplus/sdk-node";

const FlashAuditResult = () => {
  const [result, setResult] = useState("");
  const [address, setAddress] = useState("");
  const [riskyNum, setRiskyNum] = useState(0);
  const [attentionNum, setAttentionNum] = useState(0);
  const [resultFlag, setResultFlag] = useState(false);
  const [chainId, setChainId] = useState("1");

  useEffect(() => {
    let riskyTemp = riskyNum;
    let attentionTemp = attentionNum;
    if (result && result.owner_change_balance === "1") {
      let temp = riskyNum;
      temp += 1;
      setRiskyNum(temp);
    }

    if (result && result.is_mintable === "1") {
      attentionTemp += 1;
    }

    if (result && result.external_call === "1") {
      attentionTemp += 1;
    }

    if (result && result.transfer_pausable === "1") {
      attentionTemp += 1;
    }

    if (result && result.is_blacklisted === "1") {
      attentionTemp += 1;
    }

    if (result && result.is_whitelisted === "1") {
      attentionTemp += 1;
    }

    if (result && result.is_proxy === "1") {
      attentionTemp += 1;
    }
    if (result && result.can_take_back_ownership === "1") {
      attentionTemp += 1;
    }
    if (result && result.hidden_owner === "1") {
      attentionTemp += 1;
    }
    if (result && result.selfdestruct === "1") {
      attentionTemp += 1;
    }
    if (result && result.is_honeypot === "1") {
      attentionTemp += 1;
    }
    if (result && result.cannot_sell_all === "1") {
      attentionTemp += 1;
    }
    if (result && result.cannot_buy === "1") {
      attentionTemp += 1;
    }
    if (result && result.trading_cooldown === "1") {
      attentionTemp += 1;
    }
    if (result && result.is_anti_whale === "1") {
      attentionTemp += 1;
    }
    if (result && result.anti_whale_modifiable === "1") {
      attentionTemp += 1;
    }
    if (result && result.slippage_modifiable === "1") {
      attentionTemp += 1;
    }
    if (result && result.personal_slippage_modifiable === "1") {
      attentionTemp += 1;
    }

    setAttentionNum(attentionTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const resultClick = async () => {
    let res = await GoPlus.tokenSecurity(chainId, address, 30);
    setRiskyNum(0);
    setAttentionNum(0);
    setResult("");
    if (res.code != ErrorCode.SUCCESS) {
      console.error(res.message);
    } else {
      // console.log(res.result);
      if (res.result[`${address.toLowerCase()}`]) {
        setResult(res.result[`${address.toLowerCase()}`]);
      } else {
        setResultFlag(true);
      }
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
      return a + Number(b.balance);
    }, 0);
    return Number(res);
  };
  const topBalance = (array) => {
    const res =
      Number(array[0].percent) +
      Number(array[1].percent) +
      Number(array[2].percent) +
      Number(array[3].percent) +
      Number(array[4].percent) +
      Number(array[5].percent) +
      Number(array[6].percent) +
      Number(array[7].percent) +
      Number(array[8].percent) +
      Number(array[9].percent);

    return res;
  };

  const getLPLockedPercent = (array) => {
    const res = array.reduce((a, b) => {
      if (b.is_locked === 1) {
        return a + Number(b.balance);
      } else {
        return a;
      }
    }, 0);

    return Number(res);
  };

  return (
    <div className="min-h-[1500px]">
      <HeaderSection />
      {result === "" ? (
        <div>
          <div className="flex flex-row justify-center">
            <div className="mt-[105px] w-[760px] bg-[#1B1B1B] border border-[#2C2C2C] rounded-[16px] px-8 py-9 max-sm:px-5">
              <div className="flex flex-col items-center gap-14">
                <Image
                  src={FlashAudit}
                  alt="image"
                  className="max-sm:w-[196px] max-sm:h-[37px]"
                />
                <Image
                  src={LogoBig}
                  alt="image"
                  className="max-sm:w-[196px] max-sm:h-[162px]"
                />
              </div>
              <div className="flex flex-col mt-11">
                <SearchToken
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onSelectChange={(e) => setChainId(e.target.value)}
                />
              </div>
              {resultFlag && (
                <p className="text-center text-[20px] text-[#f33434] mt-8">
                  Token address is wrong
                </p>
              )}
              <div className="flex flex-col mt-[30px]">
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
              className="w-[241px] h-[40px] max-sm:hidden"
            />

            <div className="w-[680px]">
              <SearchToken
                check={true}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onClick={() => resultClick()}
                onSelectChange={(e) => setChainId(e.target.value)}
              />
            </div>
          </div>
          <div className="max-sm:overflow-y-scroll">
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
                    <p className="text-base font-bold">{riskyNum}</p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <Image src={Attention} alt="attention" />
                  <div className="flex flex-col text-white">
                    <p className="text-base">Attention item</p>
                    <p className="text-base font-bold">{attentionNum}</p>
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
          </div>

          <div className="flex flex-row gap-7 mt-[80px] max-sm:flex-col max-sm:pb-4">
            <div className="flex-auto flex flex-col w-[892px] max-sm:w-[100%] gap-10">
              <DefaultCard header="Security Detection">
                <div className="flex flex-col gap-5">
                  {/* Trusted Token */}
                  {result.trust_list === "1" && (
                    <div className="border-b border-b-[#2C2C2C] pb-5">
                      <div className="max-w-[690px] flex flex-row items-start gap-3">
                        <Image src={CheckIcon} alt="Check" />

                        <div className="mt-[6px] flex flex-col gap-[18px]">
                          <p className="text-[16px] text-[#FCBF07] font-bold">
                            Trusted Token
                          </p>
                          <p className="text-[14px] text-[#86888C]">
                            This token is a famous and trustworthy one.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Source Code verified */}

                  <div className="border-b border-b-[#2C2C2C] pb-5">
                    <div className="max-w-[690px] flex flex-row items-start gap-3">
                      {result.is_open_source &&
                      result.is_open_source === "1" ? (
                        <Image src={CheckIcon} alt="Check" />
                      ) : (
                        <Image
                          src={Risky}
                          alt="risky"
                          className="w-[36px] h-[36px]"
                        />
                      )}
                      <div className="mt-[6px] flex flex-col gap-[18px]">
                        <p className="text-[16px] text-[#FCBF07] font-bold">
                          {result.is_open_source &&
                          result.is_open_source === "1"
                            ? "Contract source code verified"
                            : "Contract source code not verified"}
                        </p>
                        <p className="text-[14px] text-[#86888C]">
                          {result.is_open_source &&
                          result.is_open_source === "1"
                            ? "This token contract is open source. You can check thecontract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets."
                            : "This token contract has not been verified. We cannot check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud users of their assets."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Proxy Contract */}
                  {result.is_open_source === "1" && result.is_proxy && (
                    <div className="border-b border-b-[#2C2C2C] pb-5">
                      <div className="max-w-[690px] flex flex-row items-start gap-3">
                        {result.is_proxy && result.is_proxy === "0" ? (
                          <Image src={CheckIcon} alt="Check" />
                        ) : (
                          <Image
                            src={Attention}
                            alt="risky"
                            className="w-[36px] h-[36px]"
                          />
                        )}
                        <div className="mt-[6px] flex flex-col gap-[18px]">
                          <p className="text-[16px] text-[#FCBF07] font-bold">
                            {result.is_proxy && result.is_proxy === "0"
                              ? "No proxy"
                              : "Proxy contract"}
                          </p>
                          <p className="text-[14px] text-[#86888C]">
                            {result.is_proxy && result.is_proxy === "0"
                              ? "There is no proxy in the contract. The proxy contract means contract owner can modifiy the function of the token and possibly effect the price."
                              : "This contract is an Admin Upgradeability Proxy. The proxy contract means the contract owner can modifiy the function of the token and could possibly effect the price.There is possibly a way for the team to Rug or Scam. Please confirm the details with the project team before buying."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mint Function */}
                  {result.is_open_source === "1" &&
                    result.is_proxy !== "1" &&
                    result.is_mintable && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.is_mintable && result.is_mintable === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.is_mintable && result.is_mintable === "0"
                                ? "No mint function"
                                : "Mint function"}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.is_mintable && result.is_mintable === "0"
                                ? "Mint function is transparent or non-existent. Hidden mint functions may increase the amount of tokens in circulation and effect the price of the token."
                                : "The contract may contain additional issuance functions, which could maybe generate a large number of tokens, resulting in significant fluctuations in token prices. It is recommended to confirm with the project team whether it complies with the token issuance instructions."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Take Back Ownership	 */}
                  {result.is_open_source === "1" &&
                    result.can_take_back_ownership && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.can_take_back_ownership &&
                          result.can_take_back_ownership === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.can_take_back_ownership &&
                              result.can_take_back_ownership === "0"
                                ? "No function found that retrieves ownership"
                                : ""}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.can_take_back_ownership &&
                              result.can_take_back_ownership === "0"
                                ? "If this function exists, it is possible for the project owner to regain ownership even after relinquishing it"
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Owner Can Change Balance	 */}
                  {result.is_open_source === "1" &&
                    result.owner_change_balance && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.owner_change_balance &&
                          result.owner_change_balance === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Risky}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.owner_change_balance &&
                              result.owner_change_balance === "0"
                                ? "Owner can't change balance"
                                : "Owner can change balance"}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.owner_change_balance &&
                              result.owner_change_balance === "0"
                                ? "The contract owner is not found to have the authority to modify the balance of tokens at other addresses."
                                : "The contract owner has the authority to modify the balance of tokens at other addresses, which may result in a loss of assets."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* With Hidden Owner */}
                  {result.is_open_source === "1" && result.hidden_owner && (
                    <div className="border-b border-b-[#2C2C2C] pb-5">
                      <div className="max-w-[690px] flex flex-row items-start gap-3">
                        {result.hidden_owner && result.hidden_owner === "0" ? (
                          <Image src={CheckIcon} alt="Check" />
                        ) : (
                          <Image
                            src={Attention}
                            alt="risky"
                            className="w-[36px] h-[36px]"
                          />
                        )}
                        <div className="mt-[6px] flex flex-col gap-[18px]">
                          <p className="text-[16px] text-[#FCBF07] font-bold">
                            {result.hidden_owner && result.hidden_owner === "0"
                              ? "No hidden owner"
                              : "Hidden owner"}
                          </p>
                          <p className="text-[14px] text-[#86888C]">
                            {result.hidden_owner && result.hidden_owner === "0"
                              ? "No hidden owner address was found for the token. For contract with a hidden owner, developer can still manipulate the contract even if the ownership has been abandoned."
                              : "The token has a hidden owner address.For contract with a hidden owner, developer can still manipulate the contract even if the ownership has been abandoned."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Self-Destruct */}
                  {result.is_open_source === "1" && result.selfdestruct && (
                    <div className="border-b border-b-[#2C2C2C] pb-5">
                      <div className="max-w-[690px] flex flex-row items-start gap-3">
                        {result.selfdestruct && result.selfdestruct === "0" ? (
                          <Image src={CheckIcon} alt="Check" />
                        ) : (
                          <Image
                            src={Attention}
                            alt="risky"
                            className="w-[36px] h-[36px]"
                          />
                        )}
                        <div className="mt-[6px] flex flex-col gap-[18px]">
                          <p className="text-[16px] text-[#FCBF07] font-bold">
                            {result.selfdestruct && result.selfdestruct === "0"
                              ? "This token can not self destruct"
                              : ""}
                          </p>
                          <p className="text-[14px] text-[#86888C]">
                            {result.selfdestruct && result.selfdestruct === "0"
                              ? "No self-destruct function found. If this function exists and is triggered, the contract will be destroyed, all functions will be unavailable, and all related assets will be erased."
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* With External Call */}
                  {result.is_open_source === "1" && result.external_call && (
                    <div className="border-b border-b-[#2C2C2C] pb-5">
                      <div className="max-w-[690px] flex flex-row items-start gap-3">
                        {result.external_call &&
                        result.external_call === "0" ? (
                          <Image src={CheckIcon} alt="Check" />
                        ) : (
                          <Image
                            src={Attention}
                            alt="risky"
                            className="w-[36px] h-[36px]"
                          />
                        )}
                        <div className="mt-[6px] flex flex-col gap-[18px]">
                          <p className="text-[16px] text-[#FCBF07] font-bold">
                            {result.external_call &&
                            result.external_call === "0"
                              ? "No external call risk found"
                              : "Potential risk of external call"}
                          </p>
                          <p className="text-[14px] text-[#86888C]">
                            {result.external_call &&
                            result.external_call === "0"
                              ? "External calls would cause this token contract to be highly dependent on other contracts, which may be a potential risk."
                              : "The contract would call functions of other contracts when primary methods are executed.It would cause this contract to be highly dependent on other contracts, which may be a potential risk."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gas abuser */}
                  <div className="border-b border-b-[#2C2C2C] pb-5">
                    <div className="max-w-[690px] flex flex-row items-start gap-3">
                      <Image src={CheckIcon} alt="Check" />
                      <div className="mt-[6px] flex flex-col gap-[18px]">
                        <p className="text-[16px] text-[#FCBF07] font-bold">
                          This token is not a gas abuser
                        </p>
                        <p className="text-[14px] text-[#86888C]">
                          No gas abuse activity has been found.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DefaultCard>
              <DefaultCard header="Honeypot Risk">
                <div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex flex-row gap-6">
                      <p className="text-white text-[16px] font-normal">
                        Buy Tax:{" "}
                        <span className="text-[#FCBF07]">
                          {result && Number(result.buy_tax * 100)}%
                        </span>
                      </p>
                      <p className="text-white text-[16px] font-normal">
                        Sell Tax:{" "}
                        <span className="text-[#FCBF07]">
                          {result && Number(result.sell_tax * 100)}%
                        </span>
                      </p>
                    </div>
                    <p className="text-[#86888C] text-[12px]">
                      Above 10% may be considered a high tax rate. More than 50%
                      tax rate means may not be tradable.
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 mt-[25px]">
                    {/* Honeypot */}
                    {result.is_open_source === "1" && result.is_honeypot && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.is_honeypot && result.is_honeypot === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.is_honeypot && result.is_honeypot === "0"
                                ? "This does not appear to be a honeypot."
                                : ""}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.is_honeypot && result.is_honeypot === "0"
                                ? "We are not aware of any malicious code."
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* suspend  */}
                    {result.is_open_source === "1" &&
                      result.transfer_pausable && (
                        <div className="border-b border-b-[#2C2C2C] pb-5">
                          <div className="max-w-[690px] flex flex-row items-start gap-3">
                            {result.transfer_pausable &&
                            result.transfer_pausable === "0" ? (
                              <Image src={CheckIcon} alt="Check" />
                            ) : (
                              <Image
                                src={Attention}
                                alt="risky"
                                className="w-[36px] h-[36px]"
                              />
                            )}
                            <div className="mt-[6px] flex flex-col gap-[18px]">
                              <p className="text-[16px] text-[#FCBF07] font-bold">
                                {result.transfer_pausable &&
                                result.transfer_pausable === "0"
                                  ? "No codes found to suspend trading."
                                  : "Functions that can suspend trading"}
                              </p>
                              <p className="text-[14px] text-[#86888C]">
                                {result.transfer_pausable &&
                                result.transfer_pausable === "0"
                                  ? "If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk)."
                                  : "If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk)."}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Cannot Sell All	  */}
                    {result.is_open_source === "1" &&
                      result.cannot_sell_all && (
                        <div className="border-b border-b-[#2C2C2C] pb-5">
                          <div className="max-w-[690px] flex flex-row items-start gap-3">
                            {result.cannot_sell_all &&
                            result.cannot_sell_all === "0" ? (
                              <Image src={CheckIcon} alt="Check" />
                            ) : (
                              <Image
                                src={Attention}
                                alt="risky"
                                className="w-[36px] h-[36px]"
                              />
                            )}
                            <div className="mt-[6px] flex flex-col gap-[18px]">
                              <p className="text-[16px] text-[#FCBF07] font-bold">
                                {result.cannot_sell_all &&
                                result.cannot_sell_all === "0"
                                  ? "Holders can sell all of the token"
                                  : ""}
                              </p>
                              <p className="text-[14px] text-[#86888C]">
                                {result.cannot_sell_all &&
                                result.cannot_sell_all === "0"
                                  ? "Holders can sell all of the token. Some token contracts will have a maximum sell ratio."
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Cannot be bought  */}
                    {result.cannot_buy && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.cannot_buy && result.cannot_buy === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.cannot_buy && result.cannot_buy === "0"
                                ? "The token can be bought"
                                : ""}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.cannot_buy && result.cannot_buy === "0"
                                ? "Generally, these unbuyable tokens would be found in Reward Tokens. Such Tokens are issued as rewards for some on-chain applications and cannot be bought directly by users."
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Trading with CooldownTime */}
                    {result.is_open_source === "1" &&
                      result.trading_cooldown && (
                        <div className="border-b border-b-[#2C2C2C] pb-5">
                          <div className="max-w-[690px] flex flex-row items-start gap-3">
                            {result.trading_cooldown &&
                            result.trading_cooldown === "0" ? (
                              <Image src={CheckIcon} alt="Check" />
                            ) : (
                              <Image
                                src={Attention}
                                alt="risky"
                                className="w-[36px] h-[36px]"
                              />
                            )}
                            <div className="mt-[6px] flex flex-col gap-[18px]">
                              <p className="text-[16px] text-[#FCBF07] font-bold">
                                {result.trading_cooldown &&
                                result.trading_cooldown === "0"
                                  ? "No trading cooldown function"
                                  : ""}
                              </p>
                              <p className="text-[14px] text-[#86888C]">
                                {result.trading_cooldown &&
                                result.trading_cooldown === "0"
                                  ? "The token contract has no trading cooldown function. If there is a trading cooldown function, the user will not be able to sell the token within a certain time or block after buying."
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Anti Whale		 */}
                    {result.is_open_source === "1" && result.is_anti_whale && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.is_anti_whale &&
                          result.is_anti_whale === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.is_anti_whale &&
                              result.is_anti_whale === "0"
                                ? "No anti_whale(Unlimited number of transactions)"
                                : ""}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.is_anti_whale &&
                              result.is_anti_whale === "0"
                                ? "There is no limit to the number of token transactions. The number of scam token transactions may be limited (honeypot risk)."
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Modifiable anti whale	 */}
                    {result.is_open_source === "1" &&
                      result.anti_whale_modifiable && (
                        <div className="border-b border-b-[#2C2C2C] pb-5">
                          <div className="max-w-[690px] flex flex-row items-start gap-3">
                            {result.anti_whale_modifiable &&
                            result.anti_whale_modifiable === "0" ? (
                              <Image src={CheckIcon} alt="Check" />
                            ) : (
                              <Image
                                src={Attention}
                                alt="risky"
                                className="w-[36px] h-[36px]"
                              />
                            )}
                            <div className="mt-[6px] flex flex-col gap-[18px]">
                              <p className="text-[16px] text-[#FCBF07] font-bold">
                                {result.anti_whale_modifiable &&
                                result.anti_whale_modifiable === "0"
                                  ? "Anti whale can not be modified"
                                  : ""}
                              </p>
                              <p className="text-[14px] text-[#86888C]">
                                {result.anti_whale_modifiable &&
                                result.anti_whale_modifiable === "0"
                                  ? "The maximum trading amount or maximum position can not be modified."
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Modifiable Tax */}
                    {result.is_open_source === "1" &&
                      result.slippage_modifiable && (
                        <div className="border-b border-b-[#2C2C2C] pb-5">
                          <div className="max-w-[690px] flex flex-row items-start gap-3">
                            {result.slippage_modifiable &&
                            result.slippage_modifiable === "0" ? (
                              <Image src={CheckIcon} alt="Check" />
                            ) : (
                              <Image
                                src={Attention}
                                alt="risky"
                                className="w-[36px] h-[36px]"
                              />
                            )}
                            <div className="mt-[6px] flex flex-col gap-[18px]">
                              <p className="text-[16px] text-[#FCBF07] font-bold">
                                {result.slippage_modifiable &&
                                result.slippage_modifiable === "0"
                                  ? "Tax cannot be modified"
                                  : ""}
                              </p>
                              <p className="text-[14px] text-[#86888C]">
                                {result.slippage_modifiable &&
                                result.slippage_modifiable === "0"
                                  ? "The contract owner may not contain the authority to modify the transaction tax. If the transaction tax is increased to more than 49%, the tokens will not be able to be traded (honeypot risk)."
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                    {/* Blacklist */}
                    {result.is_open_source === "1" && result.is_blacklisted && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.is_blacklisted &&
                          result.is_blacklisted === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.is_blacklisted &&
                              result.is_blacklisted === "0"
                                ? "No blacklist"
                                : "Blacklist function"}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.is_blacklisted &&
                              result.is_blacklisted === "0"
                                ? "The blacklist function is not included. If there is a blacklist, some addresses may not be able to trade normally (honeypot risk)."
                                : "The blacklist function is included. Some addresses may not be able to trade normally (honeypot risk)."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Whitelist */}
                    {result.is_open_source === "1" && result.is_whitelisted && (
                      <div className="border-b border-b-[#2C2C2C] pb-5">
                        <div className="max-w-[690px] flex flex-row items-start gap-3">
                          {result.is_whitelisted &&
                          result.is_whitelisted === "0" ? (
                            <Image src={CheckIcon} alt="Check" />
                          ) : (
                            <Image
                              src={Attention}
                              alt="risky"
                              className="w-[36px] h-[36px]"
                            />
                          )}
                          <div className="mt-[6px] flex flex-col gap-[18px]">
                            <p className="text-[16px] text-[#FCBF07] font-bold">
                              {result.is_whitelisted &&
                              result.is_whitelisted === "0"
                                ? "No whitelist"
                                : "Whitelist function"}
                            </p>
                            <p className="text-[14px] text-[#86888C]">
                              {result.is_whitelisted &&
                              result.is_whitelisted === "0"
                                ? "The whitelist function is not included. If there is a whitelist, some addresses may not be able to trade normally (honeypot risk)."
                                : "The whitelist function is included. Some addresses may not be able to trade normally (honeypot risk)."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Assigned Address' Slippage is Modifiable */}
                    {result.is_open_source === "1" &&
                      result.personal_slippage_modifiable && (
                        <div className="border-b border-b-[#2C2C2C] pb-5">
                          <div className="max-w-[690px] flex flex-row items-start gap-3">
                            {result.personal_slippage_modifiable &&
                            result.personal_slippage_modifiable === "0" ? (
                              <Image src={CheckIcon} alt="Check" />
                            ) : (
                              <Image
                                src={Attention}
                                alt="risky"
                                className="w-[36px] h-[36px]"
                              />
                            )}
                            <div className="mt-[6px] flex flex-col gap-[18px]">
                              <p className="text-[16px] text-[#FCBF07] font-bold">
                                {result.personal_slippage_modifiable &&
                                result.personal_slippage_modifiable === "0"
                                  ? "No tax changes found for personal addresses"
                                  : ""}
                              </p>
                              <p className="text-[14px] text-[#86888C]">
                                {result.personal_slippage_modifiable &&
                                result.personal_slippage_modifiable === "0"
                                  ? "No tax changes were found for every assigned address. If it exists, the contract owner may set a very outrageous tax rate for assigned address to block it from trading."
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </DefaultCard>
            </div>
            <div className="flex-auto w-[630px] max-sm:w-[100%] flex flex-col gap-10">
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
                      {result && Number(result.holder_count)}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-[#86888C]">Total Supply</p>
                    <p className="text-sm text-[#FCBF07]">
                      {result && Number(result.total_supply).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-b-[#2C2C2C] pb-6">
                    <p className="text-sm text-[#86888C]">
                      Top10 Holders Ratio
                    </p>
                    <div className="relative flex flex-row">
                      <div className="bg-[#16171B] h-[31px] w-[100%] rounded-[4px]"></div>
                      <div
                        className="absolute top-0 left-0 h-[31px] rounded-[4px] flex flex-row justify-end items-center pr-2"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(252, 191, 7, 0.20) 0%, #FCBF07 100%)",
                          width: `${
                            result.holders &&
                            (topBalance(result.holders) * 100).toFixed(2)
                          }%`,
                        }}
                      >
                        <p className="text-sm text-[#16171B]">
                          {result.holders &&
                            (topBalance(result.holders) * 100).toFixed(2)}
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
                            {Number(item.percent * 100).toFixed(2)}
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
                      <p className="p-0">
                        {result && (result.owner_balance / 1000).toFixed(2)}k (
                        {result && (result.owner_percent * 100).toFixed(2)}%)
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
                      {result.lp_holder_count && result.lp_holder_count}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm text-[#86888C]">Total Supply</p>
                    <p className="text-sm text-[#FCBF07]">
                      {result.lp_total_supply &&
                        Number(result.lp_total_supply).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-b-[#2C2C2C] pb-6">
                    <p className="text-sm text-[#86888C]">
                      Percent of LP Locked
                    </p>
                    <div className="relative flex flex-row">
                      <div className="bg-[#16171B] h-[31px] w-[100%] rounded-[4px]"></div>
                      <div
                        className="absolute top-0 left-0 h-[31px] min-w-[55px] rounded-[4px] flex flex-row justify-end items-center pr-2"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(252, 191, 7, 0.20) 0%, #FCBF07 100%)",
                          width: `${Number(
                            (getLPLockedPercent(result.lp_holders) /
                              Number(result.lp_total_supply)) *
                              100
                          ).toFixed(2)}%`,
                        }}
                      >
                        <p className="text-sm text-[#16171B]">
                          {result.lp_total_supply &&
                            Number(
                              (getLPLockedPercent(result.lp_holders) /
                                Number(result.lp_total_supply)) *
                                100
                            ).toFixed(2)}
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                  {result.lp_holders &&
                    result.lp_holders.map((item, index) => (
                      <div
                        className="flex flex-row items-center justify-between"
                        key={index}
                      >
                        <p className="text-sm text-[#86888C]">
                          {item.tag !== "" ? (
                            item.tag
                          ) : (
                            <AddressShow address={item.address} len={4} />
                          )}
                        </p>
                        <p className="text-sm text-[#FCBF07]">
                          {Number(item.balance).toFixed(3)} (
                          {Number(item.percent * 100).toFixed(2)}%)
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
