"use client";

import HeaderNav from "@/components/HeaderNav";
import SearchInput from "@/components/Form/SearchInput";
import Select from "@/components/Form/RoundedSelect";
import PresalesCard from "@/components/Card/PresalesCard";
import HeaderSection from "@/components/HeaderSection";
import NoDataIcon from "@/assets/icons/no-data.svg";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";

const PresalPage = () => {
  const [presalesList, setPresaleList] = useState([
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
    {
      key: 4,
    },
    {
      key: 5,
    },
    {
      key: 6,
    },
    {
      key: 7,
    },
    {
      key: 8,
    },
  ]);

  const [active, setActive] = useState(2);

  useEffect(() => {
    if (active == 2) {
      setPresaleList([
        {
          key: 1,
        },
        {
          key: 2,
        },
        {
          key: 3,
        },
        {
          key: 4,
        },
        {
          key: 5,
        },
        {
          key: 6,
        },
        {
          key: 7,
        },
        {
          key: 8,
        },
      ]);
    } else {
      setPresaleList([]);
    }
  }, [active]);

  return (
    <div>
      <HeaderSection />
      <HeaderNav
        navActive={active}
        setNavActive={setActive}
        navType={"presale"}
      />
      <div className="mt-6 flex flex-row max-sm:flex-col justify-between max-sm:gap-5">
        <div className="w-[100%]">
          <SearchInput />
        </div>

        <div className="flex gap-3">
          <Select label="Networks" />
          <Select
            label="Filter By"
            optons={[
              { text: "Launchpad", value: "launchpad" },
              { text: "Fair Launch", value: "fairlaunch" },
            ]}
          />
          <Select
            label="Sort By"
            optons={[
              { text: "No Filter", value: "nofilter" },
              { text: "Hard Cap", value: "hardcap" },
              { text: "Soft Cap", value: "softcap" },
              { text: "LP percent", value: "lp_percent" },
              { text: "Start time", value: "start_time" },
              { text: "End time", value: "end_time" },
            ]}
          />
        </div>
      </div>
      {presalesList.length == 0 ? (
        <div className="mt-[50px] flex justify-center items-center">
          <div className="h-[285px] flex flex-col justify-center items-center gap-3">
            <ExportedImage src={NoDataIcon} alt="no data" />
            <p className="text-lg text-[#2F2F2F]">No Data</p>
          </div>
        </div>
      ) : (
        <div className="mt-[50px] grid grid-cols-4 max-sm:grid-cols-1 gap-[30px] max-sm:pb-4">
          {presalesList.length > 0 &&
            presalesList.map((item) => <PresalesCard key={item.key} />)}
        </div>
      )}
    </div>
  );
};

export default PresalPage;
