import HeaderNav from "@/components/HeaderNav";
import SearchInput from "@/components/Form/SearchInput";
import Select from "@/components/Form/Select";
import PresalesCard from "@/components/Card/PresalesCard";

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
      <HeaderNav />
      <div className="mt-6 flex justify-between">
        <SearchInput />
        <div className="flex gap-3">
          <Select label="Networks" />
          <Select label="Filter By" />
          <Select label="Sort By" />
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-4 gap-y-[30px]">
        {presalesList.map((item) => (
          <PresalesCard key={item.key} />
        ))}
      </div>
    </div>
  );
};

export default PresalPage;
