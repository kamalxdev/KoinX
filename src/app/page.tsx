// "use Client"

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
export default function Home() {
  return (
    <section className="w-full grid grid-cols-[70%,30%] grid-rows-[a] ">
      <section className="ml-8 col-start-1 col-end-1">
        
        <Area classname=" ml-2 ">
          <MainScreenTopBar />
          <TradingViewWidget />
        </Area>
        <Area classname=" font-medium  flex text-xs justify-start gap-7 items-center">
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
          <Performance />
          <Fundamentals />
        </Area>
        <Area>
          <Sentiment />
          <AnalystEstimates />
        </Area>
        <Area>
          <AboutStock />
        </Area>
        <Area>
          <Tokenomics />
        </Area>
        <Area>
          <Team />
        </Area>
      </section>

      <section className=" w-full px-8 col-span-2 col-start-1 row-start-2">
        <Area>
          <StockSuggestion title="You May Also Like" />
        </Area>
        <Area>
          <StockSuggestion title="Trending Coins" />
        </Area>
      </section>
      <section className="realtive col-start-2 row-start-1 mr-6">
          <div className="relative p-2">
          <RightBar />

          </div>
      </section>
    </section>
  );
}
