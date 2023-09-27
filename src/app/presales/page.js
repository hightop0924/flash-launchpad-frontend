import HeaderNav from "@/components/HeaderNav";
import SearchInput from "@/components/Form/SearchInput";
import Select from "@/components/Form/RoundedSelect";
import PresalesCard from "@/components/Card/PresalesCard";
import HeaderSection from "@/components/HeaderSection";

const PresalPage = () => {
  const presalesList = [
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
  ];
  return (
    <div>
      <HeaderSection />
      <HeaderNav navType={"presale"} />
      <div className="mt-6 flex flex-row max-sm:flex-col justify-between max-sm:gap-5">
        <div className="w-[100%]">
          <SearchInput />
        </div>

        <div className="flex gap-3">
          <Select label="Networks" />
          <Select label="Filter By" />
          <Select label="Sort By" />
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-4 max-sm:grid-cols-1 gap-[30px] max-sm:pb-4">
        {presalesList.map((item) => (
          <PresalesCard key={item.key} />
        ))}
      </div>
    </div>
  );
};

export default PresalPage;
