"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Manage from "@/components/Manage";
import Invoicems from "@/components/Invoicems";
import { useMediaQuery } from "react-responsive";

function InvoiceNavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Manage"); // default active item

  // ✅ Media queries (safe now since SSR is disabled)
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="bg-">
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
          <div className={`${isMobile ? "hidden" : "hidden md:flex"}`}>
            <ul className="flex items-center space-x-6 font-medium text-[16px]">
              {["Manage", "Account", "On / Off Switch", "Log Out"].map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer"
                  onClick={() => setActive(item)}
                >
                  <span>{item}</span>
                  {/* underline only for Manage, Account, Log Out */}
                  {(item === "Manage" || item === "Account" || item === "Log Out") &&
                    active === item && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[53px] h-[4px] bg-[#2ED8A3]" />
                    )}
                </li>
              ))}
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
              {["Manage", "Account", "On / Off Switch", "Log Out"].map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer"
                  onClick={() => setActive(item)}
                >
                  <span>{item}</span>
                  {(item === "Manage" || item === "Account" || item === "Log Out") &&
                    active === item && (
                      <div className="w-[53px] h-[4px] bg-[#2ED8A3] mt-1" />
                    )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Section below Navbar */}
      <Manage />
      <Invoicems />
    </main>
  );
}


const InvoiceNavbar = dynamic(() => Promise.resolve(InvoiceNavbarComponent), {
  ssr: false,
});

export default InvoiceNavbar;
