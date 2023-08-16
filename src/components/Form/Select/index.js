const Select = ({
  label = "Networks",
  optons = [
    { text: "Text", value: "value" },
    { text: "Text1", value: "value1" },
  ],
}) => {
  return (
    <div className="relative">
      <div className="px-1 absolute left-[25px] -top-2 text-[#86888C] text-[11px] bg-[#141414]">
        {label}
      </div>
      <div className="w-[162px] h-[44px] pr-3 rounded-[26px] border border-[#2C2C2C]">
        <select className="w-[140px] pl-[25px] py-[10px] pr-3 rounded-[26px] bg-[#141414] outline-none text-white text-[16px]">
          {optons.map((item, index) => (
            <option value={item.value} key={index}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;