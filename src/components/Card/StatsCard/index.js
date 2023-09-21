import Image from "next/image";

import CircleArrows from "@/assets/icons/circle-arrows.svg";
import StatsGraph from "@/assets/icons/stats-graph.svg";

const StatsCard = ({
  text = "Total Project",
  percent = "17.74",
  value = "1,112",
  symbol = false,
}) => {
  return (
    <div className="flex flex-col min-w-[335px] rounded-[10px] border border-[#2C2C2C] bg-[#1B1B1B] p-[30px] gap-y-[35px]">
      <div className="flex justify-between items-center">
        <p className="text-white text-2xl max-sm:text-sm">{text}</p>
        <div className="flex gap-x-3 items-center">
          <Image
            src={CircleArrows}
            alt="image"
            className="max-sm:w-[16px] max-sm:h-[16px]"
          />
          <p className="text-[#FCBF07] text-[14px] max-sm:text-xs">
            {percent} %
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-white text-[42px] max-sm:text-[28px]">
          {value} {symbol && "%"}
        </p>
        <Image
          src={StatsGraph}
          alt="image"
          className="max-sm:w-[127px] max-sm:h-[34px]"
        />
      </div>
    </div>
  );
};

export default StatsCard;
