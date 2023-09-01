const Input = ({ label = "", value = "", onChange = "", placeholder = "" }) => {
  return (
    <div className="flex flex-col gap-2 w-[100%]">
      {label && <p className="text-white text-[14px] uppercase"> {label} </p>}
      <input
        type="text"
        placeholder={placeholder}
        className="w-[100%] h-[59px] outline-none border border-[#2C2C2C] bg-[#141414] p-5 rounded-lg text-[#86888C] text-base"
      />
    </div>
  );
};

export default Input;
