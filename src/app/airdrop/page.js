"use client";

import Image from "next/image";

//! import components
import Input from "@/components/Form/Input";
import Textarea from "@/components/Form/Textarea";
import Warning from "@/components/Alert/Warning";

//! import Icon
import CopyIcon from "@/assets/icons/copy.svg";
import ExportedImage from "next-image-export-optimizer";

const MultiSender = () => {
  return (
    <div className="min-h-[1500px]">
      <div className="p-8 rounded-2xl bg-[#1B1B1B] flex flex-row justify-between relative">
        <div className="flex flex-col items-center  gap-2">
          <div className="w-[42px] h-[42px] bg-[#FCBF07] flex flex-row justify-center items-center rounded-full text-base">
            1
          </div>
          <p className="text-white text-base">Add Your Allocation</p>
          <p className="text-white/[0.45] text-[14px] text-center">
            Enter your token to be <br /> send with allocations
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-[42px] h-[42px] bg-[#86888C] flex flex-row justify-center items-center rounded-full text-base">
            2
          </div>
          <p className="text-white text-base">Confirmation</p>
          <p className="text-white/[0.45] text-[14px] text-center">
            Let review your <br />
            information
          </p>
        </div>

        <hr className="w-[76%] bg-[#2C2C2C] h-[2px] border-none absolute top-[53px] left-[12%]" />
      </div>
      <div className="mt-4 p-8 rounded-2xl bg-[#1B1B1B] flex flex-col gap-8">
        <div>
          <Input label="TOKEN ADDRESS" placeholder="0" />
          <p className="text-[#86888C] text-base mt-2">
            Flash Multi-sender allows you to send ERC20 token in batch by
            easiest way. You can enter token address to send specific token or
            leave it blank to send chain token such as BNB....
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Textarea label="Allocations*" />
          <div className="flex flex-row gap-5 items-center">
            <button className="px-8 py-3 border border-[#86888C] rounded-lg outline-none text-xl text-[#86888C]">
              Or Choose From CSV File
            </button>
            <p className="text-xl text-[#FCBF07] cursor-pointer">
              Sample CSV file
            </p>
          </div>
        </div>

        <Warning>
          <>
            <p className="text-[14px] text-[#FFF7CD]">
              Please exclude 0xB803b0E5E7457B135085E896FD7A3398b266cd43
            </p>
            <ExportedImage src={CopyIcon} alt="icon" />
            <p className="text-[14px] text-[#FFF7CD]">
              from fees, rewards, max tx amount to start sending tokens.
            </p>
          </>
        </Warning>

        <div className="flex justify-center items-center">
          <button className="bg-[#FBBF04] rounded-lg text-center text-[#000] min-w-[152px] p-3">
            <span className="text-[#000]"> Next </span>
          </button>
        </div>
      </div>

      {/* <p className="text-white text-base text-center mt-8">
        Disclaimer: PinkSale will never endorse or encourage that you invest in
        any of the projects listed and therefore, accept no liability for <br />
        any loss occasioned. It is the user(s) responsibility to do their own
        research and seek financial advice from a professional. More <br />
        information about (DYOR) can be found via{" "}
        <span className="text-[#FCBF07]">Flashlaunch.</span>
      </p> */}
    </div>
  );
};

export default MultiSender;
