import Image from "next/image";

//! import image
import FlashAudit from "@/assets/image/flash-audit.png";
import SearchToken from "@/components/Form/SearchToken";

import EthereumLogoSmall from "@/assets/icons/ethereum-logo-small.svg";
import DextoolsLogoSmall from "@/assets/icons/dextools-logo-small.svg";

const FlashAuditResult = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-row justify-between">
        <Image src={FlashAudit} alt="image" className="w-[241px] h-[40px]" />

        <div className="w-[561px]">
          <SearchToken check={true} />
        </div>
      </div>
      <div className="flex flex-row bg-[#1B1B1B] items-center justify-center w-[1554px] h-[84px] mt-[29px]">
        <div className="flex flex-col">
          <p className="text-white text-[18.88px] font-bold">Flash</p>
          <p>Flash 3.0</p>
          <div className="flex flex-row">
            <Image src={EthereumLogoSmall} alt="etherem" />
            <Image src={DextoolsLogoSmall} alt="etherem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashAuditResult;
