const Badge = ({
  text = "Audit",
  BgClass = "bg-[#5ABAFF29]/[.16]",
  TxColor = "text-[#5ABAFF]",
}) => {
  return (
    <div
      className={`px-[10px] py-[5px] rounded-[40px] flex justify-center items-center ${BgClass} ${TxColor} text-[12px] font-semibold`}
    >
      {text}
    </div>
  );
};

export default Badge;
