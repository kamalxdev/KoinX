"use client";

import Image from "next/image";
import { memo, useState } from "react";
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
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <section className="flex items-center justify-between mx-10 my-5 text-xs font-semibold">
        <div className="flex items-center justify-between">
          <Image src="/logo.png" alt="KoinX Logo" width={70} height={70} />
        </div>
        <div className="md:hidden block">
          <button onClick={()=>setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          </div>
        <div className="md:block hidden">
          <span className="inline-flex text-xs gap-7 mr-5">
            {navLinks.map((link) => {
              return (
                <Link href={link.path} key={link.title} className="text-xs">
                  {link.title}
                </Link>
              );
            })}
          </span>
          <span>
            <button
              type="button"
              className="text-white px-3.5 py-1.5 rounded-md"
              style={{
                background:
                  "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
              }}
            >
              Get Started
            </button>
          </span>
        </div>

        {IsMenuOpen && (
              <section className="absolute border z-50 top-0 left-0 m-5 md:hidden block bg-white w-11/12 h-72 rounded-md ">
              <div className="ml-5">
                <Image src="/logo.png" alt="KoinX Logo" width={70} height={70} />
              </div>
              <button className="absolute top-5 right-5" onClick={()=>setIsMenuOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              <div className="flex flex-col items-start justify-start ml-10 mt-3">
                <span className="inline-flex flex-col text-xs gap-7 mr-5">
                  {navLinks.map((link) => {
                    return (
                      <Link href={link.path} key={link.title} className="text-xs">
                        {link.title}
                      </Link>
                    );
                  })}
                </span>
                <span>
                  <button
                    type="button"
                    className="text-white px-3.5 py-1.5 rounded-md mt-5"
                    style={{
                      background:
                        "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
                    }}
                  >
                    Get Started
                  </button>
                </span>
              </div>
            </section>
        )}
      </section>
    </>
  );
}


export default memo(Navbar);
