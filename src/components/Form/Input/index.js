const Input = ({
  label = "",
  value = "",
  onChange = "",
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2 w-[100%]">
      {label && (
        <p className="text-white text-[14px]">
          {label}
          {required && <span className="text-[#FCBF07]">*</span>}
        </p>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="w-[100%] h-[59px] outline-none border border-[#2C2C2C] bg-[#141414] p-5 rounded-lg text-[#86888C] text-base"
      />
    </div>
  );
};

export default Input;
