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
import Marquee from "react-fast-marquee";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className="gap-x-[22px] flex pb-8 pl-10 max-sm:w-[100%] max-2xl:overflow-y-scroll max-sm:pt-7 max-sm:pl-0">
      <div className="min-w-[1500px] flex flex-row gap-x-[22px] items-center">
        <div className="mr-8">
          <IconBtn
            icon={Floki}
            text="FLOKI"
            BgClass="bg-[#FCBF07]"
            py="py-[12px]"
            TxSize="text-[16px]"
          />
        </div>
        <div className="min-w-[1200px] flex flex-row gap-x-[10px] px-3 py-2 rounded-full bg-[#1B1B1B]">
          <div className="flex flex-row justify-center items-center gap-3">
            <Image src={Hot} alt="hot" />
            <p className="text-[16px] text-[#fff] font-semibold">HOT</p>
          </div>
          <Marquee>
            <IconBtn
              icon={Icon_1}
              rightIcon={Elfin}
              text="ELFIN"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_2}
              rightIcon={NRG}
              text="NRG"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_3}
              rightIcon={Bonex}
              text="BONEX"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_4}
              rightIcon={Rdrs}
              text="RDRS"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_5}
              rightIcon={Bob}
              text="$PANDA"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_6}
              rightIcon={Bob}
              text="BOB"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_7}
              rightIcon={Pappapepe}
              text="PAPPAPEPE"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_1}
              rightIcon={Elfin}
              text="ELFIN"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_2}
              rightIcon={NRG}
              text="NRG"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_3}
              rightIcon={Bonex}
              text="BONEX"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_4}
              rightIcon={Rdrs}
              text="RDRS"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_5}
              rightIcon={Bob}
              text="$PANDA"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_6}
              rightIcon={Bob}
              text="BOB"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
            <IconBtn
              icon={Icon_7}
              rightIcon={Pappapepe}
              text="PAPPAPEPE"
              BgClass="bg-transparent"
              borderColor="border-transparent"
              py="py-[12px]"
              TxSize="text-[14px]"
            />
          </Marquee>
        </div>
        <IconBtn
          icon={DexTools}
          text="DEXTools"
          BgClass="bg-[#0A505F]"
          py="py-[12px]"
          TxSize="text-[14px]"
        />
      </div>
    </div>
  );
};

export default HeaderSection;
