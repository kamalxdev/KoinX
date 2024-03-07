import { memo } from "react";

function Area({ children, classname }: { children: React.ReactNode, classname?: string}) {
  return <div className={`relative p-5 pb-10 my-4 bg-white rounded-md ${classname} `}>{children}</div>;
}


export default memo(Area);
