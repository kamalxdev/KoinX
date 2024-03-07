"use client";

import MainScreenTopBar from "@/components/mainScreentopbar";
import TradingViewWidget from "@/components/tradingViewWidget";
import Link from "next/link";
import Performance from "@/components/performance";
import Fundamentals from "@/components/fundamentals";
import Sentiment from "@/components/sentiment";
import AnalystEstimates from "@/components/analystEstimates";
import AboutStock from "@/components/aboutStock";
import Tokenomics from "@/components/tokenomics";
import Team from "@/components/team";
import Area from "@/components/area";
import StockSuggestion from "@/components/stockSuggestion";
import RightBar from "@/components/rightBar";
import Naviagtion from "@/components/naviagtion";
import { memo } from "react";
import useFetchData from "@/hooks/fetchData";

const stockLinks = [
  {
    title: "Overview",
    link: "/",
    selected: true,
  },
  {
    title: "Fundamentals",
    link: "/",
    selected: false,
  },
  {
    title: "News Insights",
    link: "/",
    selected: false,
  },
  {
    title: "Sentiments",
    link: "/",
    selected: false,
  },
  {
    title: "Team",
    link: "/",
    selected: false,
  },
  {
    title: "Technicals",
    link: "/",
    selected: false,
  },
  {
    title: "Tokenomics",
    link: "/",
    selected: false,
  },
];
function Coin({ params }: { params: { coin: string } }) {
  const coin = params.coin;

  const market = useFetchData(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn`
  );
  const price = useFetchData(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr,usd&x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn&include_24hr_change=true`
  );
  const trending = useFetchData(
    `https://api.coingecko.com/api/v3/search/trending?x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn`
  );
  const card = trending.data?.coins.map((coin: any) => {
    return {
      symbol: coin?.item?.symbol,
      changePercentage: coin?.item?.data.price_change_percentage_24h.usd,
      price: coin?.item?.data.price,
      sparkline: coin?.item?.data.sparkline,
      image: coin?.item?.small,
      name: coin?.item?.name,
    };
  });

  if (market.loading || price.loading) return <p>Loading...</p>;
  //   if (market.error || price.error) return <p> Try after 1 minute</p>;
  return (
    <>
      <Naviagtion coin={market?.data && market.data[0]?.name} />
      <section className="w-full grid md:grid-cols-[70%,30%] md:grid-rows-[auto] grid-cols-1 grid-rows-[auto,auto,auto] auto-rows-fr">
        <section className="md:ml-8 col-start-1 col-end-1">
          <Area classname=" ml-2 ">
            <MainScreenTopBar
              image={market?.data[0]?.image}
              name={market?.data[0]?.name}
              symbol={market?.data[0]?.symbol}
              usd={price?.data[coin]?.usd}
              inr={price?.data[coin]?.inr}
              usd_24h_change={price?.data[coin]?.usd_24h_change}
              market_cap_rank={market?.data[0]?.market_cap_rank}
            />
            {market.data[0]?.symbol && <TradingViewWidget />}
          </Area>
          <Area classname="w-full overflow-scroll no-scrollbar font-medium  flex text-xs justify-start gap-7 items-center">
            {stockLinks.map((link, index) => {
                return (
                  <Link
                    href={link.link}
                    className={
                      link.selected
                        ? "underline underline-offset-8 decoration-2"
                        : ""
                    }
                    key={index}
                    style={{ color: link.selected ? "#0141CF" : "#3E424A" }}
                  >
                    {link.title}{" "}
                  </Link>
                );
            })}
          </Area>
          <Area classname="w-full  flex flex-col gap-11">
            <Performance
              todayLow={market?.data[0]?.low_24h}
              todayHigh={market?.data[0]?.high_24h}
              currentPrice={price?.data[coin]?.usd}
            />
            <Fundamentals
              todayLow={market?.data[0]?.low_24h}
              todayHigh={market?.data[0]?.high_24h}
              price={price?.data[coin]?.usd}
              marketCap={market?.data[0]?.market_cap}
              marketCapRank={market?.data[0]?.market_cap_rank}
              tradingVolume={market?.data[0]?.total_volume}
            />
          </Area>
          <Area>
            <Sentiment />
            <AnalystEstimates />
          </Area>
          <Area>
            <AboutStock />
          </Area>
          <Area classname="hidden md:block lg:block">
            <Tokenomics />
          </Area>
          <Area>
            <Team />
          </Area>
        </section>

        <section className="w-full h-fit md:px-8 md:col-span-2 md:col-start-1 md:row-start-2">
          <Area>
            <StockSuggestion title="You May Also Like" cards={card} />
          </Area>
          <Area>
            <StockSuggestion title="Trending Coins" cards={card} />
          </Area>
        </section>
        <section className="relative w-full md:col-start-2 md:row-start-1 mr-10">
          <div className="relative p-2 flex flex-col justify-center">
            <RightBar cards={card} />
          </div>
        </section>
      </section>
    </>
  );
}

export default memo(Coin);
