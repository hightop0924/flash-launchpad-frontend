const DefaultCard = ({ children, header = "Security Detection" }) => {
  return (
    <div className="bg-[#1B1B1B] rounded-2xl">
      <div className="p-7 border-b border-b-[#2C2C2C]">
        <p className="text-[24px] text-white font-bold">{header}</p>
      </div>
      <div className="p-7">{children}</div>
    </div>
  );
};

export default DefaultCard;
