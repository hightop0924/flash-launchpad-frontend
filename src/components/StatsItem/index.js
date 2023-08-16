import Image from "next/image";

import CircleArrows from "@/assets/icons/circle-arrows.svg";
import StatsGraph from "@/assets/icons/stats-graph.svg";

const StatsItem = ({
  text = "Total Project",
  percent = "17.74",
  value = "1,112",
  symbol = false,
}) => {
  return (
    <div className="flex flex-col w-[496px] rounded-[10px] border border-[#2C2C2C] bg-[#1B1B1B] p-[30px] gap-y-[35px]">
      <div className="flex justify-between items-center">
        <p className="text-white text-2xl">{text}</p>
        <div className="flex gap-x-3 items-center">
          <Image src={CircleArrows} alt="image" />
          <p className="text-[#FCBF07] text-[14px]">{percent} %</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-white text-[42px]">
          {value} {symbol && "%"}
        </p>
        <Image src={StatsGraph} alt="image" />
      </div>
    </div>
  );
};

export default StatsItem;
