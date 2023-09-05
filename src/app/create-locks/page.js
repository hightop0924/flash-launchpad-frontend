"use client";
import Image from "next/image";

//! import Image
import BurnImage from "@/assets/image/burn-image.png";

//! import Icon
import CopyIcon from "@/assets/icons/copy.svg";

//! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";
import Warning from "@/components/Alert/Warning";
import Input from "@/components/Form/Input";

const FooterButton = () => {
  return (
    <div className="flex flex-row gap-6 justify-end">
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
  return (
    <div className="relative min-h-[1300px]">
      <DefaultCard
        header="Create Your Locks for Free"
        footer={true}
        footerWrapper={<FooterButton />}
      >
        <div>
          <Success>
            <p className="text-white text-[14px]">
              Verified <br />
              FlashPad is Audited By:
              <span className="text-[#FCBF07]"> Certik</span>
            </p>
          </Success>
          <div className="mt-11 flex flex-col gap-8">
            <Input placeholder="Token or LP Token Address" />
            <Input label="AMOUNT" placeholder="0" />
            <Input label="LOCK UNTIL" placeholder="09/09/2023 03:57 pm" />
            <Warning>
              <>
                <p className="text-[14px] text-[#FFF7CD]">
                  Exclude FlashPad`s lock address
                </p>
                <Image src={CopyIcon} alt="icon" />
                <p className="text-[14px] text-[#FFF7CD]">
                  from Fees, Max Transaction and Rewards.
                </p>
              </>
            </Warning>
          </div>
        </div>
      </DefaultCard>
      <Image
        src={BurnImage}
        alt="image"
        className="absolute -bottom-16 -right-10"
      />
    </div>
  );
};

export default CreateLocks;
