//! import icons
import SwitchIcon from "@/assets/icons/switch.svg";
import SwitchActiveIcon from "@/assets/icons/switch-active.svg";

import Image from "next/image";

const SwitchButton = ({ onClick = "", check = false }) => {
  return (
    <div onClick={() => onClick(!check)} className="cursor-pointer">
      {check ? (
        <Image src={SwitchActiveIcon} alt="" />
      ) : (
        <Image src={SwitchIcon} alt="" />
      )}
    </div>
  );
};

export default SwitchButton;
