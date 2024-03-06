// "use Client"

import MainScreenTopBar from "@/components/mainScreentopbar";
import TradingViewWidget from "@/components/tradingViewWidget";
import Link from "next/link";
import Performance from "@/components/performance";
import Fundamentals from "@/components/fundamentals";
import Sentiment from "@/components/sentiment";
import AnalystEstimates from "@/components/analystEstimates";


const stocLinks = [
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
    <section className="w-8/12 ml-8">
      <div className="w-3/12  my-3 text-xs text-light-grey/70 flex items-center justify-evenly">
        <p>Cryptocurrencies</p>
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_500)">
            <path
              d="M5.41353 5.9528C5.43306 5.88118 5.42004 5.7998 5.37446 5.70866C5.3354 5.63704 5.28006 5.56217 5.20845 5.48405L1.21431 1.49967C1.11014 1.39551 0.986442 1.34342 0.843213 1.34342C0.699984 1.34342 0.577913 1.39551 0.477002 1.49967C0.37609 1.60384 0.325635 1.72754 0.325635 1.87077C0.325635 2.014 0.374463 2.1377 0.472119 2.24186L4.28071 5.94303L0.472119 9.65397C0.380973 9.73861 0.32889 9.84277 0.315869 9.96647C0.302848 10.0902 0.330518 10.2057 0.398877 10.3132C0.467236 10.4206 0.563265 10.4906 0.686963 10.5231C0.810661 10.5557 0.927848 10.5492 1.03853 10.5036C1.10363 10.4775 1.16222 10.4385 1.21431 10.3864L5.20845 6.40202C5.28006 6.32389 5.33215 6.25553 5.3647 6.19694C5.41027 6.10579 5.42655 6.02441 5.41353 5.9528ZM10.101 5.48405L6.10688 1.49967C6.00272 1.39551 5.87902 1.34342 5.73579 1.34342C5.59256 1.34342 5.47049 1.39551 5.36958 1.49967C5.26867 1.60384 5.21821 1.72754 5.21821 1.87077C5.21821 2.014 5.26704 2.1377 5.3647 2.24186L9.17329 5.9528L5.3647 9.64421C5.27355 9.73535 5.22147 9.84277 5.20845 9.96647C5.19543 10.0902 5.22472 10.2041 5.29634 10.3083C5.36795 10.4124 5.46398 10.4824 5.58442 10.5182C5.70487 10.554 5.82043 10.5492 5.9311 10.5036C5.99621 10.4775 6.05155 10.4385 6.09712 10.3864L10.101 6.41178C10.1726 6.32064 10.2247 6.24902 10.2573 6.19694C10.3028 6.1123 10.3191 6.03092 10.3061 5.9528C10.3387 5.81608 10.2703 5.65983 10.101 5.48405Z"
              fill="#3E5765"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_500">
              <rect
                width="10"
                height="10.5"
                fill="white"
                transform="matrix(1 0 0 -1 0.312744 11.1931)"
              />
            </clipPath>
          </defs>
        </svg>

        <p className="text-dark-grey">Bitcoin </p>
      </div>
      <div className="relative  border-red-500 ml-2  p-5  ">
        <MainScreenTopBar />
        <TradingViewWidget />
      </div>
      <div className="relative font-medium  flex p-5 text-xs justify-start gap-7 items-center">
        {stocLinks.map((link, index) => {
          return (
            <Link
              href={link.link}
              className={link.selected?"underline underline-offset-8 decoration-2":"" }
              key={index}
              style={{ color: link.selected ? "#0141CF" : "#3E424A" }}
            >
              {link.title}{" "}
            </Link>
          );
        })}
      </div>
      <div className="relative w-full border p-5 flex flex-col gap-11 ">
        <Performance />
        <Fundamentals />
      </div>
      <div className="relative  p-5">
        <Sentiment />
        <AnalystEstimates />
      </div>
    </section>
  );
}
