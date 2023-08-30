"use client";

import Image from "next/image";

//! import components
import DefaultCard from "@/components/Card/DefaultCard";
import Success from "@/components/Alert/Success";

//! import Image
import BurnImage from "@/assets/image/burn-image.png";

const CreateToken = () => {
  return (
    <div className="relative min-h-[1300px]">
      <DefaultCard header="Create Token">
        <div>
          <Success />
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
