import Image from "next/image";

//! import icons
import SuccessIcon from "@/assets/icons/success.svg";

const AlertSuccess = () => {
  return (
    <div className="bg-[#0B5E0A] px-6 py-5 flex flex-row items-start gap-2 rounded-[8px]">
      <Image src={SuccessIcon} alt="icon" />
      <p className="text-white text-[14px]">
        All created tokens include an Audit. <br />
        Audits can be found <span className="text-[#FCBF07 ]">here</span>.
        Created tokens also get Audit badge on FlashPad presales automatically.
      </p>
    </div>
  );
};

export default AlertSuccess;
