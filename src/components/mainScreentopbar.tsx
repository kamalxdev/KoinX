"use client";

import useFetchData from "@/hooks/fetchData";
import Image from "next/image";
import { memo } from "react";

function MainScreenTopBar() {
  const market =  useFetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn"); 
  const price = useFetchData("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn&include_24hr_change=true");
  if (market.loading || price.loading) return <p>Loading...</p>;
  if (market.error || price.error) return <p>Error fetching data</p>;
  return (
    <section className=" ">
      <span className="relative flex justify-start items-center">
        <Image src={market?.data && market.data[0]?.image} alt={market?.data && market.data[0]?.id} width={40} height={40} />
          <h1 className="font-semibold text-lg mx-2">{market?.data && market.data[0]?.name}</h1>
          <p className="text-symbol-clr text-xs">{market?.data && (market.data[0]?.symbol)?.toUpperCase()}</p>{" "}
        <span className="text-xs ml-7 text-white bg-rank-clr rounded-md p-2">
          Rank #1
        </span>
        </span>
      <div className="my-5">
        <span className="flex items-center">
          <p className="font-semibold text-2xl mr-10">${price.data && price.data?.bitcoin?.usd}</p>
          <p className="text-up-green flex items-center mr-3 text-sm gap-2">
            <svg
              width="9"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
            </svg>
            {price.data && (price.data?.bitcoin?.usd_24h_change).toPrecision(3)}%
          </p>
          <p className="text-xs" style={{ color: "#768396" }}>
            (24H)
          </p>
        </span>
        <p >₹{price.data && price.data?.bitcoin?.inr}</p>
      </div>
    </section>
  );
}


export default memo(MainScreenTopBar);