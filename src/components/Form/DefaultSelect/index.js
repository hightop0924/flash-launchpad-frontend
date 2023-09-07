const DefaultSelect = ({
  label = "Token Type",
  required = false,
  optons = [
    { text: "Text", value: "value" },
    { text: "Text1", value: "value1" },
  ],
}) => {
  return (
    <div className="flex flex-col gap-3 w-[100%]">
      {label && (
        <p className="text-white text-[14px]">
          {label}
          {required && <span className="text-[#FCBF07]">*</span>}
        </p>
      )}
      <select className="w-[100%] p-5 bg-[#141414] border border-[#2C2C2C] rounded-[8px] outline-none text-base text-[#86888C]">
        {optons.map((item, index) => (
          <option value={item.value} key={index}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefaultSelect;
