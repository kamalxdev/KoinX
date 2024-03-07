"use client";

import Image from "next/image";
import { memo, useRef, useState } from "react";

function StockSuggestion({ title,cards }: { title: String,cards:Array<any> }) {
  const caraousel = useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  function handleLeftCarousel() {
    if (caraousel.current) {
      caraousel.current.scrollLeft -= 320;
      setIsLeftDisabled(caraousel?.current?.scrollLeft <= 0);
      setIsRightDisabled(
        caraousel?.current?.scrollLeft >=
          caraousel?.current?.scrollWidth - caraousel?.current?.clientWidth - 1
      );
    }
  }
  function handleRightCarousel() {
    if (caraousel.current) {
      caraousel.current.scrollLeft += 320;
      setIsLeftDisabled(caraousel?.current?.scrollLeft <= 0);
      setIsRightDisabled(
        caraousel?.current?.scrollLeft >=
          caraousel?.current?.scrollWidth - caraousel?.current?.clientWidth - 1
      );
    }
  }

  return (
    <>
      <h1 className="mb-5 font-semibold">{title}</h1>
      <div className=" w-full flex items-center">
      <button
            type="button"
            aria-label="previous button"
            disabled={isLeftDisabled}
            onClick={handleLeftCarousel}
            className=" h-full w-12 flex justify-center items-center disabled:cursor-default"
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white flex justify-center items-center rounded-full text-xl md:text-3xl hover:bg-slate-100">
              <svg
                className="rotate-180"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                  fill="#757779"
                />
              </svg>
            </div>
          </button>
        <div
          ref={caraousel}
          className="w-full flex gap-4 overflow-x-hidden scroll-smooth transition-transform duration-300 ease-in-out"
        >
          {cards?.map((card:any, index:number) => {
            return (
              <StockCard
                key={index}
                symbol={card.symbol}
                changePercentage={card.changePercentage}
                price={card.price}
                image={card.image}
                sparkline={card.sparkline}
              />
            );
          })}
        </div>
        <button
            type="button"
            onClick={handleRightCarousel}
            disabled={isRightDisabled}
            className="  h-full w-12 flex justify-center items-center disabled:cursor-default"
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white flex justify-center items-center rounded-full text-xl md:text-3xl hover:bg-slate-100">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                  fill="#757779"
                />
              </svg>
            </div>
          </button>
      </div>
    </>
  );
}

const StockCard = memo(function StockCard({
  symbol,
  changePercentage,
  price,
  image,
  sparkline,
}: {
  symbol: string;
  changePercentage: number;
  price: number;
  image: string;
  sparkline: string;
}) {
  return (
    <div className=" flex flex-col shrink-0 w-48  bg-white p-4 ">
      <span className="flex shrink-0 items-center justify-start">
        <Image
          className="shrink-0 mr-1"
          src={image}
          alt={symbol}
          width={20}
          height={10}
        />
        <p className="text-xs mr-1">{symbol.toUpperCase()}</p>
        <p className={`text-[0.55rem] ${changePercentage >= 0 ? "text-[#14B079]" : "text-[#F7324C]"}`}>{changePercentage.toPrecision(3) + "%"}</p>
      </span>
      <span className="text-base">
        <p>{price}</p>
      </span>
      <span className="shirnk-0 mt-3">
        <Image src={sparkline} alt={symbol} width={100} height={100} className="w-36"/>
      </span>
    </div>
  );
});

export default memo(StockSuggestion);
