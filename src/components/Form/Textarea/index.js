const Textarea = ({ label = "" }) => {
  return (
    <div className="flex flex-col gap-2 w-[100%]">
      {label && <p className="text-white text-[14px] uppercase"> {label} </p>}
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="text-white border border-[#2C2C2C] rounded-[8px] bg-[#141414] outline-none p-5"
        placeholder={`Insert allocation: separate with breaks line. By format: address, amount or address amount
Ex:
0X0000000000000000000000000000000001000 13.45
0X0000000000000000000000000000000001000 1.049
0X0000000000000000000000000000000001000 1`}
      ></textarea>
    </div>
  );
};

export default Textarea;
