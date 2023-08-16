import StatsItem from "@/components/StatsItem";

const HomePage = () => {
  return (
    <div className="pt-[127px] px-10 pb-16">
      <p className="text-white text-[42px] text-center">Stats</p>
      <div className="flex justify-between gap-x-[30px]">
        <StatsItem />
        <StatsItem />
        <StatsItem />
      </div>
    </div>
  );
};

export default HomePage;
