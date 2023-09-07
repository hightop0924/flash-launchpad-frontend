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

const FairLaunch = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-[1300px]">
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
          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-between">
              <p className="text-xs text-[#FBBF04]">(*) is required field.</p>
              <button className="py-[10px] px-[61px] bg-[#FBBF04] rounded-[10px] text-sm text-[#151103] font-semibold">
                Create Token
              </button>
            </div>

            <Input
              label="Token Address"
              required={true}
              placeholder="Token Address"
            />

            <div className="flex flex-col gap-5">
              <p className="text-sm text-[#FBBF04]">Pool Creation fee: 1 BNB</p>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Currency</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">BNB</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">USDT</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">USDC</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">DAI</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">FLOKI</p>
                  </div>
                  <p className="text-sm text-[#FBBF04]">
                    Users will pay with BNB for your token
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Fee options</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">
                      3.5% BNB raised only{" "}
                      <span className="text-[#FCBF07]">(Recommended)</span>
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">
                      1.5% BNB raised + 1.5% token sold
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Listing Options</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">Auto Listing</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-white">Affiliate Program</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">Disable Affiliate</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input type="radio" name="currency" />
                    <p className="text-sm text-[#BCBBB9]">Enable Affiliate</p>
                  </div>
                </div>
              </div>

              <Warning icon={false}>
                <p className="text-sm text-[#FFF7CD]">
                  Auto listing, after you finalize the pool your token will be
                  auto listed on DEX.
                </p>
              </Warning>
            </div>

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
            <p className="text-xs text-[#FBBF04]">(*) is required field.</p>
            <div className="flex flex-col gap-2">
              <Input
                label="Total selling amount"
                placeholder="100"
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">Whitelist</p>
              <div className="flex flex-row gap-4 text-sm text-white">
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name="whitelist"
                    id=""
                    checked
                    onChange={""}
                  />
                  <p>Disable</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <input type="radio" name="whitelist" id="" />
                  <p>Enable</p>
                </div>
              </div>
              <p className="text-xs text-[#FCBF07]">
                You can enable/disable whitelist anytime (If you activate the
                whitelist our members who use the floki whitelist function can
                access your whitelist)
              </p>
            </div>

            <div className="flex flex-col gap-2 w-[100%]">
              <Input label="SoftCap (BNB)" placeholder="0" required={true} />
              <div className="flex flex-row gap-2 items-center">
                <input type="checkbox" />
                <p className="text-sm text-[#BCBBB9]">
                  Setting max contribution?
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-2 w-[100%] items-center">
              <DefaultSelect
                required={true}
                label="Router"
                optons={[{ text: "---Select Router Exchange---", value: "1" }]}
              />

              <div className="relative w-[18px] h-[97px]">
                <Image
                  src={RefreshIcon}
                  alt="refresh"
                  className="absolute bottom-[24px] right-0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 w-[100%]">
                <Input label="liquidity (%)" placeholder="0" required={true} />
                <div className="flex flex-row gap-2 items-center">
                  <input type="checkbox" />
                  <p className="text-sm text-[#BCBBB9]">Enable Buyback?</p>
                </div>
              </div>
              <p className="text-xs text-[#FCBF07]">
                Enter the percentage of raised funds that should be allocated to
                Liquidity on (Min 51%, Max 100%) <br />
                If I spend 1 on how many tokens will I receive? Usually this
                amount is lower than presale rate to allow for a higher listing
                price on
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">
                Select start time & end time (UTC)
              </p>

              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-2 w-[100%]">
                  <Input label="Start time (UTC)" placeholder="0" />
                  <p className="text-xs text-[#FCBF07]">
                    The duration between start time and end time must be less
                    than 10080 minutes
                  </p>
                </div>

                <div className="flex flex-col gap-2 w-[100%]">
                  <Input label="End time (UTC)" placeholder="0" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-[100%]">
              <Input
                label="Liquidity lockup (days)"
                placeholder="0"
                required={true}
              />
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-right text-sm text-[#FCBF07]">
                Need 0 FLASH to create launchpad.
              </p>
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
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Logo URL"
                  required={true}
                  placeholder="Ex: https://..."
                  icon={LogoURLIcon}
                />
                <p className="text-xs text-[#FCBF07] mt-[6px]">
                  URL must end with a supported image extension png, jpg, jpeg
                  or gif. You can upload your image at
                  <br />
                  https://upload.flashlaunch.com/
                </p>
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Website"
                  required={true}
                  placeholder="Ex: https://..."
                  icon={WebsiteIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Facebook"
                  placeholder="Ex: https://facebook.com/..."
                  icon={FacebookIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Twitter"
                  placeholder="Ex: https://twitter.com/..."
                  icon={TwitterIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Github"
                  placeholder="Ex: https://github.com/..."
                  icon={GithubIcon}
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <Input
                  label="Telegram"
                  placeholder="Ex: https://t.me/..."
                  icon={TelegramIcon}
                />
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[100%]">
                <Input
                  label="Instagram"
                  placeholder="Ex: https://instagram.com/..."
                  icon={InstagramIcon}
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
            <div className="flex flex-col w-[100%]">
              <Input
                label="Reddit"
                placeholder="Ex: https://reddit.com/..."
                icon={RedditIcon}
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <Input
                label="Youtube Video"
                placeholder="Ex: https://youtube.com/watch?v="
                icon={YoutubeIcon}
              />
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
              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Total token</p>
                <p className="text-[#FCBF07]">100,290.7 FLASH</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Token name</p>
                <p>Flash 3.0</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Token symbol</p>
                <p>Flash</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Token decimals</p>
                <p>18</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Total selling amount</p>
                <p>1000 FLASH</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Softcap</p>
                <p>25</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Liquidity</p>
                <p>51%</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Start time</p>
                <p>2023-08-30T20:31 (UTC)</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>End time</p>
                <p>2023-09-14T20:31 (UTC)</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Liquidity lockup time</p>
                <p>365 days</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Website</p>
                <p className="text-[#FCBF07]">flash-technologies.org</p>
              </div>

              <div className="py-4 flex flex-row justify-between items-center text-base text-white border-b border-b-[#2C2C2C]">
                <p>Using Team Vesting?</p>
                <p>No</p>
              </div>
            </div>

            <div className="p-[17px] flex flex-row items-center gap-6 border border-[#262626] bg-[#141414] rounded-[6px] mt-[50px]">
              <Image src={WarningIcon} alt="Warning" />
              <p className="text-sm text-white">
                Please exclude Flash Factory address
                0x7461B2F388142a7584ac752e637B255Eead9bcPL from fees, rewards,
                max tx amount to start creating pools
              </p>
            </div>

            <div className="p-[17px] flex flex-row items-center gap-6 border border-[#262626] bg-[#141414] rounded-[6px] mt-[10px]">
              <p className="text-xs text-white">
                For tokens with burns, rebase or other special transfers please
                ensure that you have a way to whitelist multiple addresses or
                turn off the special transfer events (By setting fees to 0 for
                example for the duration of the presale)
              </p>
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

export default FairLaunch;
