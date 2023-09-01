"use client";

import Image from "next/image";

//! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";
import DefaultSelect from "@/components/Form/DefaultSelect";
import Input from "@/components/Form/Input";

//! import Image
import BurnImage from "@/assets/image/burn-image.png";

const FooterButton = () => {
  return (
    <div className="flex flex-row gap-6 justify-end">
      <button className="px-8 py-4 border border-[#86888C] rounded-[8px] text-center text-[#86888C] text-[20px]">
        Reset
      </button>
      <button className="px-8 py-4 border border-[#FCBF07] bg-[#FCBF07] rounded-[8px] text-center text-[#16171B] text-[20px]">
        Create Token
      </button>
    </div>
  );
};

const CreateToken = () => {
  return (
    <div className="relative min-h-[1300px]">
      <DefaultCard
        header="Create Token"
        footer={true}
        footerWrapper={<FooterButton />}
      >
        <div>
          <Success />
          <div className="flex flex-col pt-11 gap-8">
            <div>
              <DefaultSelect />
              <span className="text-[14px] text-[#FCBF07]">Fee: 0.1 BNB</span>
            </div>

            <div className="flex flex-row gap-8">
              <Input label="token name" placeholder="Ex: Ethereum" />
              <Input label="Token Symbol" placeholder="Ex: ETH" />
            </div>

            <div className="flex flex-row gap-8">
              <Input label="Token Decimals" placeholder="18" />
              <Input label="Total Supply" placeholder="Ex: 1000000000" />
            </div>
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

export default CreateToken;
