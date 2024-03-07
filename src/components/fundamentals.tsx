import { memo } from "react";
import TextWithInfoIcon from "./textWithInfoIcon";

type iProps = {
  price: number;
  marketCap: number;
  todayLow: number;
  todayHigh: number;
  marketCapRank: number;
  tradingVolume: number;

}

function Fundamentals(props:iProps) {
  const stockFundamentals = [
    {
      name: "Bitcoin Price",
      value: '$'+props.price,
    },
    {
      name: "24h Low / 24h High",
      value: '$'+props.todayLow + " / " +'$'+ props.todayHigh,
    },
    {
      name: "7d Low / 7d High",
      value: "$16,382.07 / $16,874.12",
    },
    {
      name: "Trading Volume",
      value: props.tradingVolume,
    },
    {
      name: "Market Cap Rank",
      value: "#"+props.marketCapRank,
    },
    {
      name: "Market Cap",
      value: '$'+props.marketCap,
    },
    {
      name: "Market Cap Dominance",
      value: "38.343%",
    },
    {
      name: "Volume / Market Cap",
      value: "0.0718",
    },
    {
      name: "All-Time High",
      value: {
        price: "$69,144.22",
        percentage: "-75.5%",
        percentageColor: "text-[#F7324C]",
        date: "Nov 10, 2021 (about 1 year)",
      },
    },
    {
      name: "All-Time Low",
      value: {
        price: "$67.81",
        percentage: "24729.1%",
        percentageColor: "text-[#14B079]",
        date: "Jul 06, 2013 (over 9 years)",
      },
    },
  ];

  return (
    <div style={{ color: "#44475B" }}>
    <TextWithInfoIcon text="Fundamentals" />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-rows-subgrid   md:gap-16 ">
        <div className="text-xs">
          {stockFundamentals.map((item, index) => {
            if (index < 5) {
              return <StockSpan key={index} title={item.name} value={item.value} />;
            }
          })}
        </div>
        <div className="text-xs">
          {stockFundamentals.map((item, index) => {
            if (index >= 5) {
              return <StockSpan key={index} title={item.name} value={item.value} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

type iStockSpan = {
  title: string;
  value:
    | string | number
    | {
        price: string;
        percentage: string;
        percentageColor: string;
        date: string;
      };
};

const StockSpan = memo(function StockSpan({ title, value }: iStockSpan) {
  return (
    <>
      <span className="flex items-center justify-between gap-20 flex-nowrap">
        <p className="my-4">{title}</p>
        {typeof value === "string" || typeof value === "number" ? (
          <p className="text-black font-medium shrink-0">{value as string}</p>
        ) : (
          <span className="text-black font-medium flex flex-col items-end">
            <span className="flex gap-1">{value.price + " "} <p className={value.percentageColor}>{value.percentage}</p></span>
            <p style={{fontSize:"0.60rem", color: "#44475B" }}>{value.date}</p>
          </span>
        )}
      </span>
      <hr className="" />
    </>
  );
});

export default memo(Fundamentals);
