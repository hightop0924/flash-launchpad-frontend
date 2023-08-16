import HeaderNav from "@/components/HeaderNav";
import SearchInput from "@/components/Form/SearchInput";
import Select from "@/components/Form/Select";
import PresalesCard from "@/components/Card/PresalesCard";

const PresalPage = () => {
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
      <div>
        <PresalesCard />
      </div>
    </div>
  );
};

export default PresalPage;
