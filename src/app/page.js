import ColorCard from "@/components/Card/ColorCard";
import FlashCard from "@/components/Card/FlashCard";
import PartnerCard from "@/components/Card/PartnerCard";
import StatsCard from "@/components/Card/StatsCard";

import Binance from "@/assets/icons/binance-logo.svg";
import Certik from "@/assets/icons/certik-logo.svg";
import Synaps from "@/assets/icons/synaps-logo.svg";
import Dextools from "@/assets/icons/dextools-logo.svg";
import Floki from "@/assets/icons/floki-logo.svg";
import HeaderSection from "@/components/HeaderSection";

const HomePage = () => {
  const flash_ecosystem = [
    {
      title: "Flash Transfer",
      text: "The best launchpad for professional teams",
    },
    {
      title: "Flash Dex",
      text: "Launch a token sale with a few clicks.",
    },
    {
      title: "Flash Wallet",
      text: "Swap tokens and farming $PinkS.",
    },
    {
      title: "Flash Staking",
      text: "Locking liquidity on PinkSwap.",
    },
    {
      title: "Dead Wallet",
      text: "The first meme token on PinkMoon.",
    },
    {
      title: "Flash Pay",
      text: "The first meme token on PinkMoon.",
    },
    {
      title: "Flash Audit",
      text: "Crypto wallet, buy, store, exchange & earn.",
    },
    {
      title: "Flash Launch",
      text: "Crypto wallet, buy, store, exchange & earn.",
    },
  ];
  return (
    <div>
      <HeaderSection />
      <div className="pt-[127px]">
        <p className="text-white text-[42px] text-center font-bold">Stats</p>
        <div className="mt-[60px] flex justify-between gap-x-[30px]">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
        <div className="grid grid-cols-4 gap-y-[30px] justify-between gap-x-7 mt-[56px]">
          <ColorCard />
          <ColorCard
            title="Staking Pool"
            text="Explore the staking pools and enjoy passive rewards from multiple projects"
            BgColor="linear-gradient(137deg, #784FFB 28.67%, #0096E9 100%)"
          />
          <ColorCard
            title="Tokens"
            text="Create you own token with Audit included"
            BgColor="linear-gradient(128deg, #02BDA6 0%, #0691C9 100%)"
          />
          <ColorCard
            title="Airdrop"
            text="Free tool for airdrops "
            BgColor="linear-gradient(137deg, #F728EF 0%, #663FF5 100%)"
          />
          <ColorCard
            title="Create Presale"
            text="Create presale for you own project and enjoy all the benefits GemPad offers"
            BgColor="linear-gradient(137deg, #49E313 0%, #005E36 100%)"
          />
          <ColorCard
            title="Flash Transfer"
            text="Create your own rewarding system"
            BgColor="linear-gradient(152deg, rgba(249, 162, 37, 0.90) 0%, rgba(79, 65, 22, 0.90) 100%)"
          />
          <ColorCard
            title="Floki locker"
            text="Block your tokens or liquidity with Floki Lock directly on Flash pad."
            BgColor="linear-gradient(137deg, #FC7B21 0%, #F4555C 100%)"
          />
          <ColorCard
            title="Flash Club"
            text="Join GemPad’s Alpha club by holding 180,000 GEMS"
            BgColor="linear-gradient(137deg, #D4A918 0%, #F16806 100%)"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-[182px]">
          <p className="text-white text-[42px] text-center font-bold">
            Flash Ecosystem
          </p>
          <div className="grid grid-cols-4 gap-6 mt-[60px]">
            {flash_ecosystem.map((item, index) => (
              <FlashCard text={item.text} title={item.title} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-[206px]">
          <p className="text-white text-[42px] font-bold">Partners</p>
          <div className="flex gap-[30px] mt-[56px]">
            <PartnerCard icon={Binance} />
            <PartnerCard icon={Certik} />
            <PartnerCard icon={Synaps} />
            <PartnerCard icon={Dextools} />
            <PartnerCard icon={Floki} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
