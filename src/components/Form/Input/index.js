const Input = ({ label = "", value = "", onChange = "" }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-white text-[14px] uppercase"> {label} </p>}
      <input
        type="text"
        className="w-[100%] outline-none border border-[#2C2C2C] bg-[#141414] p-5 rounded-lg text-[#86888C] text-base"
      />
    </div>
  );
};

export default Input;
