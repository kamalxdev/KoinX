"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { SymbolOverview } from "react-ts-tradingview-widgets";

function TradingViewWidget() {
  const [WindowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <SymbolOverview
      colorTheme="light"
      chartType="area"
      downColor="#800080"
      borderDownColor="#800080"
      wickDownColor="#800080"
      symbols="COINBASE:BTCUSD|All"
      chartOnly
      width={Math.floor(WindowWidth/2+WindowWidth*0.13)}
      height="500"
      lineColor="#2962FF"

    />
  );
}

export default memo(TradingViewWidget);
