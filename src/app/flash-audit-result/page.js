import Image from "next/image";

//! import image
import FlashAudit from "@/assets/image/flash-audit.png";
import EthereumLogoSmall from "@/assets/icons/ethereum-logo-small.svg";
import DextoolsLogoSmall from "@/assets/icons/dextools-logo-small.svg";
import Risky from "@/assets/icons/risky.svg";
import Attention from "@/assets/icons/attention.svg";

import SearchToken from "@/components/Form/SearchToken";

const FlashAuditResult = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-row justify-between">
        <Image src={FlashAudit} alt="image" className="w-[241px] h-[40px]" />

        <div className="w-[561px]">
          <SearchToken check={true} />
        </div>
      </div>
      <div className="flex flex-row bg-[#1B1B1B] items-center justify-between w-[1554px] h-[84px] mt-[29px]">
        <div className="flex flex-row justify-between items-center w-[851px]">
          <div className="flex flex-col ">
            <p className="text-white text-[18.88px] font-bold">Flash</p>
            <p className="text-white text-[14px]">Flash 3.0</p>
            <div className="flex flex-row mt-1 gap-2">
              <Image src={EthereumLogoSmall} alt="etherem" />
              <Image src={DextoolsLogoSmall} alt="etherem" />
            </div>
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
      </div>
    </div>
  );
};

export default FlashAuditResult;
