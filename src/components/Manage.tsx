"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";

import Link from "next/link";

export default function Manage() {
  // ✅ Media queries
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // ✅ Track active item
  const [active, setActive] = useState<string>("");

  // ✅ Navigation items
  const navItems = [
    "invoice.Ms",
    "Project.M",
    "Human resources & resources M",
    "Finance and accounting",
    "Documentation",
  ];

  return (
    <section className="w-full bg-white relative h-[125px]">
      {/* Top Row */}
      <div
        className={`flex w-full max-w-[1440px] p-4 mx-auto px-4
          ${isMobile ? "flex-col items-center space-y-4" : ""}
          ${isTablet ? "px-8 justify-between" : ""}
          ${isDesktop ? "pl-[7.5rem] space-x-[54rem]" : ""}
        `}
      >
        <div className="flex justify-start">
          <p>Manage</p>
        </div>

         <Link href="/Create">
        <Button
          className="bg-blue-700 w-[208px] h-[34px] rounded-md text-white 
            font-semibold text-base leading-none tracking-normal text-center p-6">
              Create New Invoice
        </Button>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 flex justify-start ">
        <div
          className={`${isMobile
              ? "flex flex-col space-y-2 text-sm items-center"
              : isTablet
                ? "flex justify-center"
                : "hidden md:flex pl-[6.5rem]"
            }`}
        >
          <ul
            className={`flex ${isMobile
                ? "flex-col items-center space-y-2"
                : "items-center gap-x-4 justify-around"
              } text-[16px]`}
          >
            {navItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer"
                onClick={() => setActive(item)}
              >
                <span>{item}</span>
                {active === item && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[53px] h-[4px] bg-[#2ED8A3]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
