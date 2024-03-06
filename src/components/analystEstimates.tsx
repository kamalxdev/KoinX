import { memo } from "react";
import TextWithInfoIcon from "./textWithInfoIcon";

function AnalystEstimates() {
  return (<><TextWithInfoIcon text="Analyst Estimates" classname="mt-5"/>

    <div className="flex gap-10">
      <span className="flex-shrink-0 w-28 h-28 bg-[#EBF9F4] text-[#0FBA83] rounded-full flex items-center justify-center text-3xl font-medium">
        76%
      </span>
      <span className="flex gap-5 text-[#7C7E8C]">
        <span className="flex flex-col gap-4 ">
            <p>Buy</p>
            <p>Hold</p>
            <p>Sell</p>
        </span>
        <span className="flex flex-col gap-4">
            <span className="flex items-center gap-3"><span className="block w-72 h-2 bg-[#00B386]"></span><p>76%</p></span>
            <span className="flex items-center gap-3"><span className="block w-8 h-2 bg-[#C7C8CE]"></span><p>8%</p></span>
            <span className="flex items-center gap-3"><span className="block w-16 h-2 bg-[#F7324C]"></span><p>16%</p></span>
        </span>
      </span>
    </div></>
  );
}

export default memo(AnalystEstimates);
