"use client";

import axios from "axios";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

function MainScreenTopBar() {
  const [bitcoin, setBitcoin] = useState({} as any);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn"
      )
      .then((response) => {
        const { data } = response;
        setBitcoin((prev: any) => ({ ...prev, market: data[0] }));
      })
      .catch((error) => console.log(error));
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&x-cg-demo-api-key=CG-vZfVMwsnwxcFsiXyQCsWV4Nn&include_24hr_change=true"
    //   )
    //   .then((response) => {
    //     const { data } = response;
    //     setBitcoin((prev:any) => ({ ...prev, Change: data["bitcoin"] }));
    //   })
    //   .catch((error) => console.log(error));
  }, []);
  console.log(bitcoin);

  return (
    <section className=" ">
      <div className="relative flex justify-start items-center">
        <span className="relative flex justify-start items-center">
          <h1 className="font-semibold text-lg mx-2">Bitcoin</h1>
          <p className="text-symbol-clr text-xs">BTC</p>{" "}
        </span>
        <span className="text-xs ml-7 text-white bg-rank-clr rounded-md p-2">
          Rank #1
        </span>
      </div>
      <div className="my-5">
        <span className="flex items-center">
          <p className="font-semibold text-2xl mr-10">$46,953.04</p>
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
            2.51%
          </p>
          <p className="text-xs" style={{ color: "#768396" }}>
            (24H)
          </p>
        </span>
        <p >₹39,42,343</p>
      </div>
    </section>
  );
}


export default memo(MainScreenTopBar);