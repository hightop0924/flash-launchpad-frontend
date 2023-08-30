"use client";

import Image from "next/image";

//! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";
import DefaultSelect from "@/components/Form/DefaultSelect";

//! import Image
import BurnImage from "@/assets/image/burn-image.png";

const CreateToken = () => {
  return (
    <div className="relative min-h-[1300px]">
      <DefaultCard header="Create Token">
        <div>
          <Success />
          <div className="flex flex-col pt-11 gap-8">
            <div>
              <DefaultSelect />
              <span className="text-[14px] text-[#FCBF07]">Fee: 0.1 BNB</span>
            </div>

            <div className="flex flex-row"></div>
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
