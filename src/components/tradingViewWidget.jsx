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
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|ALL"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": true,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "no-values",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(24, 72, 204, 1)"
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
    <div className="relative h-[30rem]" ref={container}>
      <div></div>
    </div>
  );
}

export default memo(TradingViewWidget);
