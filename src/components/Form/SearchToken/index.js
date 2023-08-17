const SearchToken = () => {
  return (
    <div className="w-[100%] flex border border-[#2C2C2C] bg-[#141414] rounded-lg">
      <div className="w-[147px] bg-[#282828]">
        <select
          name=""
          id=""
          className="bg-[#282828] p-5 text-white text-base outline-none"
        >
          <option value="eth">Ethereum</option>
          <option value="bnb">Binance</option>
        </select>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search token address"
        className="outline-none border-none bg-[#141414] py-[22px] pl-[20px] text-[16px] text-[#86888C]"
      />
    </div>
  );
};

export default SearchToken;
