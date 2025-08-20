"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowLeft, ChevronDown} from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function Create() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Manage"); // default active item

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      {/* Navbar */}
      <nav className="w-full bg-[#F9FAFA]">
        <div
          className={`max-w-[1440px] h-[62px] flex items-center text-[#091440] 
            ${isMobile ? "justify-between px-4" : ""} 
            ${isTablet ? "justify-around gap-x-[6rem] px-6" : ""} 
            ${isDesktop ? "justify-around gap-x-[24rem]" : ""}`}
        >
          {/* Left Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/invoicevector.png"
              alt="Vector Nomo"
              width={26}
              height={42}
            />
            <h2 className="font-semibold text-lg">Nomos OS</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex items-center space-x-6 font-medium text-[16px]">
              {["Manage", "Account", "On / Off Switch", "Log Out"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative cursor-pointer"
                    onClick={() => setActive(item)}
                  >
                    <span>{item}</span>
                    {/* underline only for Manage, Account, Log Out */}
                    {(item === "Manage" ||
                      item === "Account" ||
                      item === "Log Out") &&
                      active === item && (
                        <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[53px] h-[4px] bg-[#2ED8A3]" />
                      )}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          {isMobile && (
            <button
              className="md:hidden text-[#091440]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && isMobile && (
          <div className="md:hidden bg-[#F9FAFA] px-4 pb-4">
            <ul className="flex flex-col space-y-3 font-medium text-[16px]">
              {["Manage", "Account", "On / Off Switch", "Log Out"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative cursor-pointer"
                    onClick={() => setActive(item)}
                  >
                    <span>{item}</span>
                    {(item === "Manage" ||
                      item === "Account" ||
                      item === "Log Out") &&
                      active === item && (
                        <div className="w-[53px] h-[4px] bg-[#2ED8A3] mt-1" />
                      )}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="p-5 pl-[7rem] bg-[#FFFFFF]">create invoice</div>

      <section className="bg-[#F9FAFA]">
        <Link href="/invoice" className="inline-block">
          <button className="rounded hover:bg-gray-100 flex items-center gap-1.5 p-5 pl-[7rem] text-[16px]">
            <ArrowLeft className="w-5 h-5 text-gray-700" /> Go back
          </button>
        </Link>

  <div className="pl-[7rem] p-2.5">invoice details</div>

        <section className="max-w-[1134px] h-[619px] opacity-100  bg-white mx-auto">


        <div className="flex">
          <div className="flex flex-col w-full">
            <p className="text-[13px] ml-10 ">Reference Month</p>
            <div className="border-2 flex items-center justify-between bg-[#FFFFFF] text-[16px]     w-fit ml-10">
              April 2023
              <ChevronDown className="w-5 h-5 ml-2" />
            </div>

            {/* Horizontal line under April 2023 */}
            <div className="w-full h-[3px] bg-gray-300 mt-2"></div>
          </div>
          </div> 
           <section className="flex mt-4 p-10 ">
          {/* left side div */}
            <div className="space-y-4">
              {/* Info Box */}
              <div className="max-w-[604px] border-2 h-[62px] flex items-center justify-center">
                <p>Use client details from the previous invoice</p>
              </div>

              {/* Row 1 */}
              <div className="flex space-x-3 max-w-[604px]">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
                />
                <input
                  type="text"
                  placeholder="Client Location"
                  className="w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
                />
              </div>

              {/* Row 2 */}
              <div className="flex space-x-3 max-w-[604px]">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-[302px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
                />
              </div>

              {/* Row 3 (Full width) */}
              <div className="max-w-[604px]">
                <input
                  type="text"
                  placeholder="Company Address"
                  className="w-[604px] h-[44px] border border-[#E6EAED] rounded-[5px] p-3"
                />
              </div>
            </div>

          
          {/* right side div */}
          <div>

          </div>
          </section>
          
        </section>
        
       
         
       

      </section>
      {/* second section */}

      

    </main>
  );
}
