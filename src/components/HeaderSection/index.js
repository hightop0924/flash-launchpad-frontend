import IconBtn from "../Button/IconBtn";

//! import icons
import Floki from "@/assets/icons/floki.svg";
import Hot from "@/assets/icons/hot.svg";
import Elfin from "@/assets/icons/elfin.svg";
import NRG from "@/assets/icons/nrg.svg";
import Bonex from "@/assets/icons/bonex.svg";
import Rdrs from "@/assets/icons/rdrs.svg";
import Bob from "@/assets/icons/bob.svg";
import Pappapepe from "@/assets/icons/pappapepe.svg";
import DexTools from "@/assets/icons/dextools.svg";

import Icon_1 from "@/assets/icons/1.svg";
import Icon_2 from "@/assets/icons/2.svg";
import Icon_3 from "@/assets/icons/3.svg";
import Icon_4 from "@/assets/icons/4.svg";
import Icon_5 from "@/assets/icons/5.svg";
import Icon_6 from "@/assets/icons/6.svg";
import Icon_7 from "@/assets/icons/7.svg";

const HeaderSection = () => {
  return (
    <div className="gap-x-[22px] flex pb-8 pl-10">
      <div className="mr-8">
        <IconBtn
          icon={Floki}
          text="FLOKI"
          BgClass="bg-[#F79422E5]/[.9]"
          py="py-[12px]"
          TxSize="text-[16px]"
        />
      </div>

      <IconBtn
        icon={Hot}
        text="HOT"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_1}
        rightIcon={Elfin}
        text="ELFIN"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_2}
        rightIcon={NRG}
        text="NRG"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_3}
        rightIcon={Bonex}
        text="BONEX"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_4}
        rightIcon={Rdrs}
        text="RDRS"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_5}
        rightIcon={Bob}
        text="$PANDA"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_6}
        rightIcon={Bob}
        text="BOB"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={Icon_7}
        rightIcon={Pappapepe}
        text="PAPPAPEPE"
        BgClass="bg-[#141414]"
        borderColor="border-[#2C2C2C]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
      <IconBtn
        icon={DexTools}
        text="DEXTools"
        BgClass="bg-[#0A505F]"
        py="py-[12px]"
        TxSize="text-[14px]"
      />
    </div>
  );
};

export default HeaderSection;
