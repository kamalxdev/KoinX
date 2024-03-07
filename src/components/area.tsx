import { memo } from "react";

function Area({ children, classname }: { children: React.ReactNode, classname?: string}) {
  return <div className={`relative p-5 ${classname}`}>{children}</div>;
}


export default memo(Area);
