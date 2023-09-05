import Image from "next/image";

//! import icons
import WarningIcon from "@/assets/icons/warning.svg";

const Warning = ({ children, icon = true }) => {
  return (
    <div className="bg-[#7A4F01]/[0.06] px-6 py-5 flex flex-row gap-3 rounded-[8px] border items-center border-[#B78103]">
      {icon && <Image src={WarningIcon} alt="image" />}
      {children}
    </div>
  );
};

export default Warning;
