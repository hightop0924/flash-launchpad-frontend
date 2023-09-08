"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

//! import components
import Input from "@/components/Form/Input";
import Warning from "@/components/Alert/Warning";
import DefaultSelect from "@/components/Form/DefaultSelect";

//! import Icons
import LogoURLIcon from "@/assets/icons/logoURL-input.svg";
import WebsiteIcon from "@/assets/icons/website-input.svg";
import TwitterIcon from "@/assets/icons/twitter-input.svg";
import FacebookIcon from "@/assets/icons/facebook-input.svg";
import GithubIcon from "@/assets/icons/github-input.svg";
import TelegramIcon from "@/assets/icons/telegram-input.svg";
import InstagramIcon from "@/assets/icons/instagram-input.svg";
import DiscordIcon from "@/assets/icons/discord-input.svg";
import RedditIcon from "@/assets/icons/reddit-input.svg";
import YoutubeIcon from "@/assets/icons/youtube-input.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import RefreshIcon from "@/assets/icons/refresh-yello.svg";
import SwitchButton from "@/components/Form/SwitchButton";
import CoverIcon from "@/assets/icons/cover.svg";
import DatePickerIcon from "@/assets/icons/datepicker.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateStaking = () => {
  const [step, setStep] = useState(1);
  const [stakingSwitch, setStakingSwitch] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [step4Details, setStep4Details] = useState([
    { name: "Name", value: "Stake Flash 3.0", color: "#E65959" },
    { name: "Symbol", value: "sFLASH", color: "#E65959" },
    { name: "Staking Token", value: "Flash 3.0", color: "#E65959" },
    { name: "Reward Token", value: "Flash 3.0", color: "#E65959" },
    { name: "Reward Type", value: "Percent Reward", color: "#E65959" },
    { name: "Reward Ratio (Year)", value: "0%", color: "#E65959" },
    { name: "Hard cap", value: "100", color: "#E65959" },
    { name: "Min Limit to stake", value: "50", color: "#E65959" },
    { name: "Transferrable", value: "No", color: "#E65959" },
    { name: "Min Period to stake", value: "seconds", color: "#E65959" },
    { name: "Start time", value: "2023-08-30T20:31 (UTC)", color: "#95DF71" },
    { name: "End time", value: "2023-09-14T20:31 (UTC)", color: "#95DF71" },
    { name: "Website", value: "", color: "" },
    { name: "Twitter", value: "", color: "" },
    { name: "Telegram", value: "", color: "" },
    { name: "Github", value: "", color: "" },
    { name: "Discord", value: "", color: "" },
    { name: "Youtube", value: "", color: "" },
    { name: "Whitelist", value: "", color: "" },
    { name: "Reddit", value: "", color: "" },
    {
      name: "Description",
      value: "https://flashlaunch.app/create-stake",
      color: "#95DF71",
    },
  ]);

  return (
    <div className="min-h-[1500px]">
      <div className="bg-[#1B1B1B] rounded-2xl p-8 flex flex-row">
        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#FCBF07]">Step 1</p>
          <p className="text-lg text-white font-semibold mt-5">Verify Token</p>
          <p className="text-sm text-[#86888C] mt-4">
            Enter the token address <br /> and Verify
          </p>
          {step === 1 && (
            <hr className="h-0.5 border-0 bg-[#FCBF07] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>

        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#FCBF07]">Step 2</p>
          <p className="text-lg text-white font-semibold mt-5">
            Launchpad Information
          </p>
          <p className="text-sm text-[#86888C] mt-4">
            Enter the Fair Launch information, in <br /> case of trouble check
            our <span className="text-[#FCBF07]">Docs</span>
          </p>

          {step === 2 && (
            <hr className="h-0.5 border-0 bg-[#FCBF07] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>

        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#FCBF07]">Step 3</p>
          <p className="text-lg text-white font-semibold mt-5">
            Add Additional Info
          </p>
          <p className="text-sm text-[#86888C] mt-4">
            Let People Know Who You <br /> Are
          </p>

          {step === 3 && (
            <hr className="h-0.5 border-0 bg-[#FCBF07] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>

        <div className="flex flex-col min-w-[328px] relative">
          <p className="text-sm text-[#FCBF07]">Step 4</p>
          <p className="text-lg text-white font-semibold mt-5">Finish</p>
          <p className="text-sm text-[#86888C] mt-4">Review your information</p>

          {step === 4 && (
            <hr className="h-0.5 border-0 bg-[#FCBF07] w-[328px] absolute -top-8 left-0"></hr>
          )}
        </div>
      </div>

      <div className="bg-[#1B1B1B] rounded-2xl p-8 mt-6">
        {step === 1 && (
          <div className="flex flex-col gap-6">
            <Input
              label="Staking Token Address"
              placeholder="Ex: https://reddit.com/..."
            />

            <Input label="Youtube Video" placeholder="Reward Token Address" />

            <div className="flex flex-row justify-end">
              <button
                className="bg-[#FBBF04] rounded-[10px] py-[10px] px-[61px] text-sm font-semibold text-[#151103]"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-7">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2 w-[100%]">
                <Input label="Stake Name" placeholder="Stake Flash 3.0" />
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <Input label="Stake Symble" placeholder="sFlash" />
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2 w-[100%]">
                <DefaultSelect label="Reward Type" />
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <Input label="Reward Ratio ( % / yr )" placeholder="sFlash" />
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <SwitchButton
                check={stakingSwitch}
                onClick={(e) => setStakingSwitch(e)}
              />
              <p className="text-sm text-white">Reward Claim any time</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-2 w-[100%]">
                  <Input placeholder="Hard Cap" />
                </div>

                <div className="flex flex-col gap-2 w-[100%]">
                  <Input placeholder="Min Limit to Stake" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-2 w-[100%]">
                  <Input placeholder="Min Period Stake (seconds)" />
                </div>

                <div className="flex flex-col gap-2 w-[100%] invisible">
                  <Input placeholder="Min Limit to Stake" />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <SwitchButton
                check={stakingSwitch}
                onClick={(e) => setStakingSwitch(e)}
              />
              <p className="text-sm text-white">
                Staking Token is transferrable or not
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-2 w-[100%]">
                  <p className="text-white text-[14px]">Start time (UTC)</p>
                  <div className="flex flex-col relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MM/d/yyyy hh:mm aa"
                      placeholderText="Select date"
                      className="bg-[#141414] outline-none border w-[100%] border-[#2C2C2C] h-[59px] p-5 rounded-lg text-base text-[#86888C]"
                    />
                    <Image
                      src={DatePickerIcon}
                      alt="image"
                      className="absolute top-4 right-5"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-[100%]">
                  <p className="text-white text-[14px]">End time (UTC)</p>
                  <div className="flex flex-col relative">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MM/d/yyyy hh:mm aa"
                      placeholderText="Select date"
                      className="bg-[#141414] outline-none border w-[100%] border-[#2C2C2C] h-[59px] p-5 rounded-lg text-base text-[#86888C]"
                    />
                    <Image
                      src={DatePickerIcon}
                      alt="image"
                      className="absolute top-4 right-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-row justify-end gap-5">
                <button
                  className="px-12 py-[10px] text-sm text-[#FBBF04] rounded-[10px] font-semibold border border-[#FBBF04]"
                  onClick={() => setStep(1)}
                >
                  Previous
                </button>

                <button
                  className="px-12 py-[10px] text-sm text-[#151103] font-semibold rounded-[10px] bg-[#FBBF04]"
                  onClick={() => setStep(3)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-7">
            <p className="text-xs text-[#FBBF04]">(*) is required field.</p>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%] gap-3">
                <p className="text-sm text-[#FCBF07]">Banner (Not requared)</p>
                <button className="bg-[#282828] rounded-[40px] flex flex-row w-[100%] py-[10px] justify-center items-center gap-3 shadow-[0_9px_37px_0_rgba(0, 0, 0, 0.20)]">
                  <Image src={CoverIcon} alt="" />
                  <p className="text-sm text-white">
                    Cover Image/video 1024x150 Up To %mb
                  </p>
                </button>
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Staking token Logo URL "
                  required={true}
                  placeholder="Ex: https://..."
                  icon={LogoURLIcon}
                />
                <p className="text-xs text-[#95DF71] mt-[6px]">
                  URL must end with a supported image extension png, jpg, jpeg
                  or git. You can upload your image on
                </p>
                <p className="text-xs text-[#E65959] mt-1">
                  https://postimages.org/
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Reward token Logo URL"
                  placeholder="Ex: https://..."
                  icon={LogoURLIcon}
                />
                <p className="text-xs text-[#95DF71] mt-[6px]">
                  URL must end with a supported image extension png, jpg, jpeg
                  or git. You can upload your image on
                </p>
                <p className="text-xs text-[#E65959] mt-1">
                  https://postimages.org/
                </p>
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Website"
                  placeholder="Ex: https://..."
                  icon={WebsiteIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Twitter"
                  placeholder="Ex: https://twitter.com/..."
                  icon={TwitterIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Github"
                  placeholder="Ex: https://github.com/..."
                  icon={GithubIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Telegram"
                  placeholder="Ex: https://t.me/..."
                  icon={TelegramIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Discord"
                  placeholder="Ex: https://t.me/..."
                  icon={DiscordIcon}
                />
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Youtube presentation Video"
                  placeholder="Example: https://www.youtube.com/watch?v=4ZwxOPWXZ61"
                  icon={YoutubeIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Reddit"
                  placeholder="Ex: https://reddit.com/..."
                  icon={RedditIcon}
                />
              </div>
            </div>
            <p className="text-xs text-[#FCBF07]">
              Input your youtube URL, or youtube video ID.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">Description</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Ex: This project is..."
                className="bg-[#141414] rounded-[6px] border border-[#2C2C2C] py-[10px] px-4 outline-none"
              ></textarea>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-row justify-end gap-5">
                <button
                  className="px-12 py-[10px] text-sm text-[#FBBF04] rounded-[10px] font-semibold border border-[#FBBF04]"
                  onClick={() => setStep(2)}
                >
                  Previous
                </button>

                <button
                  className="px-12 py-[10px] text-sm text-[#151103] font-semibold rounded-[10px] bg-[#FBBF04]"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col">
            <div className="flex flex-col">
              {step4Details.map((item, index) => (
                <div
                  key={index}
                  className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]"
                >
                  <p>{item.name}</p>
                  <p className={`${item.color && "text-[" + item.color + "]"}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-end gap-5 mt-12">
              <button
                className="px-12 py-[10px] text-sm text-[#FBBF04] rounded-[10px] font-semibold border border-[#FBBF04]"
                onClick={() => setStep(3)}
              >
                Previous
              </button>

              <button
                className="px-12 py-[10px] text-sm text-[#151103] font-semibold rounded-[10px] bg-[#FBBF04]"
                onClick={() => setStep(4)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateStaking;
