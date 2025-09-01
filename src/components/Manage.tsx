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
    "invoiceMs.",
    "Project.M",
    "Human resources & resources M",
    "Finance and accounting",
    "Documentation",
  ];

  return (
    <section className="w-full bg-white relative h-auto md:h-[125px]">
      {/* Top Row */}
      <div
        className={`flex w-full max-w-[1440px] mx-auto p-4
          ${isMobile ? "flex-col items-center space-y-4" : ""}
          ${isTablet ? "px-6 justify-between items-center" : ""}
          ${isDesktop ? "pl-[7.5rem] pr-[7.5rem] items-center justify-between" : ""}
        `}
      >
        <div className={`${isMobile ? "w-full text-center" : "flex justify-start"}`}>
          <p className="text-base md:text-lg font-medium -ml-2">Manage</p>
        </div>

        <Link href="/Create" className={`${isMobile ? "w-full" : ""}`}>
          <Button
            className="bg-blue-700 w-full md:w-[208px] h-[44px] rounded-md text-white 
              font-semibold text-sm md:text-base leading-none tracking-normal text-center px-6 -mr-3"
          >
            Create New Invoice
          </Button>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 flex justify-center md:justify-start md:pl-[7.5rem]">
        <div
          className={`${isMobile
            ? "flex flex-col space-y-3 text-sm items-center"
            : isTablet
              ? "flex justify-center"
              : "hidden md:flex"
            }`}
        >
          <ul
            className={`flex ${isMobile
              ? "flex-col items-center space-y-3"
              : "items-center gap-x-6 justify-around"
              } text-[14px] md:text-[16px]`}
          >
            {navItems.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer hover:text-blue-700 transition-colors -bottom-6 -ml-3"
                onClick={() => setActive(item)}
              >
                <span>{item}</span>
                {active === item && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[40px] md:w-[53px] h-[3px] md:h-[4px] bg-[#2ED8A3] rounded" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
