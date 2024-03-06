import { memo } from "react";

const stockFundamentals = [
  {
    name: "Bitcoin Price",
    value: "$85,456.36",
  },
  {
    name: "24h Low / 24h High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    name: "7d Low / 7d High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    name: "Trading Volume",
    value: "$23,249,202,782",
  },
  {
    name: "Market Cap Rank",
    value: "#1",
  },
  {
    name: "Market Cap",
    value: "$323,507,290,047",
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
      percentageColor: "red",
      date: "Nov 10, 2021 (about 1 year)",
    },
  },
  {
    name: "All-Time Low",
    value: {
      price: "$67.81",
      percentage: "24729.1%",
      percentageColor: "green",
      date: "Jul 06, 2013 (over 9 years)",
    },
  },
];

function Fundamentals() {
  return (
    <div style={{ color: "#44475B" }}>
      <span className="flex items-center">
        <h1 className="mb-5 font-semibold text-sm">Fundamentals</h1>
        <svg
          width="18"
          height="20"
          viewBox="0 0 27 10"
          className="-mt-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_663)">
            <path
              d="M16.04 2.46362C11.44 2.46362 7.70667 6.19696 7.70667 10.797C7.70667 15.397 11.44 19.1303 16.04 19.1303C20.64 19.1303 24.3733 15.397 24.3733 10.797C24.3733 6.19696 20.64 2.46362 16.04 2.46362ZM16.8733 14.9636H15.2067V9.96362H16.8733V14.9636ZM16.8733 8.29696H15.2067V6.63029H16.8733V8.29696Z"
              fill="#ABB9BF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_663">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(6.03998 0.796875)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      <div className="flex gap-16">
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
    | string
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
      <span className="flex items-center justify-between gap-16">
        <p className="my-4">{title}</p>
        {typeof value === "string" ? (
          <p className="text-black font-medium">{value as string}</p>
        ) : (
          <p className="text-black font-medium flex flex-col items-end">
            <p className="flex gap-1">{value.price + " "} <p className={`text-${value.percentageColor}-500`}>{value.percentage}</p></p>
            <p style={{fontSize:"0.60rem", color: "#44475B" }}>{value.date}</p>
          </p>
        )}
      </span>
      <hr className="" />
    </>
  );
});

export default memo(Fundamentals);
