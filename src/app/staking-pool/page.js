"use client";
import HeaderNav from "@/components/HeaderNav";
import StakingPoolCard from "@/components/Card/StakingPoolCard";
import Select from "@/components/Form/RoundedSelect";

const StakingPool = () => {
  return (
    <div className="min-h-[1350px]">
      <HeaderNav />
      <div className="flex gap-3 justify-end mt-8">
        <Select label="Networks" />
        <Select label="Filter By" />
        <Select label="Sort By" />
      </div>
      <div className="mt-[50px] grid grid-cols-4 max-sm:grid-cols-1 gap-[30px] justify-center items-center pb-5">
        {Array.from({ length: 8 }).map((item, index) => (
          <StakingPoolCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default StakingPool;
