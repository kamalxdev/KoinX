"use client";

import { memo, useState } from "react";

function Performance() {
  return (
    <div className="w-full">
      <h1 className="mb-5 font-semibold">Performance</h1>
      <div className="flex flex-col text-xs gap-5 text-[#44475B]" >
        <LowAndHigh low="46,930.22" high="47,000.22" lowTitle="Today's Low" highTitle="Todays High" currentPrice="46,930.22"/>
        <LowAndHigh low="46,930.22" high="47,000.22" lowTitle="52W Low" highTitle="52W High" currentPrice="46,930.22"/>
      </div>
    </div>
  );
}

type iLowAndHigh = {
  low: String;
  high: String;
  lowTitle: String;
  highTitle: String;
  currentPrice: String;
};

const LowAndHigh = memo(function LowAndHigh(prop: iLowAndHigh) {
  return (
    <span className="flex items-center md:gap-7">
      <span className="flex flex-col gap-2 shrink-0">
        <p>{prop.lowTitle}</p>
        <p className="" style={{ fontSize: "0.88rem" }}>
          {prop.low}
        </p>
      </span>
      <span
        className=" shrink w-full h-1 rounded-md bg-red-100 mx-10 col-span-8"
        style={{
          background:
            "linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%",
        }}
      >
        <p className="flex  flex-col items-center mt-0.5">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_656)">
              <rect
                x="5.65"
                y="3.13696"
                width="8.00001"
                height="8.00001"
                transform="rotate(45 5.65 3.13696)"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_656">
                <rect
                  width="12"
                  height="8"
                  fill="white"
                  transform="translate(0 0.796875)"
                />
              </clipPath>
            </defs>
          </svg>
          ${prop.currentPrice}
        </p>
      </span>
      <span className="flex flex-col gap-2 shrink-0">
        <p>{prop.highTitle}</p>
        <p style={{ fontSize: "0.88rem" }}>{prop.high}</p>
      </span>
    </span>
  );
});

export default memo(Performance);
