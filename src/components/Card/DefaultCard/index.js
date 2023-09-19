const DefaultCard = ({
  children,
  header = "Security Detection",
  footer = false,
  footerWrapper = "",
}) => {
  return (
    <div className="bg-[#1B1B1B] rounded-2xl">
      <div className="p-7 max-sm:p-4 border-b border-b-[#2C2C2C]">
        <p className="text-[24px] text-white font-bold">{header}</p>
      </div>
      <div className="p-7 max-sm:p-4">{children}</div>
      {footer && (
        <div className="border-t border-t-[#2C2C2C] p-7">{footerWrapper}</div>
      )}
    </div>
  );
};

export default DefaultCard;
