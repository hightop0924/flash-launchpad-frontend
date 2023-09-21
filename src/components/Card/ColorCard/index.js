const ColorCard = ({
  title = "Presales",
  text = "Explores presales of any size and king",
  BgColor = "linear-gradient(137deg, #FCBF07 0%, #695416 65.10%, #676252 100%)",
}) => {
  return (
    <div
      className="flex flex-col gap-y-[14px] rounded-[10px] min-w-[335px] h-[143px] px-7 py-[30px]"
      style={{
        background: `${BgColor}`,
      }}
    >
      <p className="text-white text-[22px]">{title}</p>
      <p className="text-white text-[14px]">{text}</p>
    </div>
  );
};

export default ColorCard;
