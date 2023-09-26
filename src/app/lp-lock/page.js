//! import icons
import LPLockIcon1 from "@/assets/icons/lp-lock-1.svg";
import LPLockIcon2 from "@/assets/icons/lp-lock-2.svg";
import LPLockIcon3 from "@/assets/icons/lp-lock-3.svg";
import ExportedImage from "next-image-export-optimizer";

//!
import Image from "next/image";

const LPLock = () => {
  return (
    <div className="min-h-[1500px]">
      <div className="flex flex-row gap-[30px]">
        <div className="p-6 bg-[#D9A400] rounded-2xl w-[100%] flex flex-row gap-6">
          <ExportedImage src={LPLockIcon1} alt="1" />
          <div className="flex flex-col text-white">
            <p className="text-[36px]">1429</p>
            <p className="text-[12px]">Total Locks</p>
          </div>
        </div>
        <div className="p-6 bg-[#D9A400] rounded-2xl w-[100%] flex flex-row gap-6">
          <ExportedImage src={LPLockIcon2} alt="1" />
          <div className="flex flex-col text-white">
            <p className="text-[36px]">$5,954,082</p>
            <p className="text-[12px]">Total Locked Token Value</p>
          </div>
        </div>

        <div className="p-6 bg-[#D9A400] rounded-2xl w-[100%] flex flex-row gap-6">
          <ExportedImage src={LPLockIcon3} alt="1" />
          <ExportedImage src={LPLockIcon1} alt="1" />
          <div className="flex flex-col text-white">
            <p className="text-[36px]">$3,213,141</p>
            <p className="text-[12px]">Total Locked Liquidity Value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LPLock;
