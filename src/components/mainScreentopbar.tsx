"use client";

import useFetchData from "@/hooks/fetchData";
import Image from "next/image";
import { memo } from "react";


type iProps = {
  image: string;
  name: string;
  symbol: string;
  usd: number;
  usd_24h_change: number;
  inr: number;
  market_cap_rank: number;
}


function MainScreenTopBar(props: iProps) {
  
  return (
    <section className=" ">
      <span className="relative flex justify-start items-center">
        <Image src={props.image} alt={props.name} width={40} height={40} />
          <h1 className="font-semibold text-lg mx-2">{props.name}</h1>
          <p className="text-symbol-clr text-xs">{props.symbol?.toUpperCase()}</p>{" "}
        <span className="text-xs ml-7 text-white bg-rank-clr rounded-md p-2">
          Rank #{props.market_cap_rank}
        </span>
        </span>
      <div className="my-5">
        <span className="flex items-center">
          <p className="font-semibold text-2xl mr-10">${props.usd}</p>
          <p className={` flex items-center mr-3 text-sm gap-2  p-1 rounded-md ${props.usd_24h_change >= 0 ? "text-[#14B079] bg-[#EBF9F4]" : "text-[#F7324C] bg-[#EE68551A]"}`}>
            <svg
            className={props.usd_24h_change >= 0 ? "" : "rotate-180"}
              width="9"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0L11 8H0L5.5 0Z" fill={props.usd_24h_change >= 0 ?  "#14B079":"#F7324C" } />
            </svg>
            {(props.usd_24h_change)?.toPrecision(3)}%
          </p>
          <p className="text-xs" style={{ color: "#768396" }}>
            (24H)
          </p>
        </span>
        <p >₹{props.inr}</p>
      </div>
    </section>
  );
}


export default memo(MainScreenTopBar);