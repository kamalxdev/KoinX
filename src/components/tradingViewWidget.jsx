"use client";

import { memo, useEffect, useMemo, useState, useRef } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Create a unique ID for each script to prevent duplication
    try {
      var scriptId = "tradingview-widget-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
  "symbol": "COINBASE:BTCUSD",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "2",
  "locale": "en",
  "enable_publishing": false,
  "gridColor": "rgba(255, 255, 255, 0)",
  "hide_top_toolbar": true,
  "hide_legend": true,
  "save_image": false,
  "calendar": false,
  "hide_volume": true,
  "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
    } catch (error) {
      console.log(error);
    }

    return () => {
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);
  return (
    <div className="h-screen max-h-96" ref={container}>
      <div></div>
    </div>
  );
}

export default memo(TradingViewWidget);
