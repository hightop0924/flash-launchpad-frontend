import Image from "next/image";

import Search from "@/assets/icons/search.svg";

const SearchInput = () => {
  return (
    <div className="relative w-[300px]">
      <input
        type="text"
        className="w-[100%] h-[44px] pl-5 py-3 pr-11 rounded-[26px] border border-[#2C2C2C] bg-[#141414] text-[#86888C] text-[16px] outline-none"
      />
      <Image src={Search} alt="image" className="absolute top-3 right-5" />
    </div>
  );
};

export default SearchInput;
