const Textarea = ({ label = "" }) => {
  return (
    <div className="flex flex-col gap-2 w-[100%]">
      {label && <p className="text-white text-[14px] uppercase"> {label} </p>}
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="border border-[#2C2C2C] rounded-[8px] bg-[#141414] outline-none"
      ></textarea>
    </div>
  );
};

export default Textarea;
