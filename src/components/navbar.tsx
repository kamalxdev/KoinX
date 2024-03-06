import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
const navLinks = [
  {
    title: "Crypto Taxes",
    path: "/",
  },
  {
    title: "Free Tools",
    path: "/",
  },
  {
    title: "Resource Center",
    path: "/",
  },
];

function Navbar() {
  return (
    <section className="flex items-center justify-between mx-10 text-xs font-semibold">
      <div className="">
        <Image src="/logo.png" alt="KoinX Logo" width={60} height={60} />
      </div>
    <div>
        <span className="inline-flex text-xs gap-7 mr-5">
            {navLinks.map((link) => {
                return <Link href={link.path} key={link.title} className="text-xs">{link.title}</Link>
    
            })}
        </span>
        <span>
                <button type="button" className="text-white px-3.5 py-1.5 rounded-md" style={{background: "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)"}}>Get Started</button>
        </span>
    </div>
    </section>
  );
}




export default memo(Navbar);
