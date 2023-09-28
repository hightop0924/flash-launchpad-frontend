"use client";
import HeaderNav from "@/components/HeaderNav";
import StakingPoolCard from "@/components/Card/StakingPoolCard";
import Select from "@/components/Form/RoundedSelect";
import { useEffect, useState } from "react";
import NoDataIcon from "@/assets/icons/no-data.svg";
import ExportedImage from "next-image-export-optimizer";

const StakingPool = () => {
  const [active, setActive] = useState(2);

  const [stakingList, setStakingList] = useState(Array.from({ length: 8 }));

  useEffect(() => {
    if (active == 2) {
      setStakingList(Array.from({ length: 8 }));
    } else {
      setStakingList([]);
    }
  }, [active]);

  return (
    <div className="min-h-[1350px]">
      <HeaderNav
        navActive={active}
        setNavActive={setActive}
        navType={"staking"}
      />
      <div className="flex gap-3 justify-end mt-8">
        <Select label="Networks" />
        <Select label="Filter By" />
        <Select label="Sort By" />
      </div>
      {stakingList.length == 0 ? (
        <div className="mt-[50px] flex justify-center items-center">
          <div className="h-[285px] flex flex-col justify-center items-center gap-3">
            <ExportedImage src={NoDataIcon} alt="no data" />
            <p className="text-lg text-[#2F2F2F]">No Data</p>
          </div>
        </div>
      ) : (
        <div className="mt-[50px] grid grid-cols-4 max-sm:grid-cols-1 gap-[30px] justify-center items-center pb-5">
          {stakingList.map((item, index) => (
            <StakingPoolCard key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StakingPool;
