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

export default function HomePage() {
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
      <div className="pt-[127px] max-sm:pt-0">
        <p className="text-white text-[42px] text-center font-bold max-sm:text-2xl">
          Stats
        </p>
        <div className="mt-[60px] grid grid-cols-3 max-2xl:grid-cols-1 gap-[24px] justify-center items-center">
          <StatsCard />
          <StatsCard
            text="Total Generated Tokens"
            percent="17.74"
            value="3,190"
          />
          <StatsCard
            text="Project Raise Success Rate"
            percent="32.43"
            value="70.792%"
          />
        </div>
        <div className="grid grid-cols-4 max-2xl:grid-cols-1 gap-[24px] justify-center gap-x-7 mt-[56px] items-center">
          <ColorCard />
          <ColorCard
            title="Flash Wallet"
            text="Discover our non-custodial wallet, unique in the world"
            link="https://flash-wallet.com/"
            BgColor="linear-gradient(137deg, #784FFB 28.67%, #0096E9 100%)"
          />
          {/* <ColorCard
            title="Staking Pool"
            text="Explore the staking pools and enjoy passive rewards from multiple projects"
            link="/staking-pool"
            BgColor="linear-gradient(137deg, #784FFB 28.67%, #0096E9 100%)"
          /> */}
          <ColorCard
            title="Tokens"
            text="Create you own token with Audit included"
            link="/launch/create-token"
            BgColor="linear-gradient(128deg, #02BDA6 0%, #0691C9 100%)"
          />
          <ColorCard
            title="Airdrop"
            text="Free tool for airdrops"
            link="/airdrop"
            BgColor="linear-gradient(137deg, #F728EF 0%, #663FF5 100%)"
          />
          <ColorCard
            title="Create Presale"
            text="Create presale for you own project and enjoy all the benefits GemPad offers"
            link="/launch/launchpad"
            BgColor="linear-gradient(137deg, #49E313 0%, #005E36 100%)"
          />
          <ColorCard
            title="Flash Transfer"
            text="Create your own rewarding system"
            link="https://flash-transfer.com"
            BgColor="linear-gradient(152deg, rgba(249, 162, 37, 0.90) 0%, rgba(79, 65, 22, 0.90) 100%)"
          />
          <ColorCard
            title="Floki locker"
            text="Block your tokens or liquidity with Floki Lock directly on Flash pad."
            link="/launch/create-lock"
            BgColor="linear-gradient(137deg, #FC7B21 0%, #F4555C 100%)"
          />
          <ColorCard
            title="Flash Club"
            text="Join Flash Club by holding NFT"
            link="https://rarible.com/flashtechno/sale"
            BgColor="linear-gradient(137deg, #D4A918 0%, #F16806 100%)"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-[182px] max-sm:mt-[50px]">
          <p className="text-white text-[42px] text-center font-bold max-sm:text-2xl">
            Flash Ecosystem
          </p>
          <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-[60px]">
            {flash_ecosystem.map((item, index) => (
              <FlashCard text={item.text} title={item.title} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-[206px] pb-2 max-sm:mt-[50px]">
          <p className="text-white text-[42px] font-bold max-sm:text-2xl">
            Partners
          </p>
          <div className="grid grid-cols-5 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-[30px] mt-[56px]">
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
}
