"use client";
import React from "react";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";

export default function Manage() {
  // ✅ Media queries
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className="w-full bg-white relative h-[125px]">
      {/* Top Row */}
      <div
        className={`flex w-full max-w-[1440px] mt-5 mx-auto px-4
          ${isMobile ? "flex-col items-center space-y-4" : ""}
          ${isTablet ? "px-8 justify-between" : ""}
          ${isDesktop ? "pl-[10rem] space-x-[46rem]" : ""}
        `}
      >
        <div className="flex justify-start">
          <p>Manage</p>
        </div>

        <Button
          className="bg-blue-700 w-[208px] h-[34px] rounded-md text-white 
            font-semibold text-base leading-none tracking-normal text-center p-6"
        >
          Manage
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-[1440px] mx-auto px-4 flex justify-start mt-5">
        <div
          className={`${isMobile
              ? "flex flex-col space-y-2 text-sm items-center"
              : isTablet
                ? "flex justify-center"
                : "hidden md:flex pl-[9rem]"
            }`}
        >
          <ul
            className={`flex ${isMobile ? "flex-col items-center space-y-2" : "items-center gap-x-4 justify-around"
              } text-[16px]`}
          >
            <li>
              <a href="">invoice.Ms</a>
            </li>
            <li>
              <a href="">Project.M</a>
            </li>
            <li>
              <a href="">Human resources & resources M</a>
            </li>
            <li>
              <a href="">Finance and accounting</a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
