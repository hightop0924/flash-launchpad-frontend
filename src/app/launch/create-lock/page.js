"use client";
import Image from "next/image";

import React, { useState } from "react";

//! import Image
import BurnImage from "@/assets/image/burn-image.png";

//! import Icon
import CopyIcon from "@/assets/icons/copy.svg";
import DatePickerIcon from "@/assets/icons/datepicker.svg";

//! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";
import Warning from "@/components/Alert/Warning";
import Input from "@/components/Form/Input";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExportedImage from "next-image-export-optimizer";

const FooterButton = () => {
  return (
    <div className="flex flex-row gap-6 justify-end max-sm:flex-row-reverse">
      <button className="px-8 py-4 border border-[#86888C] rounded-[8px] text-center text-[#86888C] text-[20px]">
        Reset
      </button>
      <button className="px-8 py-4 border border-[#FCBF07] bg-[#FCBF07] rounded-[8px] text-center text-[#16171B] text-[20px]">
        Lock
      </button>
    </div>
  );
};

const CreateLocks = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="relative min-h-[1500px]">
      <DefaultCard
        header="Create Your Locks"
        footer={true}
        footerWrapper={<FooterButton />}
      >
        <div>
          <Success>
            <p className="text-white text-[14px]">
              Verified <br />
              Flashlaunch is Audited By:
              <span className="text-[#FCBF07]"> Certik</span>
            </p>
          </Success>
          <div className="mt-11 flex flex-col gap-8">
            <Input placeholder="Token or LP Token Address" />
            <Input label="AMOUNT" placeholder="0" />
            {/* <Input label="LOCK UNTIL" placeholder="09/09/2023 03:57 pm" /> */}
            <div className="flex flex-col relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="MM/d/yyyy hh:mm aa"
                placeholderText="09/09/2023 03:57 pm"
                className="bg-[#141414] outline-none border w-[100%] border-[#2C2C2C] h-[59px] p-5 rounded-lg text-base text-[#86888C]"
              />
              <ExportedImage
                src={DatePickerIcon}
                alt="image"
                className="absolute top-4 right-5"
              />
            </div>

            <Warning>
              <>
                <div className="flex flex-row items-center gap-3 max-sm:flex-col max-sm:gap-2  max-sm:items-start">
                  <div className="flex flex-row items-center gap-3 max-sm:gap-2">
                    <p className="text-[14px] text-[#FFF7CD] max-sm:text-xs">
                      Exclude Flashlaunch`s lock address
                    </p>
                    <ExportedImage src={CopyIcon} alt="icon" />
                  </div>

                  <p className="text-[14px] text-[#FFF7CD] max-sm:text-xs">
                    from Fees, Max Transaction and Rewards.
                  </p>
                </div>
              </>
            </Warning>
          </div>
        </div>
      </DefaultCard>
      <ExportedImage
        src={BurnImage}
        alt="image"
        className="absolute -bottom-16 -right-10 max-sm:hidden"
      />
    </div>
  );
};

export default CreateLocks;
